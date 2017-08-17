$(document).ready(function () {

    //set height of sidebar to height of main div
    $('#sidebar').height($('#main').height());

    //set margin-top height of info icon to main div
    var marginInfo = $("#main").height();
    $("#info").css({
        "margin-top": marginInfo
    });

    //edit window
    $("#edit").click(function () {
        $(".toReplace").toggle();
    });

    //show cooment box when first or second star is clicked
    var commentBox = "<textarea id='suggestion' placeholder='Anything to suggest to your manager?'></textarea>"

    $(".starComment1").click(function () {
        $(".showComment1").toggle()
        if (!$(this).hasClass("clicked")) {
            $(this).parent().parent().css({
                "height": "240px"
            })
        } else if ($(this).hasClass("clicked")) {
            $(this).parent().parent().css({
                "height": "140px"
            })
        }
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starComment2").click(function () {
        $(".comment2").toggle()
        $(this).parent().parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starComment3").click(function () {
        $(".comment3").replaceWith(commentBox)
        $(this).parent().parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starComment4").click(function () {
        $(".comment4").replaceWith(commentBox)
        $(this).parent().parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starComment5").click(function () {
        $(".comment5").replaceWith(commentBox)
        $(this).parent().parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })


    //show comment box when add comment is clicked
    $(".comment1").click(function () {
        $(this).parent().css({
            "height": "240px"
        })
        $(".comment1").replaceWith(commentBox)
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment2").click(function () {
        $(this).parent().css({
            "height": "240px"
        })
        $(".comment2").replaceWith(commentBox)
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment3").click(function () {
        $(this).parent().css({
            "height": "240px"
        })
        $(".comment3").replaceWith(commentBox)
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment4").click(function () {
        $(this).parent().css({
            "height": "240px"
        })
        $(".comment4").replaceWith(commentBox)
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment5").click(function () {
        $(this).parent().css({
            "height": "240px"
        });
        $(".comment5").replaceWith(commentBox);
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })


    //linear gradient for hovering over stars
    $(".star1").mouseenter(
        function () {
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            if ($(this).siblings().hasClass("clicked")) {
                $(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
                $(this).parent().css({
                    "background": "#D7D7D7"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked"))
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                $(".clicked").css({
                    "background-color": "#008491",
                    "border-radius": "50%",
                    "border": "10px solid #008491",
                    "margin-left": "23px",
                    "margin-right": "23px"
                })

            }
        }
        )


    $(".star2").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings().hasClass("clicked")) {
                $(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                } else {
                    $(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                }

            }
        }
        )

    $(".star3").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                $(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                } else {
                    $(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                }

            }
        }
        )

    $(".star4").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"

            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                $(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                } else {
                    $(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                }

            }
        }
        )

    $(".star5").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings().hasClass("clicked") && !$(this).hasClass("clicked")) {
                $(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "33px",
                    "margin-right": "33px"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings().hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                } else {
                    $(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "23px",
                        "margin-right": "23px"
                    })
                }
            }
        }
        )

    //linear gradient for clicking on stars
    $(".star1").click(
        function () {
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "23px",
                "margin-right": "23px"
            })
        }
    )

    $(".star2").click(
        function () {
            $(this).toggleClass("clicked")
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().mouseleave(
                function () {
                    $(this).css({
                        "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                    })
                })
        }
    )

    $(".star3").click(
        function () {
            $(this).toggleClass("clicked")
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().mouseleave(
                function () {
                    $(this).css({
                        "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                    })
                })
        }
    )

    $(".star4").click(
        function () {
            $(this).toggleClass("clicked")
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().mouseleave(
                function () {
                    $(this).css({
                        "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                    })
                })
            // $(this).parent().parent().
        }
    )

    $(".star5").click(
        function () {
            $(this).toggleClass("clicked")
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "23px",
                "margin-right": "23px"
            })
            $(this).parent().mouseleave(
                function () {
                    $(this).css({
                        "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                    })
                })

        }
    )





})
