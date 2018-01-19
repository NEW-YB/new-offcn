;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
//	第三四部分国考切换
	$(".guokao_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".main").find(".guokao_change").hide();
		$(this).parents(".main").find(".guokao_change").eq($(this).index()).show();
	})
	
	
	//右侧悬浮窗
	$(".cha").click(function(){
		$(".rightFixed").animate({
			right:-188
		},200,function(){
			$(".yousuo").animate({
				right:0
			},200)
		})
	})
	$(".yousuo").click(function(){
		$(".yousuo").animate({
			right:-84
		},200,function(){
			$(".rightFixed").animate({
				right:0
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
