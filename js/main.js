// ========================================
// LogiFlow — Landing Page JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------
  // 1. Mobile Menu Toggle
  // ----------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ----------------------------------------
  // 2. Scroll Reveal (IntersectionObserver)
  // ----------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ----------------------------------------
  // 3. Animated Counters
  // ----------------------------------------
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => {
      const target = parseFloat(counter.dataset.target);
      const isDecimal = counter.dataset.decimal === 'true';
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;

        if (isDecimal) {
          counter.textContent = current.toFixed(1);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // Ensure final value is exact
          if (isDecimal) {
            counter.textContent = target.toFixed(1);
          } else {
            counter.textContent = target.toLocaleString();
          }
        }
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger counters when stats section enters viewport
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  // ----------------------------------------
  // 4. Navbar Background on Scroll
  // ----------------------------------------
  const nav = document.querySelector('.glass-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 15, 30, 0.95)';
      } else {
        nav.style.background = 'rgba(10, 15, 30, 0.7)';
      }
    });
  }

  // ----------------------------------------
  // 5. Tracking Bar Mock
  // ----------------------------------------
  const trackBtn = document.getElementById('track-btn');
  const trackInput = document.getElementById('track-input');

  if (trackBtn && trackInput) {
    trackBtn.addEventListener('click', () => {
      if (trackInput.value.trim()) {
        // Navigate to dashboard with tracking param
        window.location.href = 'dashboard.html?track=' + encodeURIComponent(trackInput.value.trim());
      } else {
        trackInput.setAttribute('placeholder', 'Please enter a tracking number...');
        trackInput.focus();
      }
    });

    trackInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        trackBtn.click();
      }
    });
  }

});
