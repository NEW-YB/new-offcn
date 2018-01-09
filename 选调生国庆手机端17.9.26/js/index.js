;$(function(){
	
//	二维码切换
	var picArr=["images/anhui.jpg","images/beijing.jpg","images/fujian.jpg","images/hebei.jpg","images/henan.jpg","images/heilongjiang.jpg","images/hubei.jpg","images/hunan.jpg","images/liaoning.jpg","images/neimeng.jpg","images/qinghai.jpg","images/shandong.jpg","images/shanxi.jpg","images/shanghai.jpg","images/sichuan.jpg","images/tianjin.jpg","images/chongqing.jpg","images/gansu.jpg"]
	$(".address_list li").click(function(){
		$(".address_list li").removeClass("active");
		$(this).addClass("active");
		var index=$(this).index();
		$(".dis_bl").stop().animate({"width":0},100,function(){
			$(this).attr("src",picArr[index]);
			$(this).animate({"width":"100%"},100);
		});
	})
	
//	预约弹出表单
	$(".yuyue").click(function(){
		$(".form").show();
		$(".inp_box input").val("");
	})
	$(".close").click(function(){
		$(".form").hide();
	})
	
	
	
	
})




