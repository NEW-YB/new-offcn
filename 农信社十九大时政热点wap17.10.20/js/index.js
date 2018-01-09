;$(function(){
//	详情弹窗
	var len=$(".big_box").find(".change_box").length;
	var contW=$(".change_box").outerWidth();
	$(".big_box").css("width",len*contW);
	var detailsIndex=0;
	$(".next_page").click(function(){	
		detailsIndex++;
		if(detailsIndex==len){
			detailsIndex=len-1;
			alert("已经到了最后一页");
			return;
		}
		$(".change_box").eq(detailsIndex-1).animate({"opacity":"0"},400);
		$(".big_box").animate({
			"left":-detailsIndex*contW
		},500,function(){
			$(".change_box").eq(detailsIndex-1).css("opacity","1");
		})
	})
	
//	点击查看热点详情
	$(".show_details").click(function(){
		$(".mask").show();
		$(".detailes_tc").show();
		detailsIndex=$(this).index(".details_box .show_details");
		$(".big_box").css("left",-detailsIndex*contW);
		var bigboxH=$(".big_box").height();
		var xq_headH=$(".xq_head").outerHeight();
		var bigbox_h4H=$(".big_box h4").outerHeight();
		var fontSz=parseFloat(document.documentElement.style.fontSize);
		$(".main_cont").css("height",bigboxH-xq_headH-bigbox_h4H-0.68*fontSz);
		$("html,body").css("overflow-y","hidden");
		$("html,body").css("height","100%");
	})
	
//	点击遮罩层
	$(".mask").click(function(){
		$(".mask").hide();
		$(".detailes_tc").hide();
		$(".form").hide();
		$(".success").hide();
		$("html,body").css("overflow-y","visible");	
		$("html,body").css("height","auto");
	});
	
//	点击登录
	$(".login_box a").click(function(){
		$(".mask").show();
		$(".form").show();
		$("html,body").css("overflow-y","hidden");
		$("html,body").css("height","100%");
	})
})




