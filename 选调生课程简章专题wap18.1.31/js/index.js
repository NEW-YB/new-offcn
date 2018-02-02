$(function(){
	$('.province_box select').on("change",function(){
		var ejindex = $(this).find('option:selected').index();
		$(".change_box1").hide();
		$(".change_box1").eq(ejindex).show();
		
		swiper[ejindex].autoplayPaused=false;
		swiper[ejindex].init();
	})
	
//	中公地址切换
	$(".more_pro").click(function(){
		$(this).hide();
		$(".more_list").show();
	})
	$(".sec3 li").click(function(){
		$(".sec3 li").removeClass("active");
		$(this).addClass("active");
		$(".gedi_box").hide();
		$(".gedi_box").eq($(this).index(".sec3 li")).show();
	})
	
//	环境切换
	$(".hj_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".hj_box").hide();
		$(".hj_box").eq($(this).index()).show();
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//	开启弹窗
	$(".dingzhi").click(function(){
		$(".form_tc").show();
	})
//	关闭弹窗
	$(".tc_close").click(function(){
		$(this).parent().hide();
	})
	
})