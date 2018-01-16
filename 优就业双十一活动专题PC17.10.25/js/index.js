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
	var suo=true;
	$(".kefu_flex").click(function(){
		if(suo){
			$(this).find("img").attr("src","images/kefu_open.png");
			$(".right_fixed").animate({"right":"0"},500)
		}else{
			$(this).find("img").attr("src","images/kefu_close.png");
			$(".right_fixed").animate({"right":"-130"},500)
		}
		suo=!suo;
	})
	
	
})()
