;(function(){
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
		
//	第三部分课程切换
	$("#solutionList li").mouseover(function(){
//		$(this).css("z-index","2").siblings().css("z-index","1");
		$(this).addClass("active").siblings().removeClass("active");
		
	})
	
	$(".ckkc").click(function(){
		var sctop=$(".two").offset().top;
		$("html,body").stop().animate({
			scrollTop:sctop
		},500)
	})
	
	
	
	
	//	右侧锚点
	$(".fix_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var scrtop=$(".dingwei").eq($(this).index()).offset().top;
		onoff=false;
		$("body,html").animate({"scrollTop":scrtop+1},500,function(){
			onoff=true;
		})
	})
	
	var arr=[];
	var onoff=true;
	for (var i = 0; i < $(".fix_list li").not(".lastli").length; i++) {
		arr.push( $(".dingwei").eq(i).offset().top )
	}
	function initClass(){
		if (onoff) {
			var sctop=$(window).scrollTop();
			for (var i = 0; i < arr.length; i++) {
				
				if(sctop<arr[0]){
					$(".fix_list li").removeClass("active");
					$(".fix_list li:first").addClass("active");
				}
				if ( sctop>=arr[i]&sctop<arr[i+1] ) {
					$(".fix_list li").removeClass("active");
					$(".fix_list li").eq(i).addClass("active");
				}
				if ( sctop>=arr[arr.length-1] ){
					$(".fix_list li").removeClass("active");
					$(".fix_list li").eq(arr.length-1).addClass("active");
				}
			}
		}
	}
	
	initClass();
	$(window).scroll(function(){
		initClass();
	});
	
	
	
	
	
	
	
})();


