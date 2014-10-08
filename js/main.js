$(function(){

	//left control

	// $("#leftControl").css({"left":"-100%"});


	$(".white_screen").on("click",function(){
		console.log("bla")
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



	// $("#leftButton").on("click",function(e)
	// {
	// 	e.preventDefault();



	// 	$(".white_screen").removeClass("hidden");
		
	// 	$("#leftControl").removeClass("hidden").animate({"left":"0"},800,'easeOutExpo',function(){

	// 		$(".white_screen").on("click",function(){

	// 			$(this).addClass("hidden");

	// 			$("#leftControl").animate({"left":"-100%"},800,'easeOutQuint',function(){
	// 				$("this").addClass("hidden");
	// 			});

	// 		});
			
	// 	});
	
	// }
	// );


	// //right control

	// $("#rightControl").css({"right":"-100%"});

	// $("#rightButton").on("click",function(e){
	// 	e.preventDefault();

	// 	$(".white_screen").removeClass("hidden");
	// 	$("#rightControl").removeClass("hidden").animate({"right":"0"},800,'easeOutExpo',function(){

	// 		$(".white_screen").on("click",function(){

	// 			$(this).addClass("hidden");

	// 			$("#rightControl").animate({"right":"-100%"},800,'easeOutQuint',function(){
	// 				$("this").addClass("hidden");
	// 			});

	// 		});

	// 	});
	// });


});