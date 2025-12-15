// Style definitions
const styles = {
  'tomorrow': {
    name: 'Tomorrow',
    css: `
      html {
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      body {
        background: #1d1f21 none;
        color: #c5c8c6;
        font-family: arial, helvetica, sans-serif;
        font-size: 10pt;
        margin-left: 0;
        margin-right: 0;
        margin-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
      }
      a, a:visited {
        color: #81a2be !important;
        text-decoration: none;
      }
      a:hover {
        color: #5F89AC !important;
      }
      .navbar {
        background-color: #282a2e !important;
        border-bottom: 1px solid #111 !important;
      }
      .navbar-brand, .navbar-nav .nav-link {
        color: #c5c8c6 !important;
      }
      .navbar-nav .nav-link:hover {
        color: #81a2be !important;
      }
      .card {
        background-color: #282a2e !important;
        border: 1px solid #111 !important;
        color: #c5c8c6 !important;
      }
      .card-title {
        color: #b294bb !important;
      }
      .tomorrow-text {
        color: #c5c8c6 !important;
      }
      .modal-content {
        background-color: #282a2e !important;
        border: 1px solid #111 !important;
        color: #c5c8c6 !important;
      }
      .modal-header {
        background-color: #282a2e !important;
        border-bottom: 1px solid #111 !important;
      }
      .modal-header .modal-title {
        color: #c5c8c6 !important;
      }
      .modal-header .btn-close {
        filter: invert(1) grayscale(100%) brightness(200%);
      }
      .modal-body {
        background-color: #282a2e !important;
        color: #c5c8c6 !important;
      }
      .modal-body #ruffleDescription {
        background-color: #1d1f21 !important;
        color: #c5c8c6 !important;
      }
      .btn-primary { background-color: #81a2be !important; border-color: #81a2be !important; color: #1d1f21 !important; }
      .btn-success { background-color: #b5bd68 !important; border-color: #b5bd68 !important; color: #1d1f21 !important; }
      .btn-info { background-color: #81a2be !important; border-color: #81a2be !important; color: #1d1f21 !important; }
      .alert-info { background-color: #282a2e !important; border-color: #111 !important; color: #c5c8c6 !important; }
      .alert-warning { background-color: #282a2e !important; border-color: #111 !important; color: #c5c8c6 !important; }
      .alert-success { background-color: #282a2e !important; border-color: #111 !important; color: #c5c8c6 !important; }
      h1, h2, h3, h4, h5, h6 { color: #c5c8c6 !important; }
      .lead { color: #c5c8c6 !important; }
    `
  },
  'yotsuba-b': {
    name: 'Yotsuba B',
    css: `
      html {
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      body {
        background: #EEF2FF url(/image/fade-blue.png) top center repeat-x;
        color: #000000;
        font-family: arial, helvetica, sans-serif;
        font-size: 10pt;
        margin-left: 0;
        margin-right: 0;
        margin-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
      }
      a, a:visited {
        color: #34345C;
        text-decoration: none;
      }
      a:hover {
        color: #DD0000 !important;
      }
      .navbar {
        background-color: #D6DAF0 !important;
        border-bottom: 2px solid #B7C5D9 !important;
      }
      .navbar-brand, .navbar-nav .nav-link {
        color: #34345C !important;
      }
      .navbar-nav .nav-link:hover {
        color: #DD0000 !important;
      }
      .card {
        background-color: #D6DAF0 !important;
        border: 1px solid #B7C5D9 !important;
        color: #000000 !important;
      }
      .card-title {
        color: #0F0C5D !important;
      }
      .btn-primary { background-color: #98E !important; border-color: #98E !important; color: #000 !important; }
      .btn-success { background-color: #98E !important; border-color: #98E !important; color: #000 !important; }
      .btn-info { background-color: #98E !important; border-color: #98E !important; color: #000 !important; }
      .alert-info { background-color: #D6DAF0 !important; border-color: #B7C5D9 !important; color: #000000 !important; }
      .alert-warning { background-color: #D6DAF0 !important; border-color: #B7C5D9 !important; color: #000000 !important; }
      .alert-success { background-color: #D6DAF0 !important; border-color: #B7C5D9 !important; color: #000000 !important; }
      h1, h2, h3, h4, h5, h6 { color: #000000 !important; }
      .lead { color: #000000 !important; }
    `
  },
  'yotsubaclassic': {
    name: 'Yotsubaclassic',
    css: `
      html {
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      body {
        background: #FFFFEE url(/image/fade.png) top center repeat-x;
        color: #800000;
        font-family: arial, helvetica, sans-serif;
        font-size: 10pt;
        margin-left: 0;
        margin-right: 0;
        margin-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
      }
      a, a:visited {
        color: #00E;
        text-decoration: none;
      }
      a:hover {
        color: red !important;
      }
      .navbar {
        background-color: #F0E0D6 !important;
        border-bottom: 2px solid #D9BFB7 !important;
      }
      .navbar-brand, .navbar-nav .nav-link {
        color: #800000 !important;
      }
      .navbar-nav .nav-link:hover {
        color: red !important;
      }
      .card {
        background-color: #F0E0D6 !important;
        border: 1px solid #D9BFB7 !important;
        color: #800000 !important;
      }
      .card-title {
        color: #cc1105 !important;
      }
      .btn-primary { background-color: #EA8 !important; border-color: #EA8 !important; color: #800 !important; }
      .btn-success { background-color: #EA8 !important; border-color: #EA8 !important; color: #800 !important; }
      .btn-info { background-color: #EA8 !important; border-color: #EA8 !important; color: #800 !important; }
      .alert-info { background-color: #F0E0D6 !important; border-color: #D9BFB7 !important; color: #800000 !important; }
      .alert-warning { background-color: #F0E0D6 !important; border-color: #D9BFB7 !important; color: #800000 !important; }
      .alert-success { background-color: #F0E0D6 !important; border-color: #D9BFB7 !important; color: #800000 !important; }
      h1, h2, h3, h4, h5, h6 { color: #800000 !important; }
      .lead { color: #800000 !important; }
    `
  }
};

