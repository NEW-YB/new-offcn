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
	
	//点击课程体系
	var tixiIndex=0;
	$(".xilie_list li").click(function(){
		tixiIndex=$(this).index();
		$(".xilie_list li").removeClass("active");
		$(this).addClass("active");
		$(".banci_list").hide();
		$(".banci_list").eq(tixiIndex).show();
		$(".banci_list").eq(tixiIndex).find("li").removeClass("active");
		$(".banci_list").eq(tixiIndex).find("li").eq(0).addClass("active");
		$(".ban_content").hide();
		$(".xilie_content").eq(tixiIndex).find(".ban_content").eq(0).show();
	})
	
	//点击班次选择
	$(".banci_list li").click(function(){
		$(".banci_list").eq(tixiIndex).find("li").removeClass("active");
		$(this).addClass("active");
		$(".ban_content").hide();
		$(".xilie_content").eq(tixiIndex).find(".ban_content").eq($(this).index()).show();
	})
	
	//点击直接报名，弹出报名地址
	$(".baoming").click(function(e){
		$(".kecheng_link").show();
		e.stopPropagation();
	})
	$(document).click(function(){
		$(".kecheng_link").hide();
	})
	
	//点击图片居中显示。
	$(".tu3").click(function(){
		var tu1ht=$(".tu1").html();
		var tu2ht=$(".tu2").html();
		var tu3ht=$(".tu3").html();
		$(this).css("z-index","20");
		$(".tu3").animate({
			"left":"180"
		},500,function(){
			$(".tu3").css("left",360);
			$(".tu3").html(tu1ht);
			$(".tu3").css("z-index","10");
		});
		
		$(".tu2").css("z-index","10");
		$(".tu2").animate({
			"left":"0"
		},500,function(){
			$(".tu2").css("left",180);
			$(".tu2").html(tu3ht);
			$(".tu2").css("z-index","20");
		});
		
		$(".tu1").css("z-index","10");
		$(".tu1").animate({
			"left":"360"
		},500,function(){
			$(".tu1").css("left",0);
			$(".tu1").html(tu2ht);
			$(".tu1").css("z-index","10");
		});
	})
	
	$(".tu1").click(function(){
		var tu1ht=$(".tu1").html();
		var tu2ht=$(".tu2").html();
		var tu3ht=$(".tu3").html();
		$(this).css("z-index","20");
		$(".tu1").animate({
			"left":"180"
		},500,function(){
			$(".tu1").css("left",0);
			$(".tu1").html(tu3ht);
			$(".tu1").css("z-index","10");
		});
		
		$(".tu2").css("z-index","10");
		$(".tu2").animate({
			"left":"360"
		},500,function(){
			$(".tu2").css("left",180);
			$(".tu2").html(tu1ht);
			$(".tu2").css("z-index","20");
		});
		
		$(".tu3").css("z-index","10");
		$(".tu3").animate({
			"left":"0"
		},500,function(){
			$(".tu3").css("left",360);
			$(".tu3").html(tu2ht);
			$(".tu3").css("z-index","10");
		});
	})
	
	//点击底部地址选择切换
	$(".dizhi_list li").click(function(){
		$(".dizhi_list li").removeClass("active");
		$(this).addClass("active");
		$(".dizhi_inform").hide();
		$(".dizhi_inform").eq($(this).index()).show();
	})
})();
