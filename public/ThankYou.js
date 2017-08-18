$(document).ready(function () {
    $('#sidebar').height($('body').height());

    //set margin-top height of info icon to main div
    var marginInfo = Number($("body").height()) - 60;
    $("#info").css({
        "margin-top": marginInfo
    });
})