// Apply style immediately (before DOM is ready)
(function() {
  function createOrGetStyleElement() {
    let styleElement = document.getElementById('dynamic-style');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamic-style';
      
      // Try to insert after Bootstrap CSS link, otherwise append to head
      const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
      if (bootstrapLink && bootstrapLink.nextSibling) {
        bootstrapLink.parentNode.insertBefore(styleElement, bootstrapLink.nextSibling);
      } else if (bootstrapLink) {
        bootstrapLink.parentNode.insertBefore(styleElement, bootstrapLink.nextSibling);
      } else {
        document.head.appendChild(styleElement);
      }
    }
    return styleElement;
  }
  
  // Get or create style element immediately
  let styleElement = createOrGetStyleElement();

  // Get saved style - don't default here, check if it exists
  let savedStyle = localStorage.getItem('selectedStyle');
  // Only default if there's no saved style
  if (!savedStyle || !styles[savedStyle]) {
    savedStyle = 'yotsubaclassic';
    localStorage.setItem('selectedStyle', savedStyle);
  }
  
  // Apply saved style immediately
  if (styles[savedStyle]) {
    styleElement.textContent = styles[savedStyle].css;
  }
  
  // Reapply after page fully loads to ensure it overrides Bootstrap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      styleElement = createOrGetStyleElement();
      if (styles[savedStyle]) {
        styleElement.textContent = styles[savedStyle].css;
      }
    });
  }
  
  // Also reapply after window loads completely
  window.addEventListener('load', function() {
    styleElement = createOrGetStyleElement();
    if (styles[savedStyle]) {
      styleElement.textContent = styles[savedStyle].css;
    }
    // Reapply again after a short delay to catch any late-loading styles
    setTimeout(function() {
      styleElement = createOrGetStyleElement();
      if (styles[savedStyle]) {
        styleElement.textContent = styles[savedStyle].css;
      }
    }, 100);
  });
})();

