document.addEventListener('DOMContentLoaded', function () {
    // 1. Активные ссылки в навигации
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Убираем активный класс с всех ссылок
            navLinks.forEach(link => link.classList.remove('nav__link--active'));
            // Добавляем активный класс к текущей ссылке
            this.classList.add('nav__link--active');
        });
    });

    // 2. Раскрывающееся меню в боковой панели
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar--active');
    });

    // 3. Модальное окно
    const modalButton = document.querySelector('.modal__button');
    const modal = document.querySelector('.modal');
    const modalCloseButton = document.querySelector('.modal__close');

    modalButton.addEventListener('click', function () {
        modal.classList.add('modal--active');
    });

    modalCloseButton.addEventListener('click', function () {
        modal.classList.remove('modal--active');
    });
});
