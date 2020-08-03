document.querySelector('.menu_btn').addEventListener('click', () => {
    document.querySelector('.nav_menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news_card', {delay: 500});
ScrollReveal().reveal('.cards_banner_one', {delay: 500});
ScrollReveal().reveal('.cards_baner_two', {delay: 500});