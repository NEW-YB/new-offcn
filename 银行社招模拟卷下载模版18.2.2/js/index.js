;(function(){
	
//	点击单选框加样式
	$(".xxbb").click(function(){
		$(".xxbb").removeClass("on");
		$(this).addClass("on");
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	$(".totop").click(function(){
		$("html,body").stop().animate({
			scrollTop:0
		},500)
	})
	
})();


