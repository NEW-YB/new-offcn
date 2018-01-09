$(function(){
	//	横通距离考试时间
	function lxfEndtime(){
		$(".remaind_day").each(function(){
	        var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
	        var nowtime = new Date().getTime();        //今天的日期(毫秒值)
	        var youtime = endtime-nowtime;//还有多久(毫秒值)
	        var seconds = youtime/1000;
	        var minutes = Math.floor(seconds/60);
	        var hours = Math.floor(minutes/60);
	        var days = Math.floor(hours/24);
	        var CDay= days ;
	        var CHour= hours % 24;
	        var CMinute= minutes % 60;
	        var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
	        if(endtime<=nowtime){
	            $(this).html("0")//如果结束日期小于当前日期就提示过期啦
	        }else{
	           	$(this).html(days);          //输出有天数的数据
	        }
	  	});
	}
	setTimeout(lxfEndtime,3600000);
	lxfEndtime();
	
	
})