;(function(){

//	微信二维码
	$(".wx_go").hover(function(){
		$(".wx_ewm").show();
	},function(){
		$(".wx_ewm").hide();
	})
	
//	鼠标放在注意事项
	$(".attention").hover(function(){
		$(".attention_box").show();
	},function(){
		$(".attention_box").hide();
	})
	
//	鼠标放在加群领红包
	$(".qqun_go").hover(function(){
		$(".qun_ewm").show();
	},function(){
		$(".qun_ewm").hide();
	})
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	返回顶部
	$(".totop").click(function(){$("html,body").animate({scrollTop:"0px"},500);})
	
//	悬浮窗点击
	 $(".fixBtnOpen").click(function(){
		$(".indexFix").stop().animate({right:0},500);
		$(".fixBtnOpen").hide();
		$(".fixBtnClose").show();
		});
	$(".fixBtnClose").click(function(){
		$(".fixBtnOpen").show();
		$(".indexFix").animate({right:-162},500);
	});
	
	
})()
