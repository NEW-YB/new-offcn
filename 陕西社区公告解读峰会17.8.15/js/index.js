;(function(){
//	获知信息底下的鼠标移入放大
	$(".xinxi_list img,.xinxi_list p").hover(function(){
		$(this).parent().css("transform","scale(1.3)");
	},function(){
		$(this).parent().css("transform","scale(1)");
	})
	
//	线下公告解读
	$(".local a").mouseover(function(){
		$(".local a").removeClass("active");
		$(this).addClass("active");
		$(".details").hide();
		$(".details").eq($(this).index()).show();		
	})
	
//	联系方式
	$(".address_list li").mouseover(function(){
		$(".address_list li").removeClass("active");
		$(this).addClass("active");
		$(".tel_box").hide();
		$(".tel_box").eq($(this).index()).show();
		$(".map a").removeClass("active");
		$(".map a").eq($(this).index()).addClass("active");
	})
	
	$(".map a").click(function(){
		$(".map a").removeClass("active");
		$(this).addClass("active");
		$(".address_list li").removeClass("active");
		$(".address_list li").eq($(this).index()).addClass("active");
		$(".tel_box").hide();
		$(".tel_box").eq($(this).index()).show();
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
	
})();
