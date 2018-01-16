;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
	//	点击视频
	$(".video_play").click(function(){
		$(this).next().show();
		var This=$(this)
		var srcNew=$(this).next().find("iframe").attr("_src");
		$(this).next().find("iframe").attr("src",srcNew);
		setTimeout(function(){
			This.next().find(".close").show();
		},1000)
	})
	$(".close").click(function(){
		$(this).parent().hide();
		$(this).prev().attr("src","");
		$(this).hide();
	})
	
//	第二部分问题切换
	$(".step_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".step_answer_box").hide();
		$(".step_answer_box").eq($(this).index()).show();
	})
	
//	第三部分地图
	$(".zg_con10nei>p").mouseover(function (){
        $(this).addClass("act3").siblings("p").removeClass("act3");
//      $(".zg_con10nei>div").eq($(this).index()).css("display","block").siblings("div").css("display","none");
        if($(".zg_con10nei>div").eq($(this).index()).html()==""){
        	$(".zg_con10nei>div").css("display","none");
        }else{
        	$(".zg_con10nei>div").eq($(this).index()).css("display","block").siblings("div").css("display","none");
        }
    });
	
//	底部锚点
	$(".daohang_list li").click(function(){
		var sctop=$(".sec"+($(this).index()+1)+"").offset().top;
		$("body,html").animate({"scrollTop":sctop},500)
	})
})();


