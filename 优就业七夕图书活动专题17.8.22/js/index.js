;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
		
	$('.hgxs').each(function(e) {
        $(this).mouseover(function(){
	
			$(this).children(span).show(6000);
		
		});
    });
	
//	悬浮窗
	$(".fixBtnOpen").click(function(){

		$(".indexFix").stop().animate({right:0},500);

		//$(".fixBtnOpen").addClass("fixBtnClose");

		$(".fixBtnOpen").hide();

		$(".fixBtnClose").show();

		});

	$(".fixBtnClose").click(function(){

		$(".fixBtnOpen").show();

		$(".fixBtnClose").hide();

		$(".indexFix").animate({right:-162},500);

	});
	
	
	
})();
