;(function(){
	
//	点击视频
	$(".play").click(function(){
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

	
})()
