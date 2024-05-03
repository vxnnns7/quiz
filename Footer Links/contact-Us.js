const toggleSwitch = document.getElementById('modeToggle');

// Function to set theme based on toggle state
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#000';
        document.querySelector('.nav').style.backgroundColor = '#000';
        document.querySelector('.us').style.color = '#fff';
        document.querySelector('.detail').style.color = '#fff';
        document.querySelector('.phone').style.color = '#fff';
        document.querySelector('.email').style.color = '#fff';
        document.querySelector('.address').style.color = '#fff';
        // document.querySelector('.text-bg').style.backgroundColor = '#0d1b2a';
        // document.querySelector('.email-bg').style.backgroundColor = '#0d1b2a';
        // document.querySelector('.subject-bg').style.backgroundColor = '#0d1b2a';
        // document.querySelector('.textarea').style.backgroundColor = '#0d1b2a';

    } else {
        document.body.style.backgroundColor = '#0D1B2A';
        document.querySelector('.nav').style.backgroundColor = '#0D1B2A';
        document.querySelector('.us').style.color = '#415A77 ';
        document.querySelector('.detail').style.color = '#415A77 ';
        document.querySelector('.phone').style.color = '#415A77 ';
        document.querySelector('.email').style.color = '#415A77 ';
        document.querySelector('.address').style.color = '#415A77 ';
        // document.querySelector('.text-bg').style.backgroundColor = '#1B263B';
        // document.querySelector('.email-bg').style.backgroundColor = '#1B263B';
        // document.querySelector('.subject-bg').style.backgroundColor = '#1B263B';
        // document.querySelector('.textarea').style.backgroundColor = '#1B263B';

    }
}

// Function to toggle theme
function toggleTheme() {
    if (toggleSwitch.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Event listener for theme toggle
toggleSwitch.addEventListener('change', toggleTheme);

// Set theme on initial load
setTheme('light');