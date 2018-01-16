;(function(){
//	滚动导航栏事件
	var navTop=$(".nav_fix").offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop()>navTop){
			$(".nav").addClass("guding");
//			$(".nav").css("position","fixed");
		}else{
			$(".nav").removeClass("guding");
//			$(".nav").css("position","initial");
		}
	})
//	导航栏点击事件
	$(".nav_list li").click(function(){
		var sctop=$(".sec"+($(this).index()+1)+"").offset().top-83;
		$("body,html").animate({"scrollTop":sctop},500)
	})
	
//	第二部分课程切换
	$(".time_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".kc_box").hide();
		$(".kc_box").eq($(this).index()).show();
	})
	
	var timeLen=$(".time_list li").length;
	var timeLiW=$(".time_list li").outerWidth()+4;
	$(".time_list").css("width",timeLen*timeLiW);
	var num=0;
	var maxNum=timeLen-4;
//	下一个
	$(".sec2_next").click(function(){
		if (timeLen<=4) {
			return;
		} else{
			if(num==maxNum){return};
			num++;
			$(".time_list").animate({"left":-timeLiW*num})
		}
	})
//	上一个
	$(".sec2_prev").click(function(){
		if (timeLen<=4) {
			return;
		} else{
			if(num==0){return};
			num--;
			$(".time_list").animate({"left":-timeLiW*num})
		}
	})


	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	悬浮窗
//	锚点
	$(".mao1").click(function(){
		var s2top=$(".sec2").offset().top-83;
		$("body,html").stop().animate({"scrollTop":s2top},500)
	})
	$(".mao2").click(function(){
		var s3top=$(".sec3").offset().top-83;
		$("body,html").stop().animate({"scrollTop":s3top},500)
	})
	
	$(".totop").click(function(){
		$("body,html").animate({"scrollTop":"0"},500)
	})
//	关闭显示弹窗
	$(".close").click(function(){
		$(".fixed").hide();
		$(".shrink").show()
	})
	$(".shrink").mouseover(function(){
		$(".shrink").hide();
		$(".fixed").show();
	})
	
})()
