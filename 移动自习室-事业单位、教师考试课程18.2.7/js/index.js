$(function(){
//	隐藏视频控制框
	setTimeout(function(){
		var video=document.getElementsByClassName("yl_video")[0];
		video.controls=false;
		if(video.currentTime>=2*60){
		video.controls=true;}
	},10)

	// 回到顶部
	$(window).on("scroll", function() {
		var h = $(window).scrollTop();
		if(h > 50) {
			$(".back-top").css("display", "block");
		} else {
			$(".back-top").css("display", "none");
		}
	});
	$(".back-top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	});
	
//	切换课程类型
	$(".type_box").first().show();
	$(".class_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".type_box").hide();
		$(".type_box").eq($(this).index()).show();
	})



})