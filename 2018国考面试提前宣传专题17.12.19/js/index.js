$(function(){
//	第一部分切换
	$(".sec1_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sec1_change_box").hide();
		$(".sec1_change_box").eq($(this).index()).show();
		var index=$(this).index();
		shensuo.call(this,index);
	})
//	第一部分展开内容
//	判断有无下拉点击按钮
	function shensuo(index){
		$(".sec1_change_box").each(function(){
			$(this).find(".kqjs_box").each(function(){
				$(this).css("height","auto");
			})
		})
	
		$(".sec1_change_box").eq(index).find(".kqjs_box").each(function(){
			if($(this).hasClass("yaodian_box")){
				if($(this).height()>90){
					$(this).prev().find(".zhankai").show();
					
				}else{
					$(this).prev().find(".zhankai").hide();
				}	
				$(this).css("height","90");
			}else{
				if($(this).height()>120){
					$(this).prev().find(".zhankai").show();
				}else{
					$(this).prev().find(".zhankai").hide();
				}
				$(this).css("height","120");
			}
		})
			
	}
	shensuo(0);
	$(".zhankai").click(function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			$(this).parent().next().css("height","auto");
		}else{
			if($(this).parent().next().hasClass("yaodian_box")){
				$(this).parent().next().css("height","90");
			}else{
				$(this).parent().next().css("height","120");
			}
		}
	})
	
	

	
//	第三部分滚动条
	$(window).load(function(){
		$(".wj_box").mCustomScrollbar({

			scrollInertia:600,

			autoDraggerLength:false

		});
	});
	
	//当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
})