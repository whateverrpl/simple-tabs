'use strict';

// Making a module for multiple uses
function tabs(buttons, contents, buttonsParent) {
    // DOM Elements btn, contents, btnParent
    const tabsButton = document.querySelectorAll(buttons),
          tabsContent = document.querySelectorAll(contents),
          tabsButtonParent = document.querySelector(buttonsParent);

    // Function for hide all of these states
    function hideTabContent() {
        tabsContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show', 'fade');
        });

        tabsButton.forEach(button => {
            button.classList.remove('active', 'fade');
        });
    }

    // Function for show active elements, content and button
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabsButton[i].classList.add('active', 'fade');
    }

    // Initialization 
    hideTabContent();
    showTabContent();

    // Adding a eventListener for buttons by: delegating events
    tabsButtonParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains(buttons.slice(1))) {
            tabsButton.forEach((button, i) => {
                if (event.target == button) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

// For use this module just write: tabs(btnsClass, contentsClass, btnsParentClass);
tabs('.tab-button', '.tab-content', '.tab-buttons');
