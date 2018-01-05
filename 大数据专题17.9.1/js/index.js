;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	
		
	
	
//	悬浮窗
	$(".fixBtnOpen").click(function(){

		$(".indexFix").stop().animate({right:0},500);

		//$(".fixBtnOpen").addClass("fixBtnClose");

		$(".fixBtnOpen").hide();

		$(".fixBtnClose").show();

		});

	$(".fixBtnClose").click(function(){

		$(".fixBtnOpen").show();

		$(".fixBtnClose").hide();

		$(".indexFix").animate({right:-162},500);

	});
	
	
//	六大优惠动画
    $(".quan").hover(function(){
        var index=$(this).index();
        $(".quan img").css("animation","").eq(index).css({"animation":"imgs 1s forwards"});
        $(".quan .worder").css("animation","").eq(index).css({"animation":"word 1s 0.6s forwards","display":"block"});
    },function(){
        var index=$(this).index()
        $(".quan img").css("animation","");
        $(".quan .worder").css({"animation":"","display":"none"})
    });
	
	
//	行业大咖切换
	imgauto();
	function imgauto(){
		
		var txt=$('.zg_imolcont ul').html();
		$('.zg_imolcont ul').append(txt);
		var sum=$('.zg_imolcont ul li').size();
		var wid=$('.zg_imolcont ul li').outerWidth(true);
		var num=0;
		$('.zg_imolcont ul').css('width',wid*sum);
		
		$('.zg_iksirg').click(function(){
			$('.zg_imolcont').find('ul').stop(true,true);
			if(num==sum/2-1){
				num=0;
				$('.zg_imolcont ul').css('left',-wid*num);
			}
			num++;
			$('.zg_imolcont ul').animate({'left':-wid*num});
		});
		$('.zg_ikslet').click(function(){
			$('.zg_imolcont').find('ul').stop(true,true);
			if(num==0){
				num=sum/2
				$('.zg_imolcont ul').css('left',-wid*num);
			}
			num--;
			$('.zg_imolcont ul').animate({'left':-wid*num});
		});
		
		$('.zg_imolcont li').click(function(){
		$('.zg_imolcont li').removeClass('on');
		$(this).addClass('on');
		if($(this).index()>sum/2-1){
			var thin=$(this).index()-9
			$('.zg_imolcont li').eq(thin).addClass('on');
		}else{
			var thin=$(this).index()
			$('.zg_imolcont li').eq(thin+9).addClass('on');
		}
				
			
			$('.zg_opso').eq(thin).show().siblings('.zg_opso').hide();
		});
		
		
	}
	
	
	
	
})();
