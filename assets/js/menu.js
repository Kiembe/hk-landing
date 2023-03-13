const openBtn = document.querySelector('.bx-menu')
const closeBtn = document.querySelector('.menu-btn i')
const moMenu = document.querySelector('.menu-mb')
const dongMenu = document.querySelector('.menu-mb ul')


openBtn.onclick = function() {
    moMenu.classList.toggle('open')
    const isOpen = moMenu.classList.contains('open')

    closeBtn.classList = isOpen
    ? 'bx bx-plus'
    : 'bx bx-menu'
}

dongMenu.onclick = function() {
    const isOpen = moMenu.classList.remove('open');

    closeBtn.classList = isOpen
    ? 'bx bx-plus'
    : 'bx bx-menu'
}

