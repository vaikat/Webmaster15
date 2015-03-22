
    //inits the content to be closed, this is the ready function
    $(function() {
                $(".open-expanded-content").slideDown();
		$(".open-expand-horizontal").slideDown();
                $(".expanded-content").slideUp();
                $(".close-expanded-content").slideUp();
                $(".staffContent").hide();
                $(".courseContent").hide();
    });
    //shows the staff content when pressed
     $("body").on("click", ".showStaffContent",  function(e) {
         e.preventDefault();
         e.stopPropagation();
         $(".staffContent").show(500);
         $(".contentSelect").hide(500);
     });
     //hides the staff content when pressed
     $("body").on("click", ".hideStaffContent",  function(e) {
         e.preventDefault();
         e.stopPropagation();
         $(".staffContent").hide(500);
         $(".contentSelect").show(500);
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
    //Shows the courses when the selector is pressed. 
    $("body").on("click", ".showCourseContent",  function(e) {
         e.preventDefault();
         e.stopPropagation();
         $(".courseContent").show(500);
         $(".contentSelect").hide(500);
     });
     //Hides the course content when the selector is pressed. 
     $("body").on("click", ".hideCourseContent",  function(e) {
         e.preventDefault();
         e.stopPropagation();
         $(".courseContent").hide(500);
         $(".contentSelect").show(500);
     });
     //Moves to bio research one
    //Shows the courses when the selector is pressed. 
