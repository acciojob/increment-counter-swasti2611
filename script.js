
const counterElement = document.getElementById('counter');

  // Get the increment button
  const incrementBtn = document.getElementById('incrementBtn');

  // Counter variable
  let counterValue = 0;

  // Update the counter value in the paragraph
  function updateCounter() {
    counterElement.textContent = `Counter: ${counterValue}`;
  }

  // Display the un-incremented value in an alert and increment the counter
  incrementBtn.addEventListener('click', function () {
    alert(`Un-incremented Value: ${counterValue}`);
    counterValue++;
    updateCounter();
  });

  // Initialize the counter value
  updateCounter();
