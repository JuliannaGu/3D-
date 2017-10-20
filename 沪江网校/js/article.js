$(function() {
	

 //---------------------导航栏下拉列表----------------------
      var aoneNav=$('.oneNav');
      var atwoNav=$('.twoNav');
      var Atab=$('.tab');
      Atab.mouseenter(function(event) {

          atwoNav.show();

      });

          Atab.mouseleave(function(event) {
          atwoNav.hide();

      });

//---------------------顶部导航栏下拉列表----------------------
      
      var currentLi=$('.currentLi');
      
      currentLi.each(function(index, el) {

          $(el).attr('xuhao',index);

      });

      var whiteNav=$('.whiteNav');

      whiteNav.hover(function() {

          var i=$(this).children('.currentLi').attr('xuhao');
          currentLi.eq(i).show();

      }, function() {
          var i=$(this).children('.currentLi').attr('xuhao');
          //alert('鼠标离开');
          currentLi.eq(i).hide();
         
      });


       //---------------------我的收藏下拉菜单---------------------


      var like=$('.sousuo-right');
      var shoucang=$('.shoucang');
      var shoucangDown=$('.shoucang-down');
      var shoucangUp=$('.shoucang-up');
      var like=$('.sousuo-right');

      like.hover(function() {

          shoucangUp.show();
          shoucangDown.show();

      }, function() {

          shoucangUp.hide();
          shoucangDown.hide();

      });


      //---------------------搜索区域获得焦点----------------------
      
      var inp2=document.getElementById('inp2');
      inp2.onfocus=function(){

          if (inp2.value=='券翻倍抵，特惠日专享5折起') {
            inp2.value='';
            inp2.style.color='#333';

          };

      };

     inp2.onblur=function(){

          if (inp2.value=='') {
            inp2.value='券翻倍抵，特惠日专享5折起';
            inp2.style.color='#999';

         }

      };






//------------------------下拉菜单的显隐藏------------------------
	    var btn=$('.btn');
	    var aLi=$('.detai .ceng1:gt(3)');
	    var onOff=true;
	    aLi.hide();
	    btn.click(function(event) {
	    	if (onOff==true) {
	    		//alert();
	    		aLi.slideDown();
	    		btn.html('收起选项');
	    		onOff=false;
	    	} else{

	    	aLi.slideUp();
	     	btn.html('查看更多');
	     	onOff=true;
	    	};

	     	
	     });



      //------------------------内容部分导航------------------------
      var currentLi=$('.currentLi');
      
      currentLi.each(function(index, el) {

          $(el).attr('xuhao',index);

      });

      var EE=$('.EE');

      EE.hover(function() {

          var i=$(this).children('.currentLi').attr('xuhao');
          currentLi.eq(i).show();
          $('.line1').show();
          $('.line2').show();

      }, function() {
          var i=$(this).children('.currentLi').attr('xuhao');
          //alert('鼠标离开');
          currentLi.eq(i).hide();
          $('.line1').hide();
          $('.line2').hide();
         
      });















});