$(function() {
//	首页招考信息收起展开
	$(".yh_head").click(function(){
		if ($(this).next().is(":hidden")) {
			$(".yh_head").removeClass("active")
			$(this).addClass("active");
			$(".yh_lie").hide();
			$(this).next().show();
		}else{
			$(this).removeClass("active")
			$(this).next().hide();
		}	
	})
		
	
	// 头部微信关注定位
	$(window).on("scroll", function() {

		var Top = $(window).scrollTop();
		if( Top > 0 ) {
			$(".layer_top").css({"position": "fixed", "top": "0"});
			$("header").css({"margin-top": "1rem"});
		} else {
			$(".layer_top").css({"position": "", "top": ""});
			$("header").css({"margin-top": ""});
		}
	});

	// 首页行业新闻轮播
	var scrollH = $(".new_text").height();
	var num = 0;
	var len = $(".new_text ul").find("li").length;
	setInterval(function() {
		num ++;
		num  = num % len;
		$(".new_text ul").animate({"top": -(num * scrollH)}, 400);
	}, 3000);

//	资料试题切换
	$(".zl_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents("section").find(".zl_box").hide();
		$(this).parents("section").find(".zl_box").eq($(this).index()).show();
	})
	
	
//	底部弹窗
	$(".plus").on("click", function() {
		$(".btm_layer").slideDown();
		$(".mask").show();
		$("html,body").css("overflow-y","hidden");
	});

	$(".btm_close").on("click", function() {
		$(".btm_layer").slideUp();
		$(".mask").hide();
		$("html,body").css("overflow-y","visible");
	});

	// 底部导航
	$(".fixed").on("click", ".icon", function() {
		$(".icon").removeClass("act");
		$(this).addClass("act");
	});
	
//	首页列表切换
	$(".ksxx_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".ksxx").find(".ksxx_change").hide();
		$(this).parents(".ksxx").find(".ksxx_change").eq($(this).index()).show();
	})
	
	
	
//	银行校园招聘地址收缩
	$(".province_head").click(function(){
		$(this).toggleClass("active");
		$(".province_dis").toggle();
	})



});