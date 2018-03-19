;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	返回顶部
	$(".totop").click(function(){
		$("html,body").stop().animate({
			scrollTop:0
		},500)
	})
	
//	第十部分课程切换
	$(".sec10_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".change_list").hide();
		$(".change_list").eq($(this).index()).show();
	})
	
	//	关闭弹层
	$(".bot_close").click(function(){
		$(".bot_fix").hide();
		$(".zg_foot").css("margin-bottom","0");
	})
	
	
	$(".tc_close").click(function(){
		$(".mask,.tc").hide();
	})
	
	
	$(".fix_close").click(function(){
		$(".right_fixed").hide();
		$(".fix_open").show();
	})
	$(".fix_open").click(function(){
		$(this).hide();
		$(".right_fixed").show();
	})
	
	
	setTimeout(function(){
		$(".mask,.tc").show();
	},20000)
	
	
})();


