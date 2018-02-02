$(function(){
//	第五部分信息切换
	$(".info_lunbo").on("click",".swiper-slide",function(){
//	$(".info_lunbo .swiper-slide").click(function(){
		$(".student_box").hide();
		$(".info_lunbo .swiper-slide").removeClass("on");
		$(this).addClass("on");
		if($(this).index()<5){
			$(".student_box").eq($(this).index()+9).show();
		}else if( $(this).index()>=5&&$(this).index()<19 ){
			$(".student_box").eq($(this).index()-5).show();
		}else{
			$(".student_box").eq($(this).index()-19).show();
		}
	})
	
	
	var swiper = new Swiper('.sec6_sw', {
	      slidesPerView: 1.8,
	      centeredSlides: true,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      loopedSlides:6,
	       observer: true,//修改swiper自己或子元素时，自动初始化swiper
		   observeParents: true//修改swiper的父元素时，自动初始化swiper
	    });

	var myswiper6 = new Swiper ('.info_lunbo', {
		direction : 'vertical',
		autoplay: {
		    delay: 2000,
		    disableOnInteraction: false,
	    },
		loop:true,
		slidesPerView : 5,
		sspaceBetween : 0
	}) ; 
	
	var myswiper7 = new Swiper('.huanjing_sw',{
		autoplay: {
		    delay: 2000,
		    disableOnInteraction: false,
	    },
		loop:true,
		paginationClickable :true,
		pagination: {
		    el: '.huanjing_page',
		},
	});
	TouchSlide({ slideCell:"#leftTabBox",effect:"leftLoop",mainCell:".bd ul",autoPlay:true });
})