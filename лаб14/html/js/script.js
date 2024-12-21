document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {

            navLinks.forEach(link => link.classList.remove('nav__link--active'));
  
            this.classList.add('nav__link--active');
        });
    });

  
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar--active');
    });

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
