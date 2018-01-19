$(function(){

//	底部地址切换
	$(".address_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".address_box").hide();
		$(".address_box").eq($(this).index()).show();
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	点击立即砸蛋弹出注册框
	$(".zadan").click(function(){
		$(".mask").show();
		$(".zadan_prize").show();
	})
	$(".zadan_dosubmit,.tree_dosubmit").click(function(){
		$(".mask").hide();
		$(this).parents(".tree_prize").hide();
	})
	
//	点击蛋
	$(".dan").click(function(){
		$(".mask").show();
		$(".egg").show();
	})
	$(".danhao").click(function(){
		$(this).hide();
		$(this).next().show();
//		弹出中奖框
		setTimeout(function(){
			$(".egg").hide();
			$(".danhao").show();
			$(".dansui").hide();
//			所中奖项
			$(".snow_prize").show();
		},500)
	})
})