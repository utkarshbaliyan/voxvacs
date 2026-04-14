// Custom Cursor Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursor.style.backgroundColor = '#39ff14';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = 'transparent';
});

// Hover effect for links to expand cursor
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.borderColor = '#00f3ff';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#39ff14';
    });
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Contact form -> draft email to querycell@voxvacs.com
(() => {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.getElementById('contact-submit');
    if (!form || !submitBtn) return;

    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('name')?.value?.trim() ?? '';
        const email = document.getElementById('email')?.value?.trim() ?? '';
        const organization = document.getElementById('organization')?.value?.trim() ?? '';
        const interest = document.getElementById('interest')?.value?.trim() ?? '';
        const message = document.getElementById('message')?.value?.trim() ?? '';

        const safeInterest = interest && interest !== 'Select a platform' ? interest : 'General Inquiry';
        const subject = `Voxvacs inquiry — ${safeInterest}`;

        const bodyLines = [
            `Name: ${name || '-'}`,
            `Email: ${email || '-'}`,
            `Organization / Affiliation: ${organization || '-'}`,
            `Interest: ${safeInterest || '-'}`,
            '',
            'Project idea / question:',
            message || '-',
        ];

        const mailto = `mailto:querycell@voxvacs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
        window.location.href = mailto;
    });
})();
