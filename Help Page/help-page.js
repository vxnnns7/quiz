// customer reviews text box functionality
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

// FAQs functionality
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




// theme functionality

document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const body = document.body;

    const isDarkTheme = localStorage.getItem('darkTheme') === 'enabled';

    if (isDarkTheme) {
        body.classList.add('dark-theme');
    }

    toggleThemeBtn.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('darkTheme', 'enabled');
        } else {
            localStorage.setItem('darkTheme', 'disabled');
        }
    });
});
