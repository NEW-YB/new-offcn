;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//返回顶部
	$(".totop").click(function(){
		$("body").animate({
			scrollTop:0
		},500);
		$("html").animate({
			scrollTop:0
		},500);
	});
	
//	夏季招聘
	$(".xjzp_list li").mouseover(function(){
		$(".xjzp_list li").removeClass("active");
		$(this).addClass("active");
		$(".xjzp_box").hide();
		$(".xjzp_box").eq($(this).index()).show();
	})
	
//	报名
	$(".baoming").hover(function(){
		$(this).find(".kecheng_link").show();
	},function(){
		$(this).find(".kecheng_link").hide();
	})
	
	
	$(".ljbm").hover(function(){
		$(this).find(".kecheng_link").show();
	},function(){
		$(this).find(".kecheng_link").hide();
	})
	
	//课程系列切换
	$(".xilie_list li").mouseover(function(){
		$(".xilie_list li").removeClass("active");
		$(this).addClass("active");
		$(".xilie_box").hide();
		$(".xilie_box").eq($(this).index()).show();
	})
	
	
//	面试形式切换
	$(".xingshi_list li").mouseover(function(){
		$(".xingshi_list li").removeClass("active");
		$(this).addClass("active");
		$(".xs_box").hide();
		$(".xs_box").eq($(this).index()).show();
	})
	
	//右侧悬浮窗
	$(".rightfixed a").click(function(){
		$(".rightfixed a").removeClass("active");
		$(this).addClass("active");
		var scrtop=$(".dingwei").eq($(this).index()).offset().top;
		$("body,html").animate({"scrollTop":scrtop})
	})
	
	$(document).scroll(function(){
		$(".dingwei").each(function(index){
			if($(document).scrollTop()+$(window).height()/2>$(this).offset().top){
				if(index==$(".dingwei").length-1){
					$(".rightfixed a").removeClass("active");
					$(".rightfixed a").eq(index).addClass("active");
					return;
				} 
				if($(document).scrollTop()<$(".dingwei").eq(index+1).offset().top){
					$(".rightfixed a").removeClass("active");
					$(".rightfixed a").eq(index).addClass("active");
				}			
			}
		})
	})
	
	
	//关闭弹窗
	$(".close").click(function(){
		$(".tanchuang").hide();
	})
})();
