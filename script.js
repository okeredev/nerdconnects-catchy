/* ═══════════════════════════════════════════════
   NerdConnects SEO Blog — Interactive Logic & UX
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

    // ── PERMANENT SLEEK DARK MODE (NO LIGHT MODE) ──
  document.documentElement.setAttribute('data-theme', 'dark');
  try {
    localStorage.removeItem('nerd_theme');
    localStorage.removeItem('nerd_theme_v2');
    localStorage.removeItem('nerd_theme_catchy');
  } catch(e) {}

  // ── UNREGISTER ANY ADS SERVICE WORKERS ──
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (var i = 0; i < registrations.length; i++) {
        registrations[i].unregister();
      }
    });
  }


  // ── 2. READING PROGRESS BAR ──
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // ── 3. STICKY NAVBAR SHADOW ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── 4. MOBILE HAMBURGER TOGGLE ──
  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelector('.navbar__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }

  // ── 5. INTERACTIVE NERD CALCULATOR / DEGREE TABS ──
  const calcTabs = document.querySelectorAll('.calc-tab');
  const calcFee = document.getElementById('calc-fee');
  const calcTime = document.getElementById('calc-time');
  const calcList = document.getElementById('calc-checklist');
  const calcBtn = document.getElementById('calc-btn');

  const degreeData = {
    'student': {
      title: "Nigerian Student (B.Sc / M.Sc / Ph.D)",
      fee: "₦12,500",
      time: "24–48 Hrs (Equal Speed)",
      reqs: [
        "Signed Certification / Approval Page",
        "Complete Thesis or Dissertation PDF (< 50MB)",
        "Student Matriculation & Dept Info",
        "Same 24–48hr Speed — Zero Partiality"
      ],
      linkText: "Register as Student (₦12,500) on NerdConnects.xyz →",
      utm: "utm_source=blog&utm_medium=calc&utm_campaign=student"
    },
    'cafe': {
      title: "Cyber Cafe / Partner Agent",
      fee: "₦10,000",
      time: "24–48 Hrs (Equal Speed)",
      reqs: [
        "Bulk / Partner Agent Submission Rate",
        "Pre-upload Document Quality Check",
        "Remita RRR Remittance Included",
        "Same 24–48hr Speed — Zero Partiality"
      ],
      linkText: "Register as Cyber Cafe (₦10,000) on NerdConnects.xyz →",
      utm: "utm_source=blog&utm_medium=calc&utm_campaign=cafe"
    },
    'foreign': {
      title: "Foreign Degree Submission",
      fee: "₦25,000",
      time: "24–48 Hrs (Equal Speed)",
      reqs: [
        "Foreign Qualification Indexing in NERD",
        "International Thesis & Manuscript Audit",
        "Remita Settlement & Institutional Filing",
        "Same 24–48hr Speed — Zero Partiality"
      ],
      linkText: "Register Foreign Degree (₦25,000) on NerdConnects.xyz →",
      utm: "utm_source=blog&utm_medium=calc&utm_campaign=foreign"
    }
  };

  calcTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      calcTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      const degree = tab.getAttribute('data-degree');
      const data = degreeData[degree];
      if (data && calcFee && calcTime && calcList && calcBtn) {
        calcFee.textContent = data.fee;
        calcTime.textContent = data.time;
        calcList.innerHTML = data.reqs.map(function (req) {
          return '<li><span class="calc-check-icon">✓</span> ' + req + '</li>';
        }).join('');
        calcBtn.textContent = data.linkText;
        calcBtn.href = 'https://nerdconnects.xyz?' + data.utm;
      }
    });
  });

  // ── 6. REAL-TIME ARTICLE SEARCH & CATEGORY FILTER ──
  const searchInput = document.getElementById('search-articles');
  const filterChips = document.querySelectorAll('.filter-chip');
  const articleCards = document.querySelectorAll('.articles-grid .article-card');
  const countBadge = document.getElementById('articles-count');

  function filterArticles() {
    if (!articleCards.length) return;
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeChip = document.querySelector('.filter-chip.active');
    const selectedCategory = activeChip ? activeChip.getAttribute('data-filter') : 'all';

    var visibleCount = 0;

    articleCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesSearch = !query || cardText.indexOf(query) !== -1;
      const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = 'Showing ' + visibleCount + ' of ' + articleCards.length + ' guides';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterArticles);
  }

  filterChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      filterChips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      filterArticles();
    });
  });

  // ── 7. SCROLL-TRIGGERED ANIMATIONS ──
  const animateEls = document.querySelectorAll('.animate-on-scroll');
  if (animateEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    animateEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── 8. FAQ ACCORDION ──
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-item__question');
    if (btn) {
      btn.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(function (other) { other.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // ── 9. ANIMATE STAT COUNTERS ──
  const statNumbers = document.querySelectorAll('.stat__number');
  if (statNumbers.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) { counterObserver.observe(el); });
  }

  function animateCounter(el) {
    var text = el.getAttribute('data-value') || el.textContent;
    var suffix = text.replace(/[\d,\.]+/, '');
    var prefix = text.indexOf('₦') === 0 ? '₦' : '';
    var rawNum = text.replace(/[^\d\.]/g, '');
    var num = parseFloat(rawNum);
    if (isNaN(num)) return;
    var duration = 1200;
    var start = performance.now();
    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * num);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = text;
    }
    requestAnimationFrame(tick);
  }

});
