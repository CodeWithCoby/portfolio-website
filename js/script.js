// Select the contact form and error message spans
const contactForm = document.getElementById("contact-form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Clear previous error messages and styles
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  nameField.classList.remove("error");
  emailField.classList.remove("error");
  messageField.classList.remove("error");

  // Get the values from the input fields
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  // Regular expression for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate name
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    nameField.classList.add("error");
    return; // Stop the function if validation fails
  }

  // Validate email
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    emailField.classList.add("error");
    return;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailField.classList.add("error");
    return;
  }

  // Validate message
  if (message === "") {
    messageError.textContent = "Please enter your message.";
    messageField.classList.add("error");
    return;
  }

  // If all validations pass, you can submit the form or process the data
  // alert("Form submitted successfully!"); // For demonstration purposes
  contactForm.reset(); // Optional: reset the form after submission
}

// Attach the event listener to the form
contactForm.addEventListener("submit", validateForm);

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission
  const form = e.target;

  // Show a success message
  const successMessage = document.createElement("p");
  successMessage.textContent =
    "Thank you for reaching out! I'll get back to you soon.";
  successMessage.style.color = "#007bff";
  form.appendChild(successMessage);

  // Clear form fields
  form.reset();

  // Remove the message after 5 seconds
  setTimeout(() => successMessage.remove(), 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: ["Front-End Developer", "Problem Solver", "Lifelong Learner"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });
});
