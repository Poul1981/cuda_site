$(function () {
    let nav = $(".header_menu ul");
    let header_menu = $(".header_menu");
    let check = $("#check_burger");
    check.on("click", function () {
        if (check.is(':checked')) {
            // header_menu.addClass("active");
            nav.addClass("toggle");
            header_menu.slideDown(800);
        }
        else {
            // header_menu.removeClass("active");
            header_menu.slideUp(300);
            nav.removeClass("toggle")
        }

    });

    $(window).resize(() => {
        if (window.innerWidth > 697) {
            // console.log("breack!");
            header_menu.removeClass("active");
            nav.removeClass("toggle")
            check.prop('checked', false);
        }
    })


})