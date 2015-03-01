    //Code inspired by design from the website for Baskgilimeno
    //inits the content to be closed
    $(function() {
                $(".open-expanded-content").slideDown();
		$(".open-expand-horizontal").slideDown();
                $(".expanded-content").slideUp();
                $(".close-expanded-content").slideUp();
    });
     
     //Opens content when clicked
    $("body").on("click", ".open-expanded-content",  function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).attr('data-boxer-control') === 'undefined') {
        } else {
            var sel = "#" + $(this).attr('data-boxer-control');

            $(sel).addClass("boxer-expanded");
        }
        $(this).slideUp(200,function() {
		$(this).parent().find(".close-expanded-content").slideDown();
	});
        $(this).parent().parent().find(".expanded-content").slideDown();
    });


    //Minimizes content when clicked
    $("body").on("click", ".close-expanded-content", function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).attr('data-boxer-control') === 'undefined') {
        } else {
            var sel = "#" + $(this).attr('data-boxer-control');

            $(sel).removeClass("boxer-expanded");
        }
        $(this).slideUp(200,function() {
		$(this).parent().parent().find(".open-expanded-content").slideDown();
		$(this).parent().parent().find(".open-expand-horizontal").slideDown();
	});
	$(this).parent().parent().find(".expanded-content").slideUp();
    });
    
    //shows content when staff name is picked
    $("body").on("click", ".teacher-name", function(e) {
        e.preventDefault();
    if($(this).parent().find(".open-expanded-content").is(':visible')) {
        $(this).parent().find(".open-expanded-content").slideToggle(200,function() {
            $(this).parent().find(".close-expanded-content").slideToggle();
        });
    } else {
        $(this).parent().find(".close-expanded-content").slideToggle(200,function() {
            $(this).parent().find(".open-expanded-content").slideToggle();
        });
    }
        $(this).parent().find(".expanded-content").slideToggle();
    });
    
    