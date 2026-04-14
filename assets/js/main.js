document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;

    // =====================
    // THEME TOGGLE
    // =====================
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateAllThemeIcons(savedTheme);

    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateAllThemeIcons(next);
        });
    });

    function updateAllThemeIcons(theme) {
        document.querySelectorAll('.theme-toggle i').forEach(icon => {
            icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
        });
    }

    // =====================
    // RTL TOGGLE
    // =====================
    const savedDir = localStorage.getItem('dir') || 'ltr';
    html.setAttribute('dir', savedDir);
    updateRtlIcons(savedDir);

    document.querySelectorAll('.rtl-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = html.getAttribute('dir') || 'ltr';
            const next = current === 'ltr' ? 'rtl' : 'ltr';
            html.setAttribute('dir', next);
            localStorage.setItem('dir', next);
            updateRtlIcons(next);
        });
    });

    function updateRtlIcons(dir) {
        document.querySelectorAll('.rtl-toggle i').forEach(icon => {
            icon.className = 'bi bi-arrow-left-right';
        });
    }

    // =====================
    // BACK TO TOP
    // =====================
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =====================
    // AUTH CARD DIVIDER BG SYNC
    // =====================
    function syncDividerBg() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        document.querySelectorAll('.auth-divider span').forEach(el => {
            el.style.backgroundColor = isDark ? '#1A0836' : '#ffffff';
        });
    }
    syncDividerBg();
    const themeObserver = new MutationObserver(syncDividerBg);
    themeObserver.observe(html, { attributes: true });
});
