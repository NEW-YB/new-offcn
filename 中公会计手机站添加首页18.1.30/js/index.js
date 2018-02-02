$(function() {
//	自适应
//	function fs(){
//		var deviceWidth = document.documentElement.clientWidth;
//		if(deviceWidth > 750) deviceWidth = 750;
//		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
//	}
//	window.onresize=fs;
//	fs();
	
//	首页关注
	$(".follow").click(function(){
		$(".zg_daoh").hide();
		$(this).toggleClass("active");
		$(".zg_daoh_cet").toggle();
	})
//	首页二维码切换
	$(".header_layer div").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
//	首页点击全部
	$(".all_nav").click(function(){
		$(".follow").removeClass("active");
		$(".zg_daoh_cet").hide();
		$(".zg_daoh").show();
		
	})
	$(".daoh_box a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".zg_daoh").hide();
	})
	$(".daoh_box div").click(function(){
		$(".zg_daoh").hide();
	})
	
//	首页轮播
	TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPage:true, 
		autoPlay:true,
		prevCell:".ban_prev",
		nextCell:".ban_next"
	});
	TouchSlide({ 
		slideCell:"#bm_lunbo",
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPage:true, 
		autoPlay:true
	});
//	首页倒计时
	function lxfEndtime(){
		$(".days").each(function(){
	        var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
	        var nowtime = new Date().getTime();        //今天的日期(毫秒值)
	        var youtime = endtime-nowtime;//还有多久(毫秒值)
	        var seconds = youtime/1000;
	        var minutes = Math.floor(seconds/60);
	        var hours = Math.floor(minutes/60);
	        var days = Math.floor(hours/24);
	        var CDay= days ;
	        var CHour= hours % 24;
	        var CMinute= minutes % 60;
	        var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
	        if(endtime<=nowtime){
	            $(".times").html("<span>0</span>")//如果结束日期小于当前日期就提示过期啦
	        }else{
	        	var dayArr=days.toString().split("");
	        	var dayStr="";
	        	for (var i = 0; i < dayArr.length; i++) {
	        		dayStr+="<span>"+dayArr[i]+"</span>";
	        	}
	           	$(".times").html(dayStr);          //输出有天数的数据
	        }
	  	});
	}
	setTimeout("lxfEndtime()",3600000);
	lxfEndtime();
	
	//	首页列表切换
	$(".ksxx_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".test_inform").find(".ksxx_change").hide();
		$(this).parents(".test_inform").find(".ksxx_change").eq($(this).index()).show();
	})
	
	// 底部导航
	$(".fixed").on("click", ".icon", function() {
		$(".icon").removeClass("act");
		$(this).addClass("act");
		if($(this).index()!=3){
			$(".kc_xia").hide();
		}
		$(this).find(".kc_xia").toggle();
	});
	$(".kc_xia a").click(function(e){
		$(".kc_xia").hide();
		$(this).addClass("active").siblings().removeClass("active");
		e.stopPropagation();
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);

	
//	点击省份弹出地址选框
	$(".province").click(function(){
		$(this).addClass("active");
		$(".province_box").show();
		$(".mask").show();
		$("html,body").css("overflow","hidden");
	})
	$(".close_province,.province_box a").click(function(){
		$(".province").removeClass("active");
		$(".province_box").hide();
		$(".mask").hide();
		$("html,body").css("overflow","visible");
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