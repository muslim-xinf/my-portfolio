const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');

// Check layout theme preference
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleIcon.classList.remove('fa-moon');
    themeToggleIcon.classList.add('fa-sun');
} else {
    document.documentElement.classList.remove('dark');
    themeToggleIcon.classList.remove('fa-sun');
    themeToggleIcon.classList.add('fa-moon');
}

themeToggleBtn.addEventListener('click', function() {
    // Toggle Icon
    themeToggleIcon.classList.toggle('fa-moon');
    themeToggleIcon.classList.toggle('fa-sun');

    // Toggle Class & Storage Configuration
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});