// Style switcher functionality
function initStyleSwitcher() {
  // Get saved style or default to yotsubaclassic
  let savedStyle = localStorage.getItem('selectedStyle');
  
  // Validate saved style
  if (!savedStyle || !styles[savedStyle]) {
    savedStyle = 'yotsubaclassic';
    localStorage.setItem('selectedStyle', savedStyle);
  }
  
  // Ensure style is applied (in case it wasn't applied earlier)
  applyStyle(savedStyle);

  // Set dropdown value
  const styleSelect = document.getElementById('styleSelect');
  if (styleSelect) {
    // CRITICAL: Set the dropdown value FIRST before any cloning
    // This prevents the browser from defaulting to the first option
    styleSelect.value = savedStyle;
    
    // Force a reflow to ensure the value is set
    styleSelect.offsetHeight;
    
    // Remove any existing listeners to avoid duplicates
    const oldSelect = styleSelect;
    const newSelect = oldSelect.cloneNode(true);
    // Preserve the value explicitly - use the saved style, not the old select's value
    const preservedValue = savedStyle;
    oldSelect.parentNode.replaceChild(newSelect, oldSelect);
    // Set the value on the new element immediately
    newSelect.value = preservedValue;
    // Force a reflow again
    newSelect.offsetHeight;
    
    // Force set again after a microtask to ensure it sticks
    setTimeout(() => {
      if (newSelect.value !== preservedValue) {
        newSelect.value = preservedValue;
        newSelect.offsetHeight; // Force reflow
      }
    }, 0);
    
    // Add change listener
    newSelect.addEventListener('change', function() {
      const selectedStyle = this.value;
      // Validate the selected style
      if (!styles[selectedStyle]) {
        console.warn('Invalid style selected:', selectedStyle);
        const validStyle = localStorage.getItem('selectedStyle') || 'yotsubaclassic';
        this.value = validStyle;
        return;
      }
      applyStyle(selectedStyle);
      localStorage.setItem('selectedStyle', selectedStyle);
      // Trigger custom event for same-tab updates
      window.dispatchEvent(new CustomEvent('styleChanged'));
    });
    
    // Double-check the value is set correctly multiple times
    setTimeout(function() {
      const checkSelect = document.getElementById('styleSelect');
      const currentSaved = localStorage.getItem('selectedStyle');
      if (checkSelect) {
        if (!currentSaved || !styles[currentSaved]) {
          const defaultStyle = 'yotsubaclassic';
          localStorage.setItem('selectedStyle', defaultStyle);
          checkSelect.value = defaultStyle;
        } else if (checkSelect.value !== currentSaved) {
          checkSelect.value = currentSaved;
        }
      }
    }, 50);
    
    setTimeout(function() {
      const checkSelect = document.getElementById('styleSelect');
      const currentSaved = localStorage.getItem('selectedStyle');
      if (checkSelect && currentSaved && styles[currentSaved] && checkSelect.value !== currentSaved) {
        checkSelect.value = currentSaved;
      }
    }, 200);
  }

  // Listen for storage changes (when style is changed in another tab)
  window.addEventListener('storage', function(e) {
    if (e.key === 'selectedStyle') {
      const newStyle = e.newValue || 'yotsubaclassic';
      applyStyle(newStyle);
      const styleSelect = document.getElementById('styleSelect');
      if (styleSelect) {
        styleSelect.value = newStyle;
      }
    }
  });

  // Listen for custom event (for same-tab/page updates)
  window.addEventListener('styleChanged', function(e) {
    const newStyle = localStorage.getItem('selectedStyle') || 'yotsubaclassic';
    applyStyle(newStyle);
    const styleSelect = document.getElementById('styleSelect');
    if (styleSelect) {
      styleSelect.value = newStyle;
    }
  });
}

function applyStyle(styleKey) {
  // Validate style key
  if (!styles[styleKey]) {
    console.warn('Invalid style key:', styleKey, 'Defaulting to yotsubaclassic');
    styleKey = 'yotsubaclassic';
    localStorage.setItem('selectedStyle', styleKey);
  }
  
  let styleElement = document.getElementById('dynamic-style');
  if (!styleElement) {
    // Create style element if it doesn't exist
    styleElement = document.createElement('style');
    styleElement.id = 'dynamic-style';
    
    // Try to insert after Bootstrap CSS link, otherwise append to head
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    if (bootstrapLink) {
      if (bootstrapLink.nextSibling) {
        bootstrapLink.parentNode.insertBefore(styleElement, bootstrapLink.nextSibling);
      } else {
        bootstrapLink.parentNode.appendChild(styleElement);
      }
    } else {
      // Insert at the end of head to ensure it loads after Bootstrap
      document.head.appendChild(styleElement);
    }
  }
  
  if (styles[styleKey]) {
    styleElement.textContent = styles[styleKey].css;
    // Force reflow to ensure styles are applied
    styleElement.offsetHeight;
    
    // Update dropdown value to match applied style
    // Only update if it's different to avoid unnecessary changes
    const styleSelect = document.getElementById('styleSelect');
    if (styleSelect) {
      // Only update if the value is actually different
      if (styleSelect.value !== styleKey) {
        styleSelect.value = styleKey;
        // Force a reflow to ensure the value sticks
        styleSelect.offsetHeight;
      }
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure dropdown is fully rendered
    setTimeout(initStyleSwitcher, 10);
  });
} else {
  // If DOM is already ready, wait a bit anyway
  setTimeout(initStyleSwitcher, 10);
}

