// JavaScript Document
$(function(){
	//ͷ������Ч��
	$(".heard_left span").each(function(d) {
        $(this).hover(function(){
            $(this).append("<em></em>");
        },function(){
            $(this).find("em").remove();
        });
    });
	//ʡ��ѡ��
	$(".zghd_city").mouseenter(function(){
		$(".zghd_city").addClass("on");
		$(".zghd_cityh").show();
	})
	$(".zghd_citybox").mouseleave(function(){
		$(".zghd_city").removeClass("on");
		$(".zghd_cityh").hide();
	})


	//ʡ���л�
	$(".zg_fxxx").first().show().siblings().hide();
	$('.h334 a:first').addClass("active");
	$('.h334 a').click(function() {
		$('.h334 a').removeClass("active");
		$(this).addClass("active");
		$(".zg_fxxx").hide();
		$(".zg_fxxx").eq($(this).index(".h334 a")).show();
    });
	
//	չʾ����
	$(".mainhei").hover(function(){
		if($(this).height()>150){
			$(this).parent().height($(this).height());
		}else{
			return;
		}
	},function(){
		$(this).parent().height("150");
	})
		//����
	$(function(){
	
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
	});
		
});
    