menu_btn = document.querySelector(".menu-btn");
close_btn = document.querySelector(".close-btn");
side_bar = document.querySelector(".side-bar");
main_content = document.querySelector('.main-content');
dblock = document.querySelector('.dblock');

menu_btn.addEventListener('click', () => {
    side_bar.classList.add('active');
    menu_btn.style.visibility = 'hidden';
    main_content.style.touchAction = 'none';
    dblock.style.display = 'unset';
});

close_btn.addEventListener('click', () => {
    side_bar.classList.remove('active');
    menu_btn.style.visibility = 'visible';
    main_content.style.touchAction = 'unset';
    dblock.style.display = 'none';
});