;(function(){
	$(".zg17_city").hover(function(){
		$(".zg17_city p").show();
	},function(){
		$(".zg17_city p").hide();
	});
	$(".zg17_khd").hover(function(){
		$(".zg17_khd em").show();
	},function(){
		$(".zg17_khd em").hide();
	});
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//	导航栏地址切换
	$(".zg17_city a").click(function(){
		$(".zg17_city .showarea").html($(this).html());
		$(".zg17_city p").hide();
	})
})();

