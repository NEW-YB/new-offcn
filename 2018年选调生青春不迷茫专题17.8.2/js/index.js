;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	第一部分切换
	var oneH=$(".one").offset().top;
	var oneconH=$(".one_content").offset().top;
	var twoH=$(".two").offset().top;
	var threeH=$(".three").offset().top;
	
	$(".one_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$("body,html").animate({scrollTop:$(".dingwei").eq(index).offset().top-109})
	})
//	hover效果
	$(".one_contlist li").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	})
	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=oneH){
			$(".one").css({
				"position":"fixed",
				"top":0
			})
		}else{
			$(".one").css("position","")	
		};
		
		$(".dingwei").each(function(index){
			if($(document).scrollTop()+$(window).height()/2>$(this).offset().top){
				if(index==$(".dingwei").length-1){
					$(".one_list li").removeClass("active");
					$(".one_list li").eq(index).addClass("active");
					return;
				} 
				if($(document).scrollTop()<$(".dingwei").eq(index+1).offset().top){
					$(".one_list li").removeClass("active");
					$(".one_list li").eq(index).addClass("active");
				}			
			}
		})
	})
	
	//第三部分地址切换
	var picArr=["images/anhui.jpg","images/beijing.jpg","images/fujian.jpg","images/hebei.jpg","images/henan.jpg","images/heilongjiang.jpg","images/hubei.jpg","images/hunan.jpg","images/liaoning.jpg","images/neimeng.jpg","images/qinghai.jpg","images/shandong.jpg","images/shanxi.jpg","images/shanghai.jpg","images/sichuan.jpg","images/tianjin.jpg","images/chongqing.jpg"]
	$(".address_list li").mouseover(function(){
		$(".address_list li").removeClass("active");
		$(this).addClass("active");
		var index=$(this).index();
		$(".dis_bl").stop().animate({"width":0},100,function(){
//			$(this).next().attr("src",picArr[index]);
//			$(this).hide().next().show();
//			$(this).next().animate({"width":217},100);
			$(this).attr("src",picArr[index]);
			$(this).animate({"width":217},100);
		});
	})
	
	
	
	//返回顶部
	$(".totop").click(function(){
		$("body").animate({
			scrollTop:0
		},500);
		$("html").animate({
			scrollTop:0
		},500);
	});
})();
