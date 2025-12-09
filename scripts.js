/* ============================================
   ALTITUDE LANDING PAGE SCRIPTS
   Digital Twin Infrastructure - Vancouver, BC
   ============================================ */

/**
 * Opens the interactive 3D demo modal
 * Shows the Luma Labs iframe with property walkthrough
 */
function openDemo() {
    const modal = document.getElementById('demoModal');
    const toast = document.getElementById('demoToast');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

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
