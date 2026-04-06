// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9S9X5WLE2B');

document.addEventListener('DOMContentLoaded', function() {
  // CTA buttons (App Store / Play / Web often use .cta-button or .platform-button)
  document.querySelectorAll('.cta-button, .platform-button').forEach(function(button) {
    button.addEventListener('click', function() {
      if (typeof gtag === 'function') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: this.textContent.trim()
        });
      }
    });
  });

  // App Store, Google Play, and web app portal — same event name site-wide for GA4/Ads
  var appLinkSelector = 'a[href*="apps.apple.com"], a[href*="play.google.com"], a[href*="app.pass-mcq.ca"]';
  document.querySelectorAll(appLinkSelector).forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof gtag !== 'function') return;
      var el = this;
      var pagePath = window.location.pathname;
      var section = el.closest('section');
      var heading = section ? section.querySelector('h2, h3') : null;
      var linkLocation = heading ? heading.textContent.trim() : 'Unknown section';
      var linkText = el.textContent.trim();
      gtag('event', 'app_download_click', {
        event_category: 'conversion',
        event_label: linkText || 'App Download',
        page_path: pagePath,
        link_context: linkLocation
      });
    });
  });

  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof gtag === 'function') {
        gtag('event', 'navigation', {
          event_category: 'engagement',
          event_label: this.textContent.trim()
        });
      }
    });
  });

  var mcqButton = document.querySelector('.floating-mcq-button');
  if (mcqButton) {
    mcqButton.addEventListener('click', function() {
      if (typeof gtag === 'function') {
        gtag('event', 'click', {
          event_category: 'conversion',
          event_label: 'passMCQ Button'
        });
      }
    });
  }
});
