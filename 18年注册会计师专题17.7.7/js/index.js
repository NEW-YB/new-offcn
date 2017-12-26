;(function(){
	//底部时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//返回顶部
	$(".totop").click(function(){
		$("body,html").animate({
			scrollTop:0
		},500);
	});
	
	//内容四切换
	$(".four_list1 li").mouseover(function(){
		$(".four_list1 li").removeClass("active");
		$(this).addClass("active");
		$(".four_cont").hide();
		$(".four_cont").eq($(this).index()).show();
	});
	
	//内容五切换
	$(".kc_list li").mouseover(function(){
		$(".kc_list li").removeClass("active");
		$(this).addClass("active");
		$(".change_box").hide();
		$(".change_box").eq($(this).index()).show();
	})
	
	//内容十切换
	$(".jidi_list li").mouseover(function(){
		$(".jidi_list li").removeClass("active");
		$(this).addClass("active");
		$(".ten_cont").hide();
		$(".ten_cont").eq($(this).index()).show();
	})
	
	//内容7
	var startLeft=0;
	var timer=null;
//	function sport(){
//				startLeft -=5;
//				if(startLeft<=-le){ 
//					startLeft = -le;
//					clearInterval(timer);
//					$(".qh").eq(ind).find(".project-box").css('left',-le);
//				}
////				
//				$(".qh").eq(ind).find(".project-box").css('left',startLeft);
//			};
	$(".slideTxtBox .hd li").click(function(){
		$(".slideTxtBox .hd li").removeClass("on");
		$(this).addClass("on");
		$(".qh").hide();
		$(".qh").eq($(this).index()).show();
		$(".banji").html($(this).html());
		if($(".qh").eq($(this).index()).find(".project-box").width()>960){
			startLeft = 0;
			var ind=$(this).index();
			
			var le=$(".qh").eq($(this).index()).find(".project-box").width()-960;
			clearInterval(timer);
			function sport(){
				startLeft -=1;
				if(startLeft<=-le){ 
					startLeft = -le;
					clearInterval(timer);
					$(".qh").eq(ind).find(".project-box").css('left',-le);
				}
//				
				$(".qh").eq(ind).find(".project-box").css('left',startLeft);
			};
			timer = setInterval(sport,10);
		}
	})
	
	$('.project-box').hover(function(e) {
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		var le=$(this).width()-960;
		var that=$(this);
		function sport(){
			startLeft -=1;
			if(startLeft<=-le){ 
				startLeft = -le;
				clearInterval(timer);
				that.css('left',-le);
			}		
			that.css('left',startLeft);
		};
		timer = setInterval(sport,10)
	});	
	
	$(".zm_list li").click(function(){
		$(".zm_list li").removeClass("active");
		$(this).addClass("active");
		$(".zm_tabbox").hide();
		$(".zm_tabbox").eq($(this).index()).show();
	})
})();
