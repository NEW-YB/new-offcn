$(".see_more").click(function(){
	var prevH;
	if($(this).html()=="查看更多"){
		this.prevH=$(this).prev().css("height");
		$(this).prev().css("height","auto");
		$(this).html("收起");
		$(this).css("background-image","url(images/shouqi.png)");
	}else{
		$(this).prev().css("height",this.prevH);
		$(this).html("查看更多");
		$(this).css("background-image","url(images/seemore.png)");
	}
})

var fs=parseFloat(document.documentElement.style.fontSize)
var oneH=$(".month").offset().top;

$(".mao").click(function(){
	$(".month_list .mao").removeClass("active");
	$(this).addClass("active");
	var index=$(this).index(".month_list .mao");
	$("body,html").animate({scrollTop:$(".dingwei").eq(index).offset().top-(0.9*fs)})
})

$(window).scroll(function(){
	if($(window).scrollTop()>=oneH){
		$(".month_list").css({
			"position":"fixed",
			"top":0
		})
	}else{
		$(".month_list").css("position","")	
	};
	
	$(".dingwei").each(function(index){
		if($(document).scrollTop()+$(window).height()/2>$(this).offset().top){
			if(index==$(".dingwei").length-1){
				$(".month_list .mao").removeClass("active");
				$(".month_list .mao").eq(index).addClass("active");
				return;
			} 
			if($(document).scrollTop()<$(".dingwei").eq(index+1).offset().top){
				$(".month_list .mao").removeClass("active");
				$(".month_list .mao").eq(index).addClass("active");
			}			
		}
	})
})