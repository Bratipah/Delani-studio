//backend
//form input retrieval
function subscribe(form1) {
    var name = document.forms["form1"]["name"];
    var email = document.forms["form1"]["email"];
    var message = document.forms["form1"]["message"];
    alert("We have received your message.Thank you for reaching to us");
};
// alert("We have received your message" + name + "Thank you for reaching to us");

//frontend
$(document).ready(function () {
    //design fuction and toggling
    $("#design-image").click(function () {
        $("#design-image").slideUp();
        $("#design").slideDown();
    });
    $("#design").click(function () {
        $("#design").slideUp();
        $("#design-image").slideDown();

    });
    //development image and info toggle
    $("#develop-image").click(function () {
        $("#develop-image").slideUp();
        $("#develop").slideDown();
    });
    $("#develop").click(function () {
        $("#develop").slideUp();
        $("#develop-image").slideDown();

    });
    //production image and toggling info
    $("#production-image").click(function () {
        $("#production-image").slideUp();
        $("#production").slideDown();
    });
    $("#production").click(function () {
        $("#production").slideUp();
        $("#production-image").slideDown();
    });
    //hover images
    $("#img4").hover(function () {
        $("#mouse-hover1").toggle();
    });
    $("#img3").hover(function () {
        $("#mouse-hover2").toggle();
    });
    $("#img2").hover(function () {
        $("#mouse-hover3").toggle();
    });
    $("#img1").hover(function () {
        $("#mouse-hover4").toggle();
    });
    $("#img5").hover(function () {
        $("#mouse-hover5").toggle();
    });
    $("#img6").hover(function () {
        $("#mouse-hover6").toggle();
    });
    $("#img7").hover(function () {
        $("#mouse-hover7").toggle();
    });
    $("#img8").hover(function () {
        $("#mouse-hover8").toggle();
    });
});



