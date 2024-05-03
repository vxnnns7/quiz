// // customer reviews text box functionality
document.addEventListener('DOMContentLoaded', function () {
    var reviewTextArea = document.getElementById("review");

    reviewTextArea.addEventListener("focus", function () {
        changeBackgroundColor(this, "white");
    });

    reviewTextArea.addEventListener("blur", function () {
        changeBackgroundColor(this, "#1B263B");
    });

    function changeBackgroundColor(element, color) {
        element.style.backgroundColor = color;
    }
});

// // FAQs functionality
document.addEventListener('DOMContentLoaded', function () {
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (faqQuestion) {
        faqQuestion.addEventListener('click', function () {
            var parentAccordion = this.closest('.accordion');
            if (parentAccordion) {
                var collapseElements = parentAccordion.querySelectorAll('.collapse');
                var targetCollapse = document.querySelector(this.getAttribute('data-bs-target'));
                if (targetCollapse) {
                    collapseElements.forEach(function (collapseElement) {
                        collapseElement.classList.toggle('show', collapseElement === targetCollapse);
                    });
                }
            }
        });
    });
});









const toggleSwitch = document.getElementById('modeToggle');

// Function to set theme based on toggle state
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#000';
        document.querySelector('.nav').style.backgroundColor = '#000';
        document.querySelector('.card-header-bg').style.backgroundColor = '#181414';
        document.querySelector('.card-header-bg2').style.backgroundColor = '#181414';
        document.querySelector('.form-control').style.backgroundColor = '#181414';
        document.querySelector('.btn-block').style.backgroundColor = '#181414';
        
    } else {
        document.body.style.backgroundColor = '#0D1B2A';
        document.querySelector('.nav').style.backgroundColor = '#0D1B2A';
        document.querySelector('.card-header-bg').style.backgroundColor = '#1B263B';
        document.querySelector('.card-header-bg2').style.backgroundColor = '#1B263B';
        document.querySelector('.form-control').style.backgroundColor = '#1B263B';
        document.querySelector('.btn-block').style.backgroundColor = '#1B263B';

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
