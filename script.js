// script.js

// document.addEventListener('DOMContentLoaded', () => {
//   const loadingOverlay = document.getElementById('loading-overlay');
//
//   document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function (e) {
//       if (this.id === 'screenshot-button') {
//         return; // Do nothing, let the screenshot function handle it
//       }
//       if (this.id === 'create-button') {
//         return;
//       }
//
//       if (this.id === 'cancel-btn') {
//         return;
//       }
//       if (this.id === 'back-button') {
//         return;
//       }
//
//       e.preventDefault(); // Prevent the default anchor behavior
//       const targetPage = this.getAttribute('href');
//
//       // Show loading overlay
//       loadingOverlay.classList.add('show');
//
//       // Hide the overlay after 0.3 seconds and navigate to the new page
//       setTimeout(() => {
//         window.location.href = targetPage;
//       }, 300); // Duration to match the fade out time
//     });
//   });
// });

function openSidebar() {
  var sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "500px";  // Slide in the sidebar
  document.getElementById("overlay").classList.add("active");  // Show the overlay
  sidebar.classList.add("open");  // Add 'open' class to trigger the flip
}

function closeSidebar() {
  var sidebar = document.getElementById("mySidebar");
  sidebar.style.width = "0";  // Slide out the sidebar
  document.getElementById("overlay").classList.remove("active");  // Hide the overlay
  sidebar.classList.remove("open");  // Remove 'open' class to reset the flip
}

// Close sidebar when clicking anywhere outside of it (the overlay)
window.onclick = function(event) {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    closeSidebar();  // Close the sidebar if the click is on the overlay
  }
};

function goBack() {
  window.history.back();  // Navigates back to the previous page
}
function showPopup() {
  const popup = document.getElementById('logout-popup');
  popup.style.display = 'flex'; // Make it visible
  setTimeout(() => {
    popup.classList.add('show'); // Add the show class to start fade-in
  }, 10); // Slight delay to allow display to take effect
}

function createClassPopup() {
  const popup = document.getElementById('create-class-popup');
  popup.style.display = 'flex'; // Make it visible
  setTimeout(() => {
    popup.classList.add('show'); // Add the show class to start fade-in
  }, 10); // Slight delay to allow display to take effect
}

function hideCreateClassPopup() {
  const popup = document.getElementById('create-class-popup');
  popup.classList.remove('show'); // Remove the show class to start the fade-out

  // Wait for the transition to complete before hiding the popup
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup after the fade-out
  }, 300); // Match this duration with the CSS transition duration (0.3s)
}

function hidePopup() {
  const popup = document.getElementById('logout-popup');
  popup.classList.remove('show'); // Remove the show class to start the fade-out

  // Wait for the transition to complete before hiding the popup
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup after the fade-out
  }, 300); // Match this duration with the CSS transition duration (0.3s)
}


document.getElementById('screenshot-button').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior

  // Specify the element to screenshot; use document.body for full page
  html2canvas(document.body, {scale: 2}).then(function (canvas) {
    // Create an image from the canvas
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 1.0); // High-quality JPEG
    link.download = 'AttendanceScreenshot.png'; // Set the filename
    document.body.appendChild(link); // Append link to body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after downloading
  });
});
