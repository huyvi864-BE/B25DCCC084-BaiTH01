const darkModeToggle = document.getElementById('darkModeToggle');
        const htmlElement = document.documentElement;
        if (darkModeToggle) {
            if (localStorage.getItem('theme') === 'dark') {
                htmlElement.setAttribute('data-theme', 'dark');
                darkModeToggle.checked = true;
            }
            darkModeToggle.addEventListener('change', () => {
                if (darkModeToggle.checked) {
                    htmlElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    htmlElement.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'light');
                }
            });
        }