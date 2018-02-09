;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	点击狗粮
	var ani=true;
	$(".gouliang").click(function(){
		ani=false;
		$(this).css("transform","rotate(-30deg)");
		$(".gl_point").delay(800).show(0);
		$(".dog").delay(1000).show(0);
		setTimeout(function(){
			$(".mask").show();
			$(".shouji_tc").show();
			$(".gl_point").hide();
			$(".dog").hide();
			$(".gouliang").css("transform","rotate(0deg)");
			ani=true;
		},2500)		
	})
	
//	注册
	$(".register").click(function(){
		if (ani) {
			$(".register_tc").show();
			$(".mask").show();
		}
	})
//	登录
	$(".login").click(function(){
		if (ani) {
			$(".login_tc").show();
			$(".mask").show();
		}
	})

//	查看兑换记录
	$(".button_box a:first,.getprize_button").click(function(){
		if (ani) {
			$(".getprize_tc").hide();
			$(".exchange_tc").show();
			$(".mask").show();
		}
	})
//	返回撒狗粮
	$(".button_box a:last").click(function(){
		$("body,html").animate({
			scrollTop:$(".fangdin").offset().top
		},500)
	})
//	返回兑换奖品
	$(".duijiang").click(function(){
		$("body,html").animate({
			scrollTop:$(".sec2_cont").offset().top
		},500)
	})
	
	$(".mao a").click(function(){
		$(".mao a").removeClass("active");
		$(this).addClass("active");
		console.log($(this).index(".fix_list a"))
		if($(this).index(".fix_list a")==1){
			$("body,html").animate({
				scrollTop:$(".fangdin").offset().top
			},500)
		}else if($(this).index(".fix_list a")==2){
			$("body,html").animate({
				scrollTop:$(".sec2_cont").offset().top
			},500)
		}
	})
	
//	分享
	var timer=null;
	$(".share").mouseover(function(){
		$(this).find("a").show();
		clearTimeout(timer);
	})
	$(".share").mouseout(function(){
		timer=setTimeout(function(){
			$(".share a").hide();
		},300)
	})
	
	
//	第二部分奖品切换
	$(".prize_type a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".prize_list").hide();
		$(".prize_list").eq($(this).index()).show();
	})
	
//	点击立即兑换
	$(".prize_list li a").not(".disable").click(function(){
		$(".bklx_tc").show();
		$(".mask").show();
	})
	
	$(".bklx_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".ljdh").click(function(){
		if( $(".bklx_list li.active").length!=0 ){
			$(".confirm_tc").show();
			$(".bklx_tc").hide();
			$(".bklx_list li").removeClass("active");
		}
	})



//关闭弹层
	$(".tc_close,.bklx_close").click(function(){
		$(this).parent().hide();
		$(".mask").hide();	
		$(".bklx_list li").removeClass("active");
	})
	
	$(".no_but").click(function(){
		$(".confirm_tc").hide();
		$(".mask").hide();
	})

//	返回顶部	
	$(".totop").click(function(){
		$("body,html").stop().animate({
			scrollTop:0
		},500)
	})


})();


