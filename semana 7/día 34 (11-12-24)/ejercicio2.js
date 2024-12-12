const menuItems = document.querySelectorAll('.nav li a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transition = "color 0.5s ease";
        item.style.color = "#000";
    });

    item.addEventListener('mouseleave', () => {
        item.style.transition = "color 0.5s ease";
        item.style.color = "#fff"; 
    });
});

