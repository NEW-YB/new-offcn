/*首页banner*/
$(function(){
	if ($(".oIndexUlFocus li").length != 1) {
	TouchSlide({ slideCell:"#slideBox",titCell:".hd ul",mainCell:".bd ul", effect:"leftLoop", autoPage:true, autoPlay:true,});
};
})
/*首页底部固定*/
 $(function(){
	$(".index_fixed_ri span").click(function(){
		$(".index_fixed").css("display","none");
		$(".beian").css("margin-bottom","0");
	})
})
/*搜索弹窗*/
$(function(){
	$(".search").click(function(){
		$(".fix_search").css("display","block");
		$(".meng").css("display","block");
	})
	$(".fix_search_inp span").click(function(){
		$(".fix_search").css("display","none");
		$(".meng").css("display","none");
	})
	$(".meng").click(function(){
		$(".fix_search").css("display","none");
		$(".meng").css("display","none");
	})
})
/*导航弹窗*/
$(function(){
	$(".register").click(function(){
		$(".fix_dh").css("display","block");
		$(".meng").css("display","block");
	})
	$(".meng").click(function(){
		$(".fix_dh").css("display","none");
		$(".meng").css("display","none");
	})
})
/*分享弹窗*/
$(function(){
	$(".share").click(function(){
		$(".fix_share").css("display","block");
		$(".meng").css("display","block");
	})
	$(".fix_share h4").click(function(){
		$(".fix_share").css("display","none");
		$(".meng").css("display","none");
	})
	$(".meng").click(function(){
		$(".fix_share").css("display","none");
		$(".meng").css("display","none");
	})
 })

/*全部考试*/
 $(function(){
	$(".fix_qbks a").click(function(){
		$(".fix_qbks a").css({
			"background":"none",
			"color":"#777"
		})
//		$(".fix_qbks a").css("background","none");
//		$(".fix_qbks a").css("color","#777");
//		$(".fix_qbks a").css("border","1px solid #999");
		$(this).css("background","#01b0f3");
		$(this).css("color","#fff");
		$(this).css("border","1px solid #01b0f3");
	})
	$(".qbks").click(function(){
		$(".fix_qbks").css("display","block");
		$(".meng").css("display","block");
		$("body").css("overflow","hidden");
	})
	$(".fix_qbks span").click(function(){
//		$(".fix_qbks").css("display","none");
//		$(".meng").css("display","none");
//		$("body").css("overflow","auto");
		hidde($(".fix_qbks"))
	})
	$(".meng").click(function(){
//		$(".fix_qbks").css("display","none");
//		$(".meng").css("display","none");
//		$("body").css("overflow","auto");
		hidde($(".fix_qbks"))
	})
 })
 //全部考试隐藏
 function hidde(el){
 	el.css("display","none");
	$(".meng").css("display","none");
	$("body").css("overflow","auto");
 }
/* 全部地区*/
$(function(){
	$(".fix_qbdq a").click(function(e){
		$(".fix_qbdq a").css("background","none");
		$(".fix_qbdq a").css("color","#777");
		$(".fix_qbdq a").css("border","1px solid #999");
		$(this).css("background","#01b0f3");
		$(this).css("color","#fff");
		$(this).css("border","1px solid #01b0f3");
	})
	$(".qbdq").click(function(){
		$(".fix_qbdq").css("display","block");
		$(".meng").css("display","block");
		$("body").css("overflow","hidden");
	})
	$(".fix_qbdq span").click(function(){
//		$(".fix_qbdq").css("display","none");
//		$(".meng").css("display","none");
//		$("body").css("overflow","auto");
		hidde($(".fix_qbdq"))
	})
	$(".meng").click(function(){
//		$(".fix_qbdq").css("display","none");
//		$(".meng").css("display","none");
//		$("body").css("overflow","auto");
		hidde($(".fix_qbdq"))
	})
	
})
/*底部*/
$(document).ready(function(){
	$(".zb_footer_ask").click(function(){
		$(".zb_footer_tc").toggle(1000);
	});
});