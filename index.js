let btn_menu = document.querySelector(".fa-bars");
let nav_wrapper = document.querySelector("#nav-wrapper");
let close_btn = document.querySelector(".close-btn");

btn_menu.addEventListener("click", () => {
    nav_wrapper.style.width = '100%';
});

close_btn.addEventListener("click", function () {
    nav_wrapper.style.width = '0%';
});
