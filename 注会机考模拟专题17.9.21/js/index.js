;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	

//	第三部分切换
	$(".sec3_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sec3_change").hide();
		$(".sec3_change").eq($(this).index()).show();
	})


//	第九部分轮播
	$('.z5_szzp').append($('.z5_szzp').html());
	var Len=$('.z5_szzp li').outerWidth(true);
	var num=$('.z5_szzp li').size();
	var sum=0;
	$('.z5_szzp').css({width:num*Len})
	//左右轮播
	$('.z5_but').mouseover(function(){
		clearInterval(timer);
	});
	$('.z5_next').click(function(){
		if(sum==num/2){
			sum=0;
			$('.z5_szzp').css({left:0})
		}
		sum++;
		$('.z5_szzp').animate({left:-sum*Len});
	});	
	$('.z5_prev').click(function(){
		if(sum==0){
			sum=num/2
			$('.z5_szzp').css({left:-sum*Len})
		}
		sum--;
		$('.z5_szzp').animate({left:-sum*Len});	
	});

	//自动轮播	
		//autoPlay();
		var timer=setInterval(function(){
			autoPlay()
			},3000)	
	function autoPlay(){
		if(sum==num/2){
			sum=0;
			$('.z5_szzp').css({left:0})
		}
		sum++;
		$('.z5_szzp').animate({left:-sum*Len});
	}
	
	//滑过滑离	
	$('.z5_szlbwc').mouseover(function(){
		clearInterval(timer);
		});
	$('.z5_szlbwc').mouseout(function(){
		clearInterval(timer);
		timer=setInterval(function(){
			autoPlay()
			},3000)
		})


//	第十一部分
	$(".dw_box div").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})

})();


