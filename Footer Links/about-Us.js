const toggleSwitch = document.getElementById('modeToggle');

// Function to set theme based on toggle state
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#000';
        document.querySelector('.nav').style.backgroundColor = '#000';
        document.querySelector('.title').style.color = '#FFA500';
        document.querySelector('.our').style.color = '#FFA500';
        document.querySelector('.us').style.backgroundColor = '#FFA500';
    } else {
        document.body.style.backgroundColor = '#0D1B2A';
        document.querySelector('.nav').style.backgroundColor = '#0D1B2A';
        document.querySelector('.title').style.color = '#415A77';
        document.querySelector('.our').style.color = '#415A77';
        document.querySelector('.us').style.backgroundColor = '#1B263B';
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
