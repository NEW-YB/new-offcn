
$(function() {

//获取时间
    var mydate = new Date();
    var t = mydate.getFullYear();
    $("#zg_sp").text(t);
   $(".zg_dnavoul li").eq(5).css("border-right","none");
    //配套服务
    $('.s7_ld a').hover(function(){
        $(this).addClass('s7_act').siblings().removeClass('s7_act');
        $('.s7_wenz').eq($(this).index()).show().siblings('.s7_wenz').hide();

    });
    //成公辅导
    $(".zg_con7oul li").eq(0).children(".zg_con7div1").hide();
    $(".zg_con7oul li").mouseover(function(){
        $(this).children(".zg_con7div1").fadeOut();
        $(this).siblings().children(".zg_con7div1").fadeIn();
    })
    //表格样式控制
    $(".zg_con6div tr td:last-child").css("border-right","none")
    $(".zg_con6div tbody tr:last-child").children("td").css("border-bottom","none")
    //报名
    $('.zg_bao1').click(function(){
        $('.zg_xf').show();
        $(".box_bj").show();
    });
    $('.close,.box_bj').click(function(){
        $('.zg_xf').hide();
        $(".box_bj").hide();
    });


    //	点击视频
    $(".kc_pic").click(function(){
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

    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});
    jQuery(".lunbo").slide({mainCell:".lb_list",titCell:".lb_tip li",effect:"leftLoop",autoPlay:true,interTime:2000,prevCell:".lb_prev",nextCell:".lb_next",pnLoop:true});
})






















