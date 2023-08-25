var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


const decreaseButton = document.getElementById('decrease');
        const increaseButton = document.getElementById('increase');
        const countInput = document.getElementById('countInput');

        let pageCount = 1;
        let wordCount = 250;

        // Update the input value based on the page and word counts
        function updateInputValue() {
            const inputValue = `${pageCount} Page${pageCount > 1 ? 's' : ''} / ${wordCount} words`;
            countInput.value = inputValue;
        }

        // Event listener for increasing the page count
        increaseButton.addEventListener('click', () => {
            pageCount++;
            wordCount = pageCount * 250; // Corrected calculation
            updateInputValue();
        });

        // Event listener for decreasing the page count
        decreaseButton.addEventListener('click', () => {
            if (pageCount > 1) {
                pageCount--;
                wordCount = pageCount * 250; // Corrected calculation
                updateInputValue();
            }
        });

        // Initial update
        updateInputValue();



    document.addEventListener("DOMContentLoaded", function () {
        // Get the form element
        const form = document.getElementById("form1");

        // Add a submit event listener to the form
        form.addEventListener("submit", function (event) {
            // Flag to track if the form is valid
            let isValid = true;

            // Function to display custom error messages
            function showError(input, message) {
                const errorElement = document.createElement("div");
                errorElement.className = "text-red-500 text-sm mt-1";
                errorElement.innerText = message;

                // Check if the input is a content-editable div
                if (input.getAttribute("contenteditable") === "true") {
                    const parent = input.parentElement;
                    parent.appendChild(errorElement);
                } else {
                    input.classList.add("border-red-500");
                    input.parentNode.appendChild(errorElement);
                }

                isValid = false;
            }

            // Function to remove error messages
            function removeErrors() {
                const errorMessages = form.querySelectorAll(".text-red-500");
                errorMessages.forEach(function (error) {
                    error.remove();
                });

                const inputFields = form.querySelectorAll("input");
                inputFields.forEach(function (input) {
                    input.classList.remove("border-red-500");
                });
            }

            // Check if the email field is empty
            const emailInput = form.querySelector("#floating_outlined");
            if (emailInput.value.trim() === "") {
                showError(emailInput, "Email is required");
            }

            // Check if the subject title field is empty
            const subjectInput = form.querySelector("input[type='text']");
            if (subjectInput.value.trim() === "") {
                showError(subjectInput, "Subject Title is required");
            }

            // Check if the deadline field is empty
            const deadlineInput = form.querySelector("input[type='text'][datepicker]");
            if (deadlineInput.value.trim() === "") {
                showError(deadlineInput, "Deadline is required");
            }

            // Check if the phone field is empty
            const phoneInput = form.querySelector("#phone");
            if (phoneInput.value.trim() === "") {
                showError(phoneInput, "Phone is required");
            }

            // Check if the assignment description is empty
            const descriptionInput = form.querySelector("#floating_outlined2");
            const descriptionContent = descriptionInput.innerText.trim();
            if (descriptionContent === "") {
                showError(descriptionInput, "Assignment Description is required");
            }

            // Check if any file is selected (optional)
            const fileInput = form.querySelector("#fileInput");
            if (!fileInput.files.length) {
                showError(fileInput, "Please select a file");
            }

            // If the form is not valid, prevent submission
            if (!isValid) {
                event.preventDefault();
            }
        });
    });


    // Function to display selected file name
    document.getElementById("fileInput").addEventListener("change", function () {
        const selectedFile = this.files[0];
        const selectedFileName = document.getElementById("selectedFileName");

        if (selectedFile) {
            selectedFileName.textContent = selectedFile.name;
        } else {
            selectedFileName.textContent = "No file selected";
        }
    });

    // Function to simulate file upload progress (for demonstration purposes)
    function simulateFileUploadProgress() {
        const progressBar = document.getElementById("progressBar");
        const progress = document.getElementById("progress");

        let width = 0;
        const interval = setInterval(function () {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 2; // Adjust the increment for desired speed
                progress.style.width = width + "%";
            }
        }, 100); // Adjust the interval for desired smoothness
    }

    // Add a custom event listener for file upload (you should trigger this when you actually start the file upload)
    document.getElementById("fileInput").addEventListener("customFileUpload", function () {
        simulateFileUploadProgress();
    });

 
    // Check contenteditable content and toggle label
    function checkContent(element) {
        const label = document.querySelector('label[for="floating_outlined2"]');
        if (element.textContent.trim() !== '') {
            label.classList.add('floating-label');
        } else {
            label.classList.remove('floating-label');
        }
    }
// form toggle
  
  // Get references to your buttons
  const buttons = document.querySelectorAll('.btn-toggle-form');

  // Add a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove the 'selected-button' class from all buttons
      buttons.forEach((btn) => btn.classList.remove('selected-button'));
      
      // Add the 'selected-button' class to the clicked button
      button.classList.add('selected-button');
      
      // You can also handle form toggling logic here
    });
  });




