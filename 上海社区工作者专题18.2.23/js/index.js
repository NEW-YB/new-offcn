;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	第一部分鼠标放上去切换
	$(".dq1").each(function(){
		$(this).find("li").last().addClass("lastli").siblings("li").removeClass("lastli");
	})
	$(".kq_list").each(function(){
		$(this).find("li").last().addClass("lastli").siblings("li").removeClass("lastli");
	})
	$(".kq_box:first").show();
	$(".kq_box").each(function(){
		$(this).find(".dq_list li").first().addClass("active").siblings("li").removeClass("active");
		$(this).find(".dq_right").first().show().siblings(".dq_right").hide();
	})
	$(".sec1_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".kq_box").hide();
		$(".kq_box").eq($(this).index()).show();
	})
	$(".dq_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".kq_box").find(".dq_right").hide();
		$(this).parents(".kq_box").find(".dq_right").eq($(this).index()).show();
	})
	
	//	第二部分鼠标放上去切换
	$(".sec2_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sec2_change").hide();
		$(".sec2_change").eq($(this).index()).show();
	})
	
	//	第四部分鼠标放上去切换
	$(".fenbu_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fenbu_box").hide();
		$(".fenbu_box").eq($(this).index()).show();
	})
	
//	返回顶部
	$(".totop").click(function(){
		$("body,html").stop().animate({
			scrollTop:0
		},500)
	})
	
	
	//yzm
	$('#getyzm').click(function(){
		var Myphone=$('#tel').val();
		if(Myphone==''){   //验证手机号是否为空
			alert('请填写手机号');
			return false;
			}
			
		var reg=/^0?1[34578]\d{9}$/; //手机号正则
		if(!reg.test(Myphone)){   //验证手机号是否正确
			alert('请填写正确的手机号！');
			return false;
			}
		$('#getyzm').hide();
		$('#daojishi').show();
		$.getJSON("http://shequ.offcn.com/index.php?m=formguide&c=index&a=yzm&mobile="+Myphone+"&callback=?",function(json){
			if(json.status==1){
				alert('正在发送验证码');
				//倒计时
				runcount(60);
			}else{
				alert('发送失败');
			}
			
			})
		});
		//倒计时函数
	 function runcount(t){
		 if(t>0){
			 document.getElementById('daojishi').innerHTML=t+'S后重新获取';
			 t--;
			 setTimeout(function(){
				 runcount(t)
				 },1000)
			 }else{
				 $('#getyzm').show();
				 $('#daojishi').hide();
				 }
		 }
	
	
	
	
	
	
	
	
})();



