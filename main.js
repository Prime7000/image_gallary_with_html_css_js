// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all images within the gallery container
    const images = document.querySelectorAll('#container .item img');
  
    // Create a modal element for the popup overlay
    const modal = document.createElement('div');
    modal.id = 'modal';
    
    // Set up the modal's styling so it covers the entire screen
    modal.style.display = 'none';             // Hidden by default
    modal.style.position = 'fixed';           // Fixed position to overlay on top of the page
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent background
    modal.style.justifyContent = 'center';    // Center content horizontally (using flexbox)
    modal.style.alignItems = 'center';        // Center content vertically (using flexbox)
    modal.style.cursor = 'pointer';           // Change cursor to indicate it's clickable
    modal.style.display = 'none';             // Hide the modal initially
    
    // Apply flex display to allow centering the image
    modal.style.display = 'flex';
    modal.style.display = 'none';
  
    // Create an image element that will display the clicked image in the modal
    const modalImage = document.createElement('img');
    modalImage.style.maxWidth = '80%';        // Ensure the image doesn't overflow the screen
    modalImage.style.maxHeight = '80%';
    
    // Append the image to the modal
    modal.appendChild(modalImage);
    
    // Append the modal to the body of the document
    document.body.appendChild(modal);
  
    // Add a click event listener to each image in the gallery
    images.forEach(image => {
      image.addEventListener('click', function () {
        // When an image is clicked, set the modal image's source to the clicked image's source
        modalImage.src = this.src;
        // Display the modal popup by setting its display property to 'flex'
        modal.style.display = 'flex';
      });
    });
  
    // Add a click event listener to the modal itself to hide it when clicked
    modal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });
  