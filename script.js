(function () {
  'use strict';

  /* ==========================================
     PRODUCT DATA — 8 items | DA currency | WhatsApp: +213659843187
     ========================================== */
  var products = [
    {
      name: 'ASUS ROG Strix SCAR 18',
      specs: ['Intel Core i9-14900HX', 'NVIDIA RTX 4090 16GB', '32GB DDR5 5600MHz', '18" QHD 240Hz'],
      price: 180000,
      oldPrice: 210000,
      badge: '-14%',
      image: 'images/asus-rog-laptop.jpg',
      tags: 'asus rog strix scar لابتوب حاسوب محمول'
    },
    {
      name: 'Lenovo Legion Pro 7i',
      specs: ['Intel Core i9-13900HX', 'NVIDIA RTX 4080 12GB', '32GB DDR5 5600MHz', '16" QHD 240Hz'],
      price: 150000,
      oldPrice: 175000,
      badge: '-14%',
      image: 'images/lenovo-legion-laptop.jpg',
      tags: 'lenovo legion pro لابتوب حاسوب محمول'
    },
    {
      name: 'NVIDIA GeForce RTX 4080 Super',
      specs: ['16GB GDDR6X 256-bit', 'CUDA Cores: 10240', 'DLSS 3.5 / Ray Tracing', 'TDP 320W'],
      price: 220000,
      oldPrice: null,
      badge: 'جديد',
      image: 'images/rtx-4080-gpu.jpg',
      tags: 'nvidia rtx 4080 super كرت شاشة gpu'
    },
    {
      name: 'AMD Ryzen 9 7950X3D',
      specs: ['16 نواة / 32 خيط', 'Boost: 5.7 GHz', '144MB Cache', 'TDP 120W'],
      price: 95000,
      oldPrice: 110000,
      badge: '-14%',
      image: 'images/amd-ryzen-cpu.jpg',
      tags: 'amd ryzen 9 7950x3d معالج cpu'
    },
    {
      name: 'تجميعة الدرجة الأولى',
      specs: ['Ryzen 9 7950X3D + RTX 4090', '64GB DDR5 6000MHz', '2TB NVMe Gen5', 'تبريد مائي 360mm'],
      price: 350000,
      oldPrice: null,
      badge: 'الأفضل',
      image: 'images/flagship-pc-build.jpg',
      tags: 'تجميعة درجة أولى flagship build pc desktop'
    },
    {
      name: 'تجميعة اقتصادية',
      specs: ['Ryzen 5 7600 + RTX 4060 Ti', '16GB DDR5 6000MHz', '1TB NVMe Gen4', 'تبريد هوائي'],
      price: 110000,
      oldPrice: 130000,
      badge: '-15%',
      image: 'images/budget-pc-build.jpg',
      tags: 'تجميعة اقتصادية budget build pc desktop'
    },
    {
      name: 'شاشة ASUS ROG Swift 32" OLED',
      specs: ['32" 4K UHD OLED 240Hz', '0.03ms GTG / HDR 400', 'DisplayPort 2.1', 'G-Sync Compatible'],
      price: 120000,
      oldPrice: 145000,
      badge: '-17%',
      image: 'images/rog-oled-monitor.jpg',
      tags: 'شاشة asus rog swift oled monitor 4k'
    },
    {
      name: 'Logitech G Pro X Superlight 2',
      specs: ['مستشعر HERO 2 44K DPI', 'وزن: 60g فقط', 'زمن استجابة: 0.2ms', 'بطارية 95 ساعة'],
      price: 15000,
      oldPrice: 18500,
      badge: '-19%',
      image: 'images/logitech-mouse.jpg',
      tags: 'ماوس logitech g pro superlight mouse wireless'
    }
  ];

  var WA = '213659843187';

  /* ==========================================
     RENDER PRODUCT CARDS
     ========================================== */
  var grid = document.getElementById('products-grid');
  var emptyMsg = document.getElementById('filter-empty');

  if (grid) {
    products.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'product-card reveal';
      card.setAttribute('data-search', (p.name + ' ' + p.tags).toLowerCase());

      var specsHtml = '';
      p.specs.forEach(function (s) {
        specsHtml += '<span>' + s + '</span>';
      });

      var badgeHtml = '<span class="product-badge">' + p.badge + '</span>';
      var oldPriceHtml = p.oldPrice
        ? '<span class="old-price">' + p.oldPrice.toLocaleString() + ' DA</span>'
        : '';

      var waMsg = 'أريد ' + p.name;

      card.innerHTML =
        '<div class="product-img">' +
          '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
        '</div>' +
        '<div class="product-body">' +
          badgeHtml +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<div class="product-specs">' + specsHtml + '</div>' +
        '</div>' +
        '<div class="product-footer">' +
          '<div class="price-row">' +
            '<span class="current-price">' + p.price.toLocaleString() + ' DA</span>' +
            oldPriceHtml +
          '</div>' +
          '<a href="https://wa.me/' + WA + '?text=' + encodeURIComponent(waMsg) + '" target="_blank" rel="noopener" class="btn-primary">طلب سريع عبر واتساب</a>' +
        '</div>';

      grid.appendChild(card);
    });
  }

  /* ==========================================
     LIVE FILTER
     ========================================== */
  var searchInput = document.querySelector('.search-input');
  var productCards = document.querySelectorAll('.product-card');

  function filterProducts(query) {
    var q = query.trim().toLowerCase();
    var visible = 0;

    productCards.forEach(function (card) {
      var data = card.getAttribute('data-search') || '';
      var match = q === '' || data.indexOf(q) !== -1;
      card.classList.toggle('filter-hidden', !match);
      if (match) visible++;
    });

    if (emptyMsg) {
      emptyMsg.classList.toggle('show', q !== '' && visible === 0);
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      filterProducts(this.value);
    });
  }

  /* ==========================================
     STICKY HEADER
     ========================================== */
  var header = document.getElementById('header');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ==========================================
     SCROLL REVEAL
     ========================================== */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  document.querySelectorAll('.cat-card, .value-card, .build-card').forEach(function (el) {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  document.querySelectorAll('.product-card').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.07) + 's';
  });
  document.querySelectorAll('.cat-card').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.07) + 's';
  });

  /* ==========================================
     MOBILE OVERLAY
     ========================================== */
  var hamburger = document.querySelector('.hamburger');
  var overlay = document.querySelector('.mobile-overlay');
  var backdrop = document.querySelector('.overlay-backdrop');
  var closeBtn = document.querySelector('.mobile-close');

  function openMenu() { document.body.classList.add('menu-open'); }
  function closeMenu() { document.body.classList.remove('menu-open'); }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
      var href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        var target = document.querySelector(href);
        if (target) {
          var h = header.offsetHeight;
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - h - 16,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  /* ==========================================
     KEYBOARD SHORTCUTS
     ========================================== */
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
    if (e.key === 'Escape') {
      if (document.body.classList.contains('menu-open')) closeMenu();
      else if (searchInput && document.activeElement === searchInput) searchInput.blur();
    }
  });

  /* ==========================================
     SMOOTH SCROLL (anchor links)
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        var h = header.offsetHeight;
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - h - 16,
          behavior: 'smooth'
        });
      }
    });
  });

})();
