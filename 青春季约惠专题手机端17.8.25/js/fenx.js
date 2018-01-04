// JavaScript Document

	//∑÷œÌ
		  //ua≈–∂œ
    var oWechat = document.getElementById('wechat');
	var android_wxtip = document.getElementById('android-wxtip');
	var ios_wxtip = document.getElementById('ios-wxtip');
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf('android') != -1;
    var isiPhone = ua.indexOf('iphone') != -1;
    var isiPad = ua.indexOf('ipad') != -1;
    var isWeixin = ua.indexOf('micromessenger') != -1;
    var isqq = ua.indexOf('mqqbrowser') != -1;//QQ‰Ø¿¿∆˜
	var isq = ua.indexOf(' qq') != -1;//ƒ⁄÷√QQ
	var is360 = ua.indexOf('qihoobrowser') != -1;
    var isUc =  ua.indexOf('ucbrowser') != -1;
    var isOpera = ua.indexOf('opera') != -1;
	var isSamsung = ua.indexOf('samsung') !=-1;
   var isSafari = ua.indexOf('safari') != -1;

function showWechat() {
	
        if ( isWeixin  || isOpera || isq ) {
				 oWechat.style.display = 'block'; 
				 android_wxtip.style.display = 'block'; 
				 //$(".zg_zhez").show();
				 
        } else if(isSafari || isUc || isqq || is360){
            
				 //$(".zg_zhez").show();
          if(isSafari && isSamsung)
		{
			 oWechat.style.display = 'block'; 
			android_wxtip.style.display = 'block'; 
		}else{
			 oWechat.style.display = 'block'; 
			ios_wxtip.style.display = 'block'; 
			};
            return false;
        }else{
			
			oWechat.style.display = 'block'; 
			ios_wxtip.style.display = 'block'; 
			};
        return false;
    };	