;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	各省简章
	$(".province_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".lunbo").hide();
		$(".lunbo").eq($(this).index()).show();
	})
	
//	第二部分切换
//	初始化class.
	$(".fenbu_box").first().show().siblings(".fenbu_box").hide();
	$(".fenbu_box").each(function(){
		$(this).find(".dizhi_info").first().show().siblings(".dizhi_info").hide();
		$(this).find(".fenbu_list li:first").addClass("active").siblings("li").removeClass("active");
	})
	
//	点击省份
	$(".dizhi_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fenbu_box").hide();
		$(".fenbu_box").eq($(this).index()).show();
	})
//	点击分部
	$(".fenbu_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".fenbu_box").find(".dizhi_info").hide();
		$(this).parents(".fenbu_box").find(".dizhi_info").eq($(this).index()).show();
	})
	
	
//	第三部分切换
	$(".cont05Ys span").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$( '.cont05YsDetl' ).hide();
		$( '.cont05YsDetl' ).eq($(this).index()).show();
	})

//	开启弹窗
	$(".dingzhi").click(function(){
		$(".form_tc").show();
	})
//	关闭弹窗
	$(".tc_close").click(function(){
		$(this).parent().hide();
	})
	
})();


