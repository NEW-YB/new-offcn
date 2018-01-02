;(function(){
	
	$(".totop").click(function(){
		$("body,html").animate({
			scrollTop:0
		},500);
	});
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
	//点击报名弹出地址
	$(".baoming").click(function(e){
		$(this).find(".xiala").toggle();
//		$(".xiala").show();
		e.stopPropagation();
	})
	$(document).click(function(){
		$(".xiala").hide();
	})
	
	//面试准备切换
	$(".zb_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".zb_cont").hide();
		$(".zb_cont").eq($(this).index()).show();
	})
	
	//助考课程切换
	$(".dtx_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".dtx_box").hide();
		$(".dtx_box").eq($(this).index()).show();
	})
	
	//右侧浮窗锚点
	$(".fix_list li").click(function(){
		var sc_top=$(".maodian"+$(this).index()+"").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},500);
	})
})()
