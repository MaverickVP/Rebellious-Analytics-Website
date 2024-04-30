document.addEventListener("DOMContentLoaded", function () {
  const imageModal = document.querySelector(".image-modal");
  const modalContent = document.querySelector(".image-modal .modal-content");
  const modalImage = document.querySelector(".image-modal img");
  const modalCloseButton = document.querySelector(".image-modal .close-button");
  const boxes = document.querySelectorAll('.box');

  // Function to open modal
  const openModal = (imageSrc) => {
    console.log("Image source:", imageSrc); // Log the image source
    modalImage.setAttribute("src", imageSrc);
    imageModal.style.display = "flex"; // Change to 'flex'
    adjustModalWidth();
  };

  // Function to close modal
  const closeModal = () => {
    modalImage.setAttribute("src", "");
    imageModal.style.display = "none";
  };

  // Function to adjust modal width based on image size
  const adjustModalWidth = () => {
    modalContent.style.width = "100%"; // Set the modal content width to 100%
  };

  // Add click event listeners to each box
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const imageSrc = box.querySelector("img").getAttribute("src");
      openModal(imageSrc);
    });
  });

  // Close modal when the close button is clicked
  modalCloseButton.addEventListener("click", () => {
    closeModal();
  });

  // Close modal when clicked outside the image or close button
  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal || event.target === modalCloseButton) {
      closeModal();
    }
  });

  // Close modal when the Escape key is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
