$(function(){

	var divPage = $("div[id^=page-]");	
	var pageFirst = $("div#page-first");
	var linkPage = $("a[id^=page-]");
	
	divPage.css("display","none");
	pageFirst.css("display","block");

	linkPage.on("click", function(){
		var jumpTo = $(this).context.id;
		divPage.css("display","none");
		$('div#'+jumpTo).css("display","block");	
	});

});
