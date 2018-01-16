// JavaScript Document

$(function(){
	//	尺寸调节
	function fs(){
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 750) deviceWidth = 750;
		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	}
	window.onresize=fs;
	fs();
				
	//年份
//	var day=new Date();
//	var d = day.getFullYear();
//	$(".nowtime").html(d);
	
//	点击搜索框
	$(".search").click(function(){
		$(".search_box").show();
		$(".search_text").focus();
	})
	$(".cancel").click(function(){
		$(".search_box").hide();
	})
	
	//点击显示导航
	if($(".zg_daoh_cet").height()>$(window).height()-$(".header").height()){
		$(".zg_daoh_cet").css("height",$(window).height()-$(".header").height())
	}
//	$(".zg_daoh_cet").css("height",$(window).height())
	$(".zg_daoh").click(function(){	
		$(".ewm_box").hide();
		$(".fixed .icon3").removeClass("act");
		$(".province_tc").hide();
		$(".zg_daoh_cet").toggle();
		if($(".zg_daoh_cet").is(":hidden")){
			$(".mask").hide();
			$("html,body").css("overflow-y","visible");
			$("html,body").css("height","auto");
		}else{
			$(".mask").show();
			$("html,body").css("overflow-y","hidden");
			$("html,body").css("height","100%");
		}
//		$(".mask").toggle();
//		if($(".mask").is(":hidden")){
//			$("html,body").css("overflow-y","visible");
//		}else{
//			$("html,body").css("overflow-y","hidden");
//		}
		
	});
//	$(".mask,.close").click(function(){
//		$(".zg_daoh_cet").hide();
//		$(".mask").hide();
//		$("html,body").css("overflow-y","visible");	
//		$("html,body").css("height","auto");
//		$(".province_tc").hide();
//	});
	
	
	// 法考头条轮播
	var scrollH = $(".new_text").height();
	var num = 0;
	var len = $(".new_text ul").find("li").length;
	setInterval(function() {
		num ++;
		num  = num % len;
		$(".new_text ul").animate({"top": -(num * scrollH)}, 400);
	}, 3000);
	
	// 底部导航
	$(".fixed").on("click", ".icon", function() {
		$(".icon").removeClass("act");
		$(this).addClass("act");
		if($(this).index()==2){
			$(".mask").show();
			$(".ewm_box").show();
			$("html,body").css("overflow-y","hidden");
			$("body").css("height","100%");
		}
	});
	$(".close_v").click(function(){
		$(".mask").hide();
		$(".ewm_box").hide();
		$("html,body").css("overflow-y","visible");
		$("body").css("height","auto");
		$(".fixed .icon3").removeClass("act");
	})
	
	
	//回到顶部
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
	
	
//	法考信息页省份选择
	$(".fkxx_right").click(function(){
		$(".province_tc").show();
		$(".mask").show();
		$("html,body").css("overflow-y","hidden");
		$("html,body").css("height","100%");
	})
	$(".province_list li a").click(function(){
		$(".province_list li a").removeClass("active");
		$(this).addClass("active");
		$(".province_tc").hide();
		$(".mask").hide();
		$("html,body").css("overflow-y","visible");	
		$("html,body").css("height","auto");
	})
	$(".shouqi").click(function(){
		$(".province_tc").hide();
		$(".mask").hide();
		$("html,body").css("overflow-y","visible");	
		$("html,body").css("height","auto");
	})
	
//	法考图书切换
	$(".fkts_type a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fkts_list").hide();
		$(".fkts_list").eq($(this).index()).show();
	})


	
	


	
	//	微信分享
//	$(".vxf").click(function() {
//		$(".mask2").show();
//	})
//	$(".mask2").click(function() {
//		$(this).hide();
//	})
//	
//	// share
//	window._bd_share_config = { 
//		"common": { 
//			"bdSnsKey": {},
//			"bdText": "",
//			"bdMini": "2", 
//			"bdMiniList": false, 
//			"bdPic": "", 
//			"bdStyle": "0", 
//			"bdSize": "16" 
//		}, 
//		"share": {}, 
//	};
//	// window._bd_share_config = {
// //        share : [{
// //            "bdSize" : 16
// //        }],
// //        selectShare : [{
// //            "bdselectMiniList" : ['weixin','tqq','qzone','tsina','sqq']
// //        }]
// //    }   
//	with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

});