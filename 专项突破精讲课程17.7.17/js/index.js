;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//地址切换
	$(".address_list li").mouseover(function(){
		$(".address_list li").removeClass("active");
		$(this).addClass("active");
		$(".dizhi_box").hide();
		$(".dizhi_box").eq($(this).index()).show();
	})
	
	
	//右侧悬浮窗
	$(".cha").click(function(){
		$(".rightFixed").animate({
			right:-150
		},200,function(){
			$(".yousuo").animate({
				right:0
			},200)
		})
	})
	$(".yousuo").click(function(){
		$(".yousuo").animate({
			right:-52
		},200,function(){
			$(".rightFixed").animate({
				right:7
			},200)
		})
	})
	//返回顶部
	$(".totop").click(function(){
		$("body").animate({
			scrollTop:0
		},500);
		$("html").animate({
			scrollTop:0
		},500);
	});
})();
