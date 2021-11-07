const bt_mm = document.querySelector('.menu-btn')
const mm = document.querySelector('.mobile-menu')
let mm_state = false
bt_mm.addEventListener('click', () => {
    if(!mm_state) {
        bt_mm.classList.add('open')
        mm.classList.add('open')
        mm_state = true;
    } else {
        bt_mm.classList.remove('open')
        mm.classList.remove('open')
        mm_state = false;
    }
})