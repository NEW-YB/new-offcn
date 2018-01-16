;(function(){

	$(".close").click(function(){
		$(this).parent().hide();
		$(".mask").hide();
	})
	$(".android").click(function(){
		$(".mask").show();
		$(".android_download").show();
	})
	$(".ios").click(function(){
		$(".mask").show();
		$(".iphone").show();
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
})()
