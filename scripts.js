/* ============================================
   ALTITUDE LANDING PAGE SCRIPTS
   Digital Twin Infrastructure - Vancouver, BC
   ============================================ */

/**
 * Detects if the user is on a mobile device
 * @returns {boolean} True if mobile device, false otherwise
 */
function isMobileDevice() {
    // Check screen width (mobile typically <= 768px)
    const isMobileWidth = window.innerWidth <= 768;

    // Check for touch capability
    const isTouchDevice = ('ontouchstart' in window) ||
                          (navigator.maxTouchPoints > 0) ||
                          (navigator.msMaxTouchPoints > 0);

    // Check user agent for mobile devices
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return isMobileWidth && (isTouchDevice || isMobileUserAgent);
}

/**
 * Opens the interactive 3D demo modal
 * Shows the Luma Labs iframe with property walkthrough
 */
function openDemo() {
    const modal = document.getElementById('demoModal');
    const toast = document.getElementById('demoToast');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Set toast message based on device type
    if (isMobileDevice()) {
        toast.textContent = '⟲ Drag to Navigate • Pinch to Zoom';
    } else {
        toast.textContent = '⟲ Drag to Navigate • Scroll to Zoom';
    }

    // Hide instruction toast after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease-out';
    }, 4000);
}

/**
 * Closes the demo modal
 * Restores page scrolling and resets toast state
 */
function closeDemo() {
    const modal = document.getElementById('demoModal');
    const toast = document.getElementById('demoToast');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Reset toast opacity for next modal open
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transition = 'none';
    }, 300);
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

// Close modal when ESC key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDemo();
    }
});

// Close modal when clicking on the dark background (outside the modal content)
document.getElementById('demoModal').addEventListener('click', (e) => {
    if (e.target.id === 'demoModal') {
        closeDemo();
    }
});
