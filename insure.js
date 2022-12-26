const menuOpen = document.getElementById('menu-bar');
const menuClosed = document.getElementById('menu-close');
const menuItems = document.querySelector('.nav-item')

menuOpen.addEventListener('click', function(){
    menuOpen.style.display = 'none';
    menuClosed.style.display = 'block';
    menuItems.style.top = '100%';
})

menuClosed.addEventListener('click', function(){
    menuOpen.style.display = 'block';
    menuClosed.style.display = 'none';
    menuItems.style.top = '-100vh';
})
