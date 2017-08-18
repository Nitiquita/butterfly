$(document).ready(function () {
    $('#sidebar').height($('body').height());

    //set margin-top height of info icon to main div
    var marginInfo = $("body").height();
    $("#info").css({
        "margin-top": marginInfo
    });
})