document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menuToggle');
    var mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (mobileMenu.classList.contains('active') &&
            event.target !== menuToggle && !menuToggle.contains(event.target) &&
            event.target !== mobileMenu && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});
