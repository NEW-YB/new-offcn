$(function(){
//	第一部分切换
	$(".sec1_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".change_box").hide();
		$(".change_box").eq($(this).index()).show();
	})
	
//	悬浮窗二维码
	$(".wx").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	})
	
//	锚点定位
	$(".mao").click(function(){
		var sctop=$(".sec"+($(this).index()+1)+"").offset().top;
		$("body,html").stop().animate({
			scrollTop:sctop
		},500)
	})
	$(".totop").click(function(){
		$("body,html").stop().animate({
			scrollTop:0
		},500)
	})
	
//	点击帽子抽奖
	$(".maozi_list a").click(function(){
		$(".mask").show();
		$(".tc_form").show();
	})
	
	
	$(".prize_bz").click(function(){
		$(".tc_getprize").hide();
		$(".tc_receive").show();
	})
	
	
	$(".receive_close,.thanks_close").click(function(){
		$(this).parent().hide();
		$(".mask").hide();
	})
	$(".form_close").click(function(){
		$(".tc_form").hide();
		$(".mask").hide();
	})
	$(".prize_close").click(function(){
		$(".tc_getprize").hide();
		$(".mask").hide();
	})
	$(".thanks_bz").click(function(){
		$(".tc_thanks").hide();
		$(".mask").hide();
	})
	
	
	
	
	
	
});