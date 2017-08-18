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


    //********SHOW COMMENT BOX ON STAR1 STAR2 CLICK EVENTS**********************//

    $(".starComment1").click(function () {
        if (!$(this).parent().hasClass("selected") && !$(this).parent().parent().hasClass("commentClicked")) {
            $(".showComment1").toggle()
            $(this).parent().parent().css({
                "height": "240px"
            })
            $(this).parent().addClass("selected")
        }
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starNoComment1").click(function () {
        if ($(this).parent().hasClass("selected")) {
            $(".showComment1").toggle()
            $(this).parent().removeClass("selected")
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
        if (!$(this).parent().hasClass("selected") && !$(this).parent().parent().hasClass("commentClicked")) {
            $(".showComment2").toggle()
            $(this).parent().parent().css({
                "height": "240px"
            })
            $(this).parent().addClass("selected")
        }
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starNoComment2").click(function () {
        if ($(this).parent().hasClass("selected")) {
            $(".showComment2").toggle()
            $(this).parent().removeClass("selected")
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

    $(".starComment3").click(function () {
        if (!$(this).parent().hasClass("selected") && !$(this).parent().parent().hasClass("commentClicked")) {
            $(".showComment3").toggle()
            $(this).parent().parent().css({
                "height": "240px"
            })
            $(this).parent().addClass("selected")
        }
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starNoComment3").click(function () {
        $("#comment").remove()
        if ($(this).parent().hasClass("selected")) {
            $(".showComment3").toggle()
            $(this).parent().removeClass("selected")
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

    $(".starComment4").click(function () {
        if (!$(this).parent().hasClass("selected") && !$(this).parent().parent().hasClass("commentClicked")) {
            $(".showComment4").toggle()
            $(this).parent().parent().css({
                "height": "240px"
            })
            $(this).parent().addClass("selected")
        }
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starNoComment4").click(function () {
        if ($(this).parent().hasClass("selected")) {
            $(".showComment4").toggle()
            $(this).parent().removeClass("selected")
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

    $(".starComment5").click(function () {
        if (!$(this).parent().hasClass("selected") && !$(this).parent().parent().hasClass("commentClicked")) {
            $(".showComment5").toggle()
            $(this).parent().parent().css({
                "height": "240px"
            })
            $(this).parent().addClass("selected")
        }
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".starNoComment5").click(function () {
        if ($(this).parent().hasClass("selected")) {
            $(".showComment5").toggle()
            $(this).parent().removeClass("selected")
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

    //******************ADD COMMENT CLICK EVENTS**********************//

    $(".comment1").click(function () {
        $(this).parent().addClass("commentClicked")
        $(".showComment1").toggle()
        $(this).parent().css({
            "height": "240px"
        })
        $(this).parent().addClass("selected")
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment2").click(function () {
        $(this).parent().addClass("commentClicked")
        $(".showComment2").toggle()
        $(this).parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment3").click(function () {
        $(this).parent().addClass("commentClicked")
        $(".showComment3").toggle()
        $(this).parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment4").click(function () {
        $(this).parent().addClass("commentClicked")
        $(".showComment4").toggle()
        $(this).parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    $(".comment5").click(function () {
        $(this).parent().addClass("commentClicked")
        $(".showComment5").toggle()
        $(this).parent().css({
            "height": "240px"
        })
        $('#sidebar').height($('#main').height());
        var marginInfo = $("#main").height();
        $("#info").css({
            "margin-top": marginInfo
        });
    })

    //******************STAR HOVER EVENTS***********************//

    $(".star1").mouseenter(
        function () {
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            if ($(this).siblings(".clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
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
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star2").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star3").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star5").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )


    $(".star2").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star3").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star5").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
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
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star2").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star5").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
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
                "margin-left": "5.2%",
                "margin-right": "5.2%"

            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else if ($(this).siblings("clicked")) {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star2").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star3").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star5").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
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
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star2").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star3").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
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
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star2").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star3").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )

    $(".star6").mouseenter(
        function () {
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            if ($(this).siblings(".clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
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
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star6").hasClass("clicked")) {
                    $(".star6.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star7").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star8").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star9").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star10").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )


    $(".star7").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star6").hasClass("clicked")) {
                    $(".star6.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star8").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star9").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star10").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star8").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star6").hasClass("clicked")) {
                    $(".star6.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star7").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star9").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star10").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star9").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"

            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star6").hasClass("clicked")) {
                    $(".star6.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else if ($(this).siblings("clicked")) {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star7").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star8").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star10").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star10").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked")) {
                if ($(".star6").hasClass("clicked")) {
                    $(".star6.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star7").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star8").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star9").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )

    $(".star11").mouseenter(
        function () {
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            if ($(this).siblings(".clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
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
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star1").hasClass("clicked")) {
                    $(".star1.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star12").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star13").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star14").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star15").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )


    $(".star12").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star11").hasClass("clicked")) {
                    $(".star11.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star13").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star14").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star15").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star13").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star11").hasClass("clicked")) {
                    $(".star11.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star12").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star14").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star15").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star14").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"

            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star11").hasClass("clicked")) {
                    $(".star11.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else if ($(this).siblings("clicked")) {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star12").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star13").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star15").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star15").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked")) {
                if ($(".star11").hasClass("clicked")) {
                    $(".star11.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star12").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star13").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star15").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )

    $(".star16").mouseenter(
        function () {
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            if ($(this).siblings(".clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
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
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star16").hasClass("clicked")) {
                    $(".star16.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star17").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star18").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star19").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star20").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )


    $(".star17").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star16").hasClass("clicked")) {
                    $(".star16.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star18").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star19").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star20").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star18").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star16").hasClass("clicked")) {
                    $(".star16.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star17").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star19").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star20").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star19").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"

            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star16").hasClass("clicked")) {
                    $(".star16.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else if ($(this).siblings("clicked")) {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star17").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star18").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star20").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star20").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked")) {
                if ($(".star16").hasClass("clicked")) {
                    $(".star16.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star17").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star18").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star19").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )

    $(".star21").mouseenter(
        function () {
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            if ($(this).siblings(".clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
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
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star21").hasClass("clicked")) {
                    $(".star21.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star22").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star23").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star24").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star25").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )


    $(".star22").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })

            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star21").hasClass("clicked")) {
                    $(".star21.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star23").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star24").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star25").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star23").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star21").hasClass("clicked")) {
                    $(".star21.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star22").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star24").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star25").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star24").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"

            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 70%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                if ($(".star21").hasClass("clicked")) {
                    $(".star21.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else if ($(this).siblings("clicked")) {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star22").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star23").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star25").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }

            }
        }
        )

    $(".star25").mouseenter(
        function () {
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).parent().css({
                "background": "linear-gradient(90deg, #FFE100 100%, #D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
            })
            if ($(this).siblings(".clicked") && !$(this).hasClass("clicked")) {
                $(this).siblings(".clicked").css({
                    "border": "none",
                    "background": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }

        }
    ).mouseleave(
        function () {
            if (!$(this).hasClass("clicked")) {
                $(this).css({
                    "background": "none",
                    "border": "none",
                    "margin-left": "7.5%",
                    "margin-right": "7.5%"
                })
            }
            $(this).parent().css({
                "background": "#D7D7D7"
            })
            if ($(this).siblings(".clicked")) {
                if ($(".star21").hasClass("clicked")) {
                    $(".star21.clicked").css({
                        "background-color": "#FA425D",
                        "border-radius": "50%",
                        "border": "10px solid #FA425D",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                } else {
                    $(this).siblings(".clicked").css({
                        "background-color": "#008491",
                        "border-radius": "50%",
                        "border": "10px solid #008491",
                        "margin-left": "5.2%",
                        "margin-right": "5.2%"
                    })
                    if ($(".star22").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star23").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            }
        }
        )

    //************************STAR CLICK EVENTS************************//

    $(".star1").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star2").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")

            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star2").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            )
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star3").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star3").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }

    )

    $(".star4").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            if ($(this).hasClass("clicked")) {
                $(this).parent().css({
                    "background": "#D7D7D7"
                })
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star4").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star5").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star5").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star6").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star7").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")

            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star7").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            )
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star8").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star8").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }

    )

    $(".star9").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            if ($(this).hasClass("clicked")) {
                $(this).parent().css({
                    "background": "#D7D7D7"
                })
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star9").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star10").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star10").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star11").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star12").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")

            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star12").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            )
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star13").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star13").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }

    )

    $(".star14").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            if ($(this).hasClass("clicked")) {
                $(this).parent().css({
                    "background": "#D7D7D7"
                })
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star14").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star15").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star15").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star16").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star17").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")

            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star17").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            )
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star18").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star18").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }

    )

    $(".star19").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            if ($(this).hasClass("clicked")) {
                $(this).parent().css({
                    "background": "#D7D7D7"
                })
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star19").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star20").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star20").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star21").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#FA425D",
                "border-radius": "50%",
                "border": "10px solid #FA425D",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star22").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked")) {
                $(this).siblings().removeClass("clicked")

            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star22").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg, #FF7A65 30%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                }
            )
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star23").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star23").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FF9D4F 50%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }

    )

    $(".star24").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            if ($(this).hasClass("clicked")) {
                $(this).parent().css({
                    "background": "#D7D7D7"
                })
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })
            $(this).mouseleave(
                function () {
                    if ($(".star24").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 70%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    $(".star25").click(
        function () {
            $(this).parent().parent().addClass("answered")
            if ($(this).siblings(".clicked").not(this)) {
                $(this).siblings().not(this).removeClass("clicked")
            }
            $(this).toggleClass("clicked")
            $(this).css({
                "background-color": "#008491",
                "border-radius": "50%",
                "border": "10px solid #008491",
                "margin-left": "5.2%",
                "margin-right": "5.2%"
            })

            $(this).mouseleave(
                function () {
                    if ($(".star25").hasClass("clicked")) {
                        $(this).parent().css({
                            "background": "linear-gradient(90deg,#FFE100 100%,#D7D7D7 0%,#D7D7D7 0%,#D7D7D7 0%)"
                        })
                    }
                })
            var counter = 0
            $(".questionBox").each(function () {
                if ($(this).hasClass("answered")) {
                    counter++
                }
                if (counter === 5) {
                    $("button").css({
                        "font-family": "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                        "background-color": "#00ECD0",
                        "border": "2px solid #00ECD0",
                        "border-radius": "5px",
                        "margin-top": "40px",
                        "margin-left": "60px",
                        "width": "220px",
                        "height": "60px",
                        "font-size": "20px",
                        "color": "white"
                    })
                    $("button").prop('disabled', false)
                }
            })
        }
    )

    //**********************BUTTON CLICK EVENT*********************/

    $("button").click(function () {
        window.location.assign("/thankyou")
    })

})
