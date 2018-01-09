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
	var day=new Date();
	var d = day.getFullYear();
	$(".nowtime").html(d);
	
	//点击显示导航
	$(".zg_daoh").click(function(){	
		$(".province_tc").hide();
		$(".zg_daoh_cet").show();
		$(".mask").show();
		if($(".mask").is(":hidden")){
			$("html,body").css("overflow-y","visible");
		}else{
			$("html,body").css("overflow-y","hidden");
		}
		
	});
	$(".mask,.close").click(function(){
		$(".zg_daoh_cet").hide();
		$(".mask").hide();
		$("html,body").css("overflow-y","visible");	
		$(".province_tc").hide();
	});
	
	
//	咨询列表页省份选择
	$(".change_province").click(function(){
		$(".province_tc").toggle();
		$(".mask").toggle();
	})
	$(".province_tc a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".current_province").html($(this).html());
		$(".province_tc").hide();
		$(".mask").hide();
	})
	


//文章页阅读全文
//	var fs=parseFloat( document.documentElement.style.fontSize );
//	if( parseFloat( $(".atc_content").height() )/fs<=15.84 ){
//		$(".see_more").hide();
//	}else{
//		$(".see_more").show();
//		$(".atc_content").css("max-height","15.84rem");
//	}
//	$(".see_more").click(function(){
//		if($(this).html()=="阅读全文"){
//			$(".atc_content").css("max-height","none");
//			$(this).html("收起内容");
//			$(this).css("background-image","url(./images/shang.png)");
//		}else{
//			$(".atc_content").css("max-height","15.84rem");
//			$(this).html("阅读全文");
//			$(this).css("background-image","url(./images/xia.png)");
//		}		
//	})


//备考资料切换
	$(".column_change a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".bkzl_list_box").hide();
		$(".bkzl_list_box").eq($(this).index()).show();
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