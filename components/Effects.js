'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * All the site's interactivity, ported from the original main.js.
 * Runs after every page render so freshly-loaded content animates too.
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];

    /* ---- Home page gets the transparent-over-hero nav ---- */
    if (pathname === '/') document.body.classList.add('hero-page');
    else document.body.classList.remove('hero-page');

    /* ---- Render Lucide icons (CDN script may load slightly late) ---- */
    const renderIcons = () => { if (window.lucide) window.lucide.createIcons(); };
    renderIcons();
    const iconTimers = [setTimeout(renderIcons, 200), setTimeout(renderIcons, 800)];
    cleanups.push(() => iconTimers.forEach(clearTimeout));

    /* ---- Sticky / shrinking header ---- */
    const header = document.querySelector('.site-header');
    const onScrollHeader = () => {
      if (!header) return;
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();
    cleanups.push(() => window.removeEventListener('scroll', onScrollHeader));

    /* ---- Mobile menu ---- */
    const toggle = document.getElementById('navToggle');
    const linksEl = document.getElementById('navLinks');
    const backdrop = document.querySelector('.nav-backdrop');
    const closeMenu = () => {
      if (!toggle) return;
      toggle.classList.remove('open');
      linksEl.classList.remove('open');
      if (backdrop) backdrop.classList.remove('show');
      document.body.style.overflow = '';
    };
    if (toggle && linksEl) {
      const onToggle = () => {
        const open = toggle.classList.toggle('open');
        linksEl.classList.toggle('open', open);
        if (backdrop) backdrop.classList.toggle('show', open);
        document.body.style.overflow = open ? 'hidden' : '';
      };
      toggle.addEventListener('click', onToggle);
      const linkEls = linksEl.querySelectorAll('a');
      linkEls.forEach((a) => a.addEventListener('click', closeMenu));
      if (backdrop) backdrop.addEventListener('click', closeMenu);
      const onEsc = (e) => { if (e.key === 'Escape') closeMenu(); };
      document.addEventListener('keydown', onEsc);
      cleanups.push(() => {
        toggle.removeEventListener('click', onToggle);
        linkEls.forEach((a) => a.removeEventListener('click', closeMenu));
        if (backdrop) backdrop.removeEventListener('click', closeMenu);
        document.removeEventListener('keydown', onEsc);
        document.body.style.overflow = '';
      });
    }

    /* ---- Scroll-reveal animations ---- */
    const animated = document.querySelectorAll('[data-animate]');
    if (animated.length) {
      if (reduceMotion || !('IntersectionObserver' in window)) {
        animated.forEach((el) => el.classList.add('in-view'));
      } else {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        animated.forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      }
    }

    /* ---- Stat numbers (static — no count-up animation) ---- */
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach((el) => {
      el.textContent = parseFloat(el.getAttribute('data-count')).toLocaleString();
    });

    /* ---- Gallery lightbox ---- */
    const galleryImgs = Array.prototype.slice.call(
      document.querySelectorAll('.gallery-item[data-full]')
    );
    if (galleryImgs.length) {
      const lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML =
        '<button class="lightbox-close" aria-label="Close">&times;</button>' +
        '<button class="lightbox-nav prev" aria-label="Previous">&#8249;</button>' +
        '<img alt="Enlarged gallery image">' +
        '<button class="lightbox-nav next" aria-label="Next">&#8250;</button>';
      document.body.appendChild(lb);
      const lbImg = lb.querySelector('img');
      let current = 0;

      const show = (i) => {
        current = (i + galleryImgs.length) % galleryImgs.length;
        lbImg.src = galleryImgs[current].getAttribute('data-full');
      };
      const open = (i) => { show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; };
      const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };

      const itemHandlers = [];
      galleryImgs.forEach((item, i) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        const onClick = () => open(i);
        const onKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } };
        item.addEventListener('click', onClick);
        item.addEventListener('keydown', onKey);
        itemHandlers.push({ item, onClick, onKey });
      });

      const onClose = () => close();
      const onPrev = (e) => { e.stopPropagation(); show(current - 1); };
      const onNext = (e) => { e.stopPropagation(); show(current + 1); };
      const onBackdrop = (e) => { if (e.target === lb) close(); };
      const onKeyNav = (e) => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
      };
      lb.querySelector('.lightbox-close').addEventListener('click', onClose);
      lb.querySelector('.prev').addEventListener('click', onPrev);
      lb.querySelector('.next').addEventListener('click', onNext);
      lb.addEventListener('click', onBackdrop);
      document.addEventListener('keydown', onKeyNav);

      cleanups.push(() => {
        itemHandlers.forEach(({ item, onClick, onKey }) => {
          item.removeEventListener('click', onClick);
          item.removeEventListener('keydown', onKey);
        });
        document.removeEventListener('keydown', onKeyNav);
        lb.remove();
        document.body.style.overflow = '';
      });
    }

    /* ---- Contact form (local-friendly message) ---- */
    const form = document.getElementById('contactForm');
    if (form) {
      const onSubmit = (e) => {
        e.preventDefault();
        alert('Thanks for your message!\n\n(Note: connect the form to a service like Formspree, or use Vercel/Netlify form handling, before it can actually send emails — see the comment in the code.)');
        form.reset();
      };
      form.addEventListener('submit', onSubmit);
      cleanups.push(() => form.removeEventListener('submit', onSubmit));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
