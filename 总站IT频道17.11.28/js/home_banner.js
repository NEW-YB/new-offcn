//首页banner优化成了异步调取，所以此处的banner处理改成方法 by zrj at 2016-03-07 16:59
function start_home_banner(){
//$(function() {
	
	var timer = 5000;
	var showtime = 800;
	var showbox = $("#banner_show");
	var inbox = $(".bannger_inbox");
	var movelist = $("#yq_banner_list");
	var s;
	var b = 0;
	var size = inbox.size();
	var play = 1;

	function move() {
		b++;
		if (b > size - 1) {
			b = 0;
		}
		inbox.each(function(e) {
			inbox.eq(e).hide(0);
			//$("#banner_magbox" + e).hide();
			movelist.find("a").eq(e).removeClass("on");
			if (e == b) {
				inbox.eq(b).fadeIn(showtime);
				//$("#banner_magbox" + b).show();
				movelist.find("a").eq(b).addClass("on");
			}
		});
	}
	s = setInterval(move, timer);

	function stopp(obj) {
		$(obj).hover(function() {
				if (play) {
					clearInterval(s);
					play = 0;
				}
			},
			function() {
				if (!play) {
					s = setInterval(move, timer);
					play = 1;
				}
			}
		);
	}
	stopp(".banner_show");
	$(".next").click(function() {
		move();
	});
	$(".pre").click(function() {
		b--;
		if (b < 0) {
			b = size - 1
		}
		inbox.each(function(e) {
			inbox.eq(e).hide(0);
			movelist.find("a").eq(e).removeClass("on");
			if (e == b) {
				inbox.eq(b).fadeIn(showtime);
				movelist.find("a").eq(b).addClass("on");
			}
		});
	});
	movelist.find("a").click(function() {
		var rel = $(this).attr("rel");
		inbox.each(function(e) {
			inbox.eq(e).hide(0);
			movelist.find("a").eq(e).removeClass("on");
			//$("#banner_magbox" + e).hide(0);
			if (e == rel) {
				inbox.eq(rel).fadeIn(showtime);
				movelist.find("a").eq(rel).addClass("on");
				//$("#banner_magbox" + rel).show(0);
			}
		});
	});
	$(".bannger_inbox").each(function(e) {
		var inboxsize = $(".bannger_inbox").size();
		$(".bannger_inbox").width($(window).width());
		inboxwimg = $(window).width();
		$(".bannger_inbox").eq(e).css({
			"margin-left": (-1) * inboxwimg / 2 + "px",
			"z-index": inboxsize - e
		});
	});

/*	$(".banner").hover(
		function(){
		$(".banner_pre_next").fadeIn();
		},function(){
		$(".banner_pre_next").fadeOut();
	})*/
		
//});
}