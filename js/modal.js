
function makeModal(sHANDLE_ID, sTARGET_ID) {
	

	var oModal  = { 
		"handleID":sHANDLE_ID,
		"targetID":sTARGET_ID,
		"show": function() {

				$("#background").show().animate({width:"100%", height:"100%"}, 1000); 
				$("#"+this.targetID).appendTo("#background"); 

		},
		"hide": function() { 

				var that = this; 

				$("#background").animate({width:"0%", height:"0%"}, 1000, function(){

					$(this).hide();
					$("#"+that.targetID).appendTo("body"); 

				});

		},
		"initialise": function() { 

				var that = this;

				if($("#background").size() == 0) {

					  var obackgroundStyle = {"position": "fixed",
											   "top":"50%",
											   "left":"50%",
											   "transform": "translate(-50%,-50%)",
											   "width": "0%",
											   "height": "0%",
											   "overflow": "hidden",
											   "z-index": "1000",
											   "background-color":"rgba(0,0,0,0.5)",
											   "display": "none" }; 

					$('<div id="background"></div>').css(obackgroundStyle).appendTo("body");



				}
				
				$("#"+this.handleID).on("click", function(event) {

					event.preventDefault();
					that.show();

				});

				$("#"+this.targetID +" [role='close-modal']").on("click", function() {
					that.hide();
				}) 

		}

	};


	return oModal;

};



