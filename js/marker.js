navs = document.querySelectorAll('.nav_link > ul > li > a');

navs.forEach(el => {
    el.addEventListener('mousemove', () => {
        title_id = el.getAttribute('data-id');
        elem = document.getElementById(title_id);
        elem.style.backgroundColor = "#00c3ff";
        elem.style.borderRadius = '3px';
        elem.style.color = 'white';
    });
    el.addEventListener('mouseout', () => {
        title_id = el.getAttribute('data-id');
        elem = document.getElementById(title_id);
        elem.style.background = "none";
        elem.style.color = '#2F80ED';
    });
});