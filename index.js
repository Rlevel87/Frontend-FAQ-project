

document.querySelectorAll('.border, .borderLast').forEach((section) => {
    const icon = section.querySelector('.plusIcon');
    const content = section.querySelector('p');
    
    section.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.src = 'images/icon-minus.svg'; 
        } else {
            content.style.display = 'none';
            icon.src = 'images/icon-plus.svg'; 
        }
    });
});



