// Get all the buttons
const buttons = document.querySelectorAll('#Selection button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Check if the clicked button is already active
    const isActive = button.classList.contains('active');

    // Remove the "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show all the <span> elements
    const spans = document.querySelectorAll('#div_projets span');
    spans.forEach(span => span.style.display = '');

    // If the clicked button was not already active
    if (!isActive) {
      // Get the class of the clicked button and add the "active" class to it
      const classToKeep = button.getAttribute('class');
      button.classList.add('active');

      // Hide the <span> elements that don't have the same class
      spans.forEach(span => {
        if (!span.classList.contains(classToKeep)) {
          span.style.display = 'none';
        }
      });
    }
  });
});
