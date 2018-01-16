;(function(){
//	导航区定位
	$(".mao").click(function(){
		var sc_top=$(".sec"+$(this).index()+"").offset().top;
		$("body,html").animate({"scrollTop":sc_top},500);
	})
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);

})()
