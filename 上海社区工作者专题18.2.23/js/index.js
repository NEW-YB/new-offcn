;(function(){
	//����foot�µĵ�ǰʱ��
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
	
//	��һ����������ȥ�л�
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
	
	//	�ڶ�����������ȥ�л�
	$(".sec2_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".sec2_change").hide();
		$(".sec2_change").eq($(this).index()).show();
	})
	
	//	���Ĳ���������ȥ�л�
	$(".fenbu_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fenbu_box").hide();
		$(".fenbu_box").eq($(this).index()).show();
	})
	
//	���ض���
	$(".totop").click(function(){
		$("body,html").stop().animate({
			scrollTop:0
		},500)
	})
	
	
	//yzm
	$('#getyzm').click(function(){
		var Myphone=$('#tel').val();
		if(Myphone==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('����д�ֻ���');
			return false;
			}
			
		var reg=/^0?1[34578]\d{9}$/; //�ֻ�������
		if(!reg.test(Myphone)){   //��֤�ֻ����Ƿ���ȷ
			alert('����д��ȷ���ֻ��ţ�');
			return false;
			}
		$('#getyzm').hide();
		$('#daojishi').show();
		$.getJSON("http://shequ.offcn.com/index.php?m=formguide&c=index&a=yzm&mobile="+Myphone+"&callback=?",function(json){
			if(json.status==1){
				alert('���ڷ�����֤��');
				//����ʱ
				runcount(60);
			}else{
				alert('����ʧ��');
			}
			
			})
		});
		//����ʱ����
	 function runcount(t){
		 if(t>0){
			 document.getElementById('daojishi').innerHTML=t+'S�����»�ȡ';
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



