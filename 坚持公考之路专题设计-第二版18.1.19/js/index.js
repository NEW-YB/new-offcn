;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//	点击视频
	$(".play").click(function(){
		$(this).parent().css("z-index","11").siblings().css("z-index","10");
		$(".iframe_box").hide();
		$("iframe").attr("src","");
		$(".close").hide();
		
		$(this).next().show();
		var This=$(this)
		var srcNew=$(this).next().find("iframe").attr("_src");
		$(this).next().find("iframe").attr("src",srcNew);
		setTimeout(function(){
			This.next().find(".close").show();
		},1000)
	})
	$(".close").click(function(){
		$(this).parent().hide();
		$(this).prev().attr("src","");
		$(this).hide();
	})
	
//	悬浮显示
	var fixtop=$(".ban_text3").offset().top+60;
	$(window).scroll(function(){
		if($(window).scrollTop()>=fixtop){
			$(".fixed").show();
		}else{
			$(".fixed").hide();
		}
	})


})();


