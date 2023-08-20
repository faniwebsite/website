document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      const isActive = (currentLocation === href || currentLocation === `/${href}`);
      link.classList.toggle('active', isActive);
    });
  
    // Add active class to parent link if a child link is active
    navLinks.forEach(function(link) {
      if (link.classList.contains('active')) {
        let parentLink = link.closest('.nav-item');
        if (parentLink) {
          parentLink.classList.add('active');
        }
      }
    });
  });
  


// Function to clear validation errors when the user starts typing in an input field
function clearValidationOnInput(inputField, errorElement) {
  inputField.addEventListener('input', function () {
    inputField.classList.remove('error');
    inputField.classList.add('valid'); // Add the 'valid' class when input is updated
    errorElement.style.display = 'none';
  });
}

// Add event listeners to each input field
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameErrorElement = document.getElementById('nameError');
const emailErrorElement = document.getElementById('emailError');
const subjectErrorElement = document.getElementById('subjectError');
const messageErrorElement = document.getElementById('messageError');

clearValidationOnInput(nameInput, nameErrorElement);
clearValidationOnInput(emailInput, emailErrorElement);
clearValidationOnInput(subjectInput, subjectErrorElement);
clearValidationOnInput(messageInput, messageErrorElement);

  

  
  
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true

    if (name === ""){
      showError('name', 'Please enter your name.');
      isValid = false;
    } else {
      clearErrors('name');
      document.getElementById('name').classList.remove('error');
      document.getElementById('name').classList.add('valid');
    }

    if (message === ""){
      showError('message', 'Please enter your message.');
      isValid = false;
    } else {
      clearErrors('message');
      document.getElementById('message').classList.remove('error');
    document.getElementById('message').classList.add('valid');
    }

    if (subject === ""){
      showError('subject', 'Please enter your subject.');
      isValid = false;
    } else {
      document.getElementById('subject').classList.remove('error');
    document.getElementById('subject').classList.add('valid');
    }

    
  if (email === "") {
    showError('email', 'Please enter your email.');
    isValid = false;
  } else if (
    !email.endsWith('@gmail.com') &&
    !email.endsWith('@email.com') 
   /*  !email.endsWith('@yahoo.com') &&
    !email.endsWith('@outlook.com') */
  ){
    // Custom email validation with multiple allowed domains
    showError('email', 'Please enter a valid email address ending with @gmail.com OR @email.com');
    isValid = false;
  } else {
    clearErrors('email');
    document.getElementById('email').classList.add('valid');
  }

    return isValid;
  }

  function showError(fieldId, errorMessage) {
    const inputField = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}Error`);
    errorElement.textContent = errorMessage;
    inputField.classList.add('error');
    inputField.classList.remove('valid'); // Remove valid class when showing an error
    errorElement.style.display = "block";
  }

  function clearErrors(id) {
    const inputField = document.getElementById(id);
    const errorElement = document.getElementById(`${id}Error`);
    errorElement.textContent = '';
    inputField.classList.remove('error');
    errorElement.style.display = 'none';
  }
  

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form element and its data
    const form = event.target;
    const formData = new FormData(form);
    const isValid = validateForm();


    // Select the elements to show/hide
    const submitButton = form.querySelector('input[type="submit"]');
    const submittingText = form.querySelector('.submitting');
    const successMessage = document.getElementById("form-message-success");

    // Show "Submitting..." text and disable the submit button while the form is being submitted
    submitButton.disabled = true;
    submitButton.value = "Submitting...";
    submittingText.style.display = "block";

    if (isValid) {
    // Send the form data using Fetch API
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response here (e.g., show a success message)
        console.log(data); // You can log the response data if needed

        // Hide the form and show the success message when the submission is successful
        if (data.ok) {
          form.style.display = "none"; // Hide the form
          successMessage.style.display = "block"; // Show the success message
        } else {
          // If the submission was not successful, show the form again and reset the button text
          form.style.display = "block";
          submitButton.disabled = false;
          submitButton.value = "Send Message";
        }
      })
      .catch((error) => {
        // Handle errors here (e.g., show an error message)
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        // Enable the submit button and hide "Submitting..." text
        submitButton.disabled = false;
        submitButton.value = "Send Message";
        submittingText.style.display = "none";
      });

      nameInput.classList.remove('error');
      nameInput.classList.add('valid');
      emailInput.classList.remove('error');
      emailInput.classList.add('valid');
      subjectInput.classList.remove('error');
      subjectInput.classList.add('valid');
      messageInput.classList.remove('error');
      messageInput.classList.add('valid');
    }  else {
    // If validation fails, enable the submit button and hide "Submitting..." text
    submitButton.disabled = false;
    submitButton.value = "Send Message";
    submittingText.style.display = "none";
  }
}

  // Add an event listener to the form submit event
  const contactForm = document.querySelector("form[action='https://formspree.io/f/mqkvavll']");
  if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit);
  }
