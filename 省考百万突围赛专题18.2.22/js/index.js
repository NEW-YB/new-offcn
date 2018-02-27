$(function(){
// 点击弹出注册框
	$(".register_button").click(function(){
		$(".mask").show();
		$(".register_box").show();
	})
   	
   	$(".register_close").click(function(){
   		$(".register_box").hide();
   		$(".mask").hide();
   	})
	
	
	
		
//	右侧锚点
	$(".fixed li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var scrtop=$(".dingwei").eq($(this).index()).offset().top;
		onoff=false;
		$("body,html").animate({"scrollTop":scrtop+1},500,function(){
			onoff=true;
		})
	})
	
	var arr=[];
	var onoff=true;
	for (var i = 0; i < $(".fixed li").length; i++) {
		arr.push( $(".sec"+(i+1)+"").offset().top )
	}
	function initClass(){
		if (onoff) {
			var sctop=$(window).scrollTop();
			for (var i = 0; i < arr.length; i++) {
				
				if(sctop<arr[0]){
					$(".fixed li").removeClass("active");
					$(".fixed li:first").addClass("active");
				}
				if ( sctop>=arr[i]&sctop<arr[i+1] ) {
					$(".fixed li").removeClass("active");
					$(".fixed li").eq(i).addClass("active");
				}
				if ( sctop>=arr[arr.length-1] ){
					$(".fixed li").removeClass("active");
					$(".fixed li:last").addClass("active");
				}
			}
		}
	}
	
	initClass();
	$(window).scroll(function(){
		initClass();
	});

	

	
	
});