// JavaScript Document

$(function(){
	
		
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 750) deviceWidth = 750;
		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
		
	//年份
		var day=new Date();
		var d = day.getFullYear();
		$(".nowtime").html(d);
	
	//点击显示导航
	$(".zg_daoh").click(function(){
		if($(".zg_daoh_cet").is(":hidden")){
			$(this).find("img").attr("src","images/zg_hpic_ac.png");
			$(this).css("background","#2dc571");
		}else{
			$(this).find("img").attr("src","images/zg_hpic.png");
			$(this).css("background","");
		}
		$(".zg_daoh_cet").toggle();
		$(".mask").toggle();
		if($(".mask").is(":hidden")){
			$("html,body").css("overflow-y","visible");
		}else{
			$("html,body").css("overflow-y","hidden");
		}
		
	});
	$(".mask").click(function(){
		$(".zg_daoh_cet").hide();
		$(".mask").hide();
		$(".zg_daoh").find("img").attr("src","images/zg_hpic.png");
		$(".zg_daoh").css("background","");
		$("html,body").css("overflow-y","visible");		
	});
	
	
	
	$(".header_layer .box_l").on("click", ".click", function() {
		var self = $(this);
		var index = self.index() - 1;
		$(".zg_daoh_cet .box_l").find(".click").removeClass("act");
		self.addClass("act");
		$(".zg_daoh_cet .box_r").find("ul").hide();
		$(".zg_daoh_cet .box_r").find("ul").eq(index).show();
	});
	//教师考试 切换
	$(".zg_tt_top li").each(function(i){
		$(this).click(function(){
			$(".zg_tt_top li").removeClass("hov");
			$(this).addClass("hov");
			$(".zg_tt_bot").hide();
			$(".zg_tt_bot").eq(i).show();
		});
	});
	
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
	
	//换一批
	var reLen=$(".reading_list li").length;
	for (var i = 0; i < 5; i++) {
		$(".reading_list li").eq(i).show();
	}
	$(".reading_list li").eq(4).addClass("nobobt");
	var reArr=[];
	for (var i = 0; i < reLen; i++) {
		reArr.push(i);
	}
	reArr.sort(function(){
		return 0.5-Math.random();
	})
	
	$(".batch").click(function(){
		$(".reading_list li").removeClass("nobobt");
		$(".reading_list li").hide();
		for (var i = 0; i < 5; i++) {
			$(".reading_list li").eq(reArr[i]).show();
		}
		var max=Math.max.apply(null,reArr.slice(0,5));
		$(".reading_list li").eq(max).addClass("nobobt");
		reArr.sort(function(){
			return 0.5-Math.random();
		})
	})
	
	
	// 底部导航
	$(".fixed").on("click", "a", function() {
		$(".fixed li").removeClass("act");
		$(this).parent().addClass("act");
	});
	
	//栏目切换
	$(".list a").on("click",function(){
		$(this).parent().parent().find("a").removeClass("act");
		$(this).addClass("act");
	})
	
	//	微信分享
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