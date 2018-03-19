$(function(){
	var swiper = new Swiper('.sec6_sw', {
	      slidesPerView: 3,
	      loop: true,
	      spaceBetween : "2.7%",
	      observer: true,//修改swiper自己或子元素时，自动初始化swiper
		  observeParents: true//修改swiper的父元素时，自动初始化swiper
	    });

	var myswiper8 = new Swiper ('.sec8_sw', {
		slidesPerView: 2.2,
	    loop: true,
	    spaceBetween : "2.7%",
	    observer: true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents: true//修改swiper的父元素时，自动初始化swiper
	}) ; 
	
	//设置foot下的当前时间
	var nowtime=new Date();
	var nowyear=nowtime.getFullYear();
	$(".nowtime").html(nowyear);
})