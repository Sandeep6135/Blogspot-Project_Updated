/* ===================================
   Nexus — Sign In Form Handler
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');

    if (signInForm) {
        signInForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Basic validation
            if (!email || !password) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            // Email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate sign-in (replace with actual API call)
            console.log('Nexus Sign In:', { email });
            showNotification('Welcome back to Nexus!', 'success');

            // Redirect after brief delay
            setTimeout(() => {
                window.location.href = '../../index.html';
            }, 1500);
        });
    }
});

/**
 * Display a styled notification message
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type) {
    // Remove existing notifications
    const existing = document.querySelector('.nexus-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'nexus-notification';
    notification.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        padding: 16px 24px;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: white;
        z-index: 9999;
        opacity: 0;
        transform: translateY(-10px) translateX(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        background: ${type === 'success' ? '#059669' : '#dc2626'};
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Trigger animation
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0) translateX(0)';
    });

    // Auto-remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-10px) translateX(20px)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}
