$(document).ready(function () { //design fuction and toggling
    $("#design-image").click(function () {
        $("#design-image").slideUp();
        $("#design").slideDown();
    });
    $("#design").click(function () {
        $("#design").slideUp();
        $("#design-image").slideDown();

    });
});


//development image and info toggle
$(document).ready(function () {
    $("#develop-image").click(function () {
        $("#develop-image").slideUp();
        $("#develop").slideDown();
    });
    $("#develop").click(function () {
        $("#develop").slideUp();
        $("#develop-image").slideDown();



    });
});


//production image and toggling info
$(document).ready(function () {
    $("#production-image").click(function () {
        $("#production-image").slideUp();
        $("#production").slideDown();
    });
    $("#production").click(function () {
        $("#production").slideup();
        $("#production-image").slideUp();
    });
});