$(function(){



	$(".white_screen").on("click",function(){

		$(this).addClass("hidden");
		$("#leftControl").removeClass("show");
		$("#rightControl").removeClass("show");

	});
	$(".white_screen").addClass("hidden");


	$("#leftButton").on("click",function(e)
	{
		e.preventDefault();
		$("#rightControl").removeClass("show");
		$("#leftControl").toggleClass("show");
		if($("#leftControl").hasClass("show")){

			$(".white_screen").removeClass("hidden");

		}else{

			$(".white_screen").addClass("hidden");

		}

	});

	$("#rightButton").on("click",function(e)
	{
		e.preventDefault();
		$("#leftControl").removeClass("show");
		$("#rightControl").toggleClass("show");

		if($("#rightControl").hasClass("show")){

			$(".white_screen").removeClass("hidden");

		}else{

			$(".white_screen").addClass("hidden");

		}
	});

	// $("#signin").on("click",function(){
	// 	$(".white_screen").removeClass("hidden").css({"z-index":"2000"});
	// 	// $("#signinPopup").
	// });

	var oModal1 = makeModal("signin", "signinPopup");
	oModal1.initialise();

	var oModal2 = makeModal("emailHandle", "emailForm");
	oModal2.initialise();

});

