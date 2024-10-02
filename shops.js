document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});
