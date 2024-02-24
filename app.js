
document.addEventListener('DOMContentLoaded', function () {
    let theme_dark_mode = document.getElementById('theme_dark_mode');
    let body = document.body;

    function detectColorScheme() {
        const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.toggle('dark', isDarkModePreferred);
        theme_dark_mode.checked = isDarkModePreferred;
    }

    detectColorScheme();
    theme_dark_mode.addEventListener('change', function () {
        body.classList.toggle('dark', theme_dark_mode.checked);
    });

    let btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener('click', function () {
            body.classList.toggle('dark');
            theme_dark_mode.checked = body.classList.contains('dark');
        });
    }
});

