$(function() {

	// 头部微信关注
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

	// 头条轮播
	var scrollH = $(".new_text").height();
	var num = 0;
	var len = $(".new_text ul").find("li").length;
	setInterval(function() {
		num ++;
		num  = num % len;
		$(".new_text ul").animate({"top": -(num * scrollH)}, 400);
	}, 3000);

	// 新闻切换
//	$(document).on("click", ".news_tab li", function() {
//
//		var self = $(this);
//		var index = self.index();
//		self.addClass("act").siblings("li").removeClass("act");
//		self.closest(".news").find(".news_wrap").hide();
//		self.closest(".news").find(".news_wrap").eq(index).show();
//	});
	
	$(".test_item").click(function(e){
		$(this).find("ul").show();
		e.stopPropagation();
	})
	$(".test_item li").click(function(e){
		
		$(".test_item b").html($(this).html());
		
		$(this).parent("ul").css("display","none");
		console.log($(this).parent("ul"))
		e.stopPropagation()
	})
	$(document).click(function(){
		$(".test_item").find('ul').hide();
	})
	
	//备考资料切换
	TouchSlide({ 
		slideCell:"#slideBox1",
		mainCell:".bd",
		effect:"leftLoop"
	});
//	TouchSlide({ 
//		slideCell:"#slideBox2",
//		mainCell:".bd",
//		effect:"leftLoop"
//	});
//	TouchSlide({ 
//		slideCell:"#slideBox3",
//		mainCell:".bd",
//		effect:"leftLoop"
//	});
	$(".beikao span").click(function(){
		$(".beikao span").removeClass("active");
		$(this).addClass("active");
		$(".slideBox1").hide();
		$(".slideBox1").eq($(this).index()).show();
		TouchSlide({ 
			slideCell:"#slideBox"+($(this).index()+1)+"",
			mainCell:".bd",
			effect:"leftLoop"
		});
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	// 图片轮播
	var index = 0;
	var timer;
	function loop() {
		clearInterval(timer);
		timer = setInterval(function() {
			index ++;
			index %= 4;
			showPic( index );
		}, 3000);
	}
	
	loop();

	$(".btn_list").on("click", "li", function() {
		clearInterval(timer);
		var sub = $(this).index();
		index = sub;
		showPic( sub );
		loop();
	});

	function showPic( index ) {
		$(".btn_list li").removeClass("act");
		$(".btn_list li").eq(index).addClass("act");
		$(".img_list li").hide();
		$(".img_list li").eq(index).show();
	}
		
	var onoff=false;
	$(".folding").on("click", function() {
		if($(".header_layer").is(":hidden")){
			$(this).css("background-image","url(./images/header_arrow_ac.png)");
		}else{
			$(this).css("background-image","url(./images/header_arrow.png)");
		}
		$(".header_layer").toggle();
		$(".mask").toggle();
		$(".layer_top").css({"position": "relative"});
		$("header").css({"z-index":22});
		if($(".mask").is(":hidden")){
			$("html,body").css("overflow-y","visible");
		}else{
			$("html,body").css("overflow-y","hidden");
		}
	});

	setTimeout(function(){

		$(".mask.spec").show();
		$(".tips").show();
		if( $(".tips").css("display") == "block" ) {
			$("html,body").css("overflow-y","hidden");
		}
		
	});

	$(".mask").add(".tips").on("click", function() {
		$(".folding").css("background-image","url(./images/header_arrow.png)");
		$(".mask").hide();
		$(".tips").hide();
		$(".btm_layer").slideUp();
		$(".header_layer").hide();
		$(".suspend").hide();
		$(".layer_top").css({"position": ""});
		$(".zg_contions").css({"position": "", "top": "", "left": "", "z-index": "8"});
		$("html,body").css("overflow-y","visible");

		window.scrollTo(0, 0);
		$(".option").removeClass("act");

		$(".layer_top").css({"z-index": 10});
		$("header").css({"z-index": ""});
	});

	$(".plus").on("click", function() {
		$(".btm_layer").slideDown();
		$(".mask").show();
		$("html,body").css("overflow-y","hidden");
	});

	$(".btm_layer .close").find("span").on("click", function() {
		$(".btm_layer").slideUp();
		$(".mask").hide();
		$("html,body").css("overflow-y","visible");
	});

	// 底部导航
	$(".fixed").on("click", ".icon", function() {
		$(".icon").removeClass("act");
		$(this).addClass("act");
	});

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

	$(".header_layer .box_l").on("click", ".click", function() {
		var self = $(this);
		var index = self.index() - 1;
		$(".header_layer .box_l").find(".click").removeClass("act");
		self.addClass("act");
		$(".header_layer .box_r").find("ul").hide();
		$(".header_layer .box_r").find("ul").eq(index).show();
	});



	//筛选 点击事件
	$(document).on("click", ".option", function(ev) {
		var ev=ev || event;
		ev.stopPropagation(); 
		var self = $(this);
		var index = self.index();
		window.scrollTo(0, 0);

		$(".layer_top").css({"position": "relative"});
		$(".zg_contions").css({"position": "fixed", "top": "1.88rem", "left": 0});

		$(".option").removeClass("act");
		self.addClass("act");

		$(".mask").show();
		$(".suspend").hide();
		$(".suspend").eq( index ).show();
		$("html,body").css("overflow-y","hidden");
			
		$(".layer_top, header, .zg_contions").css({"z-index":22});
				
	});

	$(document).on("click", ".suspend li", function() {

		var self = $(this);
		window.scrollTo(0, 0);
		$(".mask").hide();
		$(".suspend").hide();
		$(".option").removeClass("act");
		// $(".layer_top").css({"position": ""});
		// $(".zg_contions").css({"position": "", "top": "", "left": "", "z-index": "8"});
		// $("html,body").css("overflow-y","visible");

		$(".layer_top").css({"z-index": 10});
		$("header").css({"z-index": ""});
		$(".zg_contions").css({"position": "", "top": "", "left": "", "z-index": "8"});
	});


	$(".vxf").click(function() {
		$(".mask2").show();
	})
	$(".mask2").click(function() {
		$(this).hide();
	})

	// share
	window._bd_share_config = { 
		"common": { 
			"bdSnsKey": {},
			"bdText": "",
			"bdMini": "2", 
			"bdMiniList": false, 
			"bdPic": "", 
			"bdStyle": "0", 
			"bdSize": "16" 
		}, 
		"share": {}, 
	};
	// window._bd_share_config = {
 //        share : [{
 //            "bdSize" : 16
 //        }],
 //        selectShare : [{
 //            "bdselectMiniList" : ['weixin','tqq','qzone','tsina','sqq']
 //        }]
 //    }   
	with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
});