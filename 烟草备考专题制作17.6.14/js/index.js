;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	banner区鼠标事件
	$(".zhuanmai").hover(function(){
		$(".zhuanmai_tan").hide();
		$(this).find(".zhuanmai_tan").show();
	},function(){
		$(".zhuanmai_tan").hide();
	})
	
	$(".flow").click(function(){
		var index=$(this).index(".liucheng_left a");
		$(".flow").removeClass("active");
		$(this).addClass("active");
		$(".liuchengju_list").hide();
		$(".liuchengju_list").eq(index).show();
	})
	
	//视频
//	$('.xianshi_right').click(function(){
//		$(".mask").show();
//		$('.video_content').append('<iframe id="iframe" width="689" scrolling="no" height="438" frameborder="0" src="http://e.eoffcn.com/space.php?do=playvideo&op=play_demo&iframe=5&aid=1&lid=22552&ltype=31&amp;width=689%&amp;height=438"></iframe>');	
//   });
//	$('.guan').click(function(){
//		$(".mask").hide();
//		$(this).siblings('').find('iframe').remove();		
//	});
		
	$(".xianshi_right").click(function(){
		$(".mask").show();
		$(".tan").show();
		$('.tan').append('<iframe id="iframe" width="689" scrolling="no" height="438" frameborder="0" src="http://e.eoffcn.com/space.php?do=playvideo&op=play_demo&iframe=5&aid=1&lid=22552&ltype=31&amp;width=689%&amp;height=438"></iframe>');	
//   });
	})
	$(".guan").click(function(){
		$(".mask").hide();
		$(".tan").hide();
		$('iframe').remove();
	})
	
	//右侧悬浮窗
	$(".close").click(function(){
		$(".youclick").show();
		$(".rightfixed").hide();
	})
	$(".youclick").click(function(){
		$(".youclick").hide();
		$(".rightfixed").show();
	})
})();
