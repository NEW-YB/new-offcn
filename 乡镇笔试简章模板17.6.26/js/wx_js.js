;(function(){
	//初始给表格最后一行加class名。
	$("table").each(function(){
		$(this).find("tr:last").addClass("lasttr");
	})
	
	//查看更多
	$(".more_content").click(function(){
		if($(this).html()=="查看更多"){
			$(this).prev().css("height","auto");
			$(this).html("收起内容");
			$(this).css("background-image","url(../images/shangjian.png)");
		}else{
			$(this).prev().css("height","88");
			$(this).html("查看更多");
			$(this).css("background-image","url(../images/xiajian.png)");
		}
	})
	
	
})();
