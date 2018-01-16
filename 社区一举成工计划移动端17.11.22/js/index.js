$(function(){
	var roto=0.11;
	var animateS=true;
	$(".mao_list li").click(function(){
		animateS=false;
//		var fonts=parseFloat(document.documentElement.style.fontSize);
//		-0.9*fonts
		var sc_top=$(".sec"+($(this).index()+1)+"_tt").offset().top;
		$("body,html").animate({
			scrollTop:sc_top
		},800);
		roto=($(this).index())*1.41+0.11;
		$(".mao_list li div").stop().css("right","1.5rem");
		$(this).find("div").stop().animate({
			"right":"0.04rem"
		},800,function(){animateS=true;});
		$(".rocket").animate({
			"left":""+roto+"rem"
		},800)
	});
	
	var Navtop=$('.maodian_bg').offset().top;
	$(window).scroll(function(){
		var Witop=$(window).scrollTop();
		if(Witop>=Navtop){
			$('.maodian_bg').addClass('fixnav');
		}else{
			$('.maodian_bg').removeClass('fixnav');
		}
		if(animateS){
			$(".dingwei").each(function(index){
				if(Witop>$(this).offset().top){
					if(index==$(".dingwei").length-1){
						roto=index*1.41+0.11;
						$(".mao_list li div").stop().css("right","1.5rem");
						$(".mao_list li").eq(index).find("div").stop().css("right","0.04rem");
						$(".rocket").css("left",""+roto+"rem");
						return;
					} 
					if(Witop<$(".dingwei").eq(index+1).offset().top){
						roto=index*1.41+0.11;
						$(".mao_list li div").stop().css("right","1.5rem");
						$(".mao_list li").eq(index).find("div").stop().css("right","0.04rem");
						$(".rocket").css("left",""+roto+"rem");
					}			
				}
			})
		}
	});
	
	
	
	
//	阶段一切换
	$(".sec1_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".show_cont").hide();
		$(".show_cont").eq($(this).index()).show();
	})
	
	//	阶段二切换
	$(".sec2tab_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".s2tab_change").hide();
		$(".s2tab_change").eq($(this).index()).show();
	})
	
	//	阶段三切换
	$(".kc_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".kc_change").hide();
		$(".kc_change").eq($(this).index()).show();
	})	
//	点击章节
	$(".chapter_name").each(function(){
		$(this).click(function(){
			$(this).toggleClass("active");
			$(this).next().toggleClass("active");
		})
	})
	//	阶段三下面表格切换
	$(".s3_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sec3_tabbox").hide();
		$(".sec3_tabbox").eq($(this).index()).show();
	})
	
	//	地址切换
	$(".address_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".address_box").hide();
		$(".address_box").eq($(this).index()).show();
	})
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
})
