    $(function() {


      //---------------------jq初始化css-----------------------
         
      $('.partent ul li:last').css('margin-right', '0');
      
      var aImag=$('.banner-center ul li');
      aImag.first().show();

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

      //---------------------banner区域菜单栏切换----------------------

      var myleft=$('.menu-left li.women');
      
      myleft.hover(function() {

          $(this).children('.menu-right').show();

      }, function() {

          $(this).children('.menu-right').hide();

      });


      
     //---------------------banner中间部分呼吸轮播---------------------- 
      
      //点击轮播
    

      //向右点击
      var rightBtn=$('.rightBtn');
      var leftBtn=$('.leftBtn');
      var num=0;
      var aBtn=$('.aBtn li');
      var timer;

      rightBtn.click(nextFn);

        

      //向左点击
      leftBtn.click(function(event) {

          //让当前的图片淡出
          aImag.eq(num).stop().fadeOut(800);
          aBtn.eq(num).removeClass('current');
          num--;
          if (num<0) {
            num=3;
          };
          aImag.eq(num).stop().fadeIn(800);
          aBtn.eq(num).addClass('current');


      });

      //封装函数用于定时器调用
      function nextFn(){

        aImag.eq(num).stop().fadeOut(800);
        aBtn.eq(num).removeClass('current');
        num++;
        if (num>3) {
          num=0;
        };
        aImag.eq(num).stop().fadeIn(800);
        aBtn.eq(num).addClass('current');



      };

      timer=setInterval(nextFn,2000);


      //设置鼠标悬停效果
      
      var bigBanner=$('.banner-center');

      bigBanner.hover(function() {

        clearInterval(timer);

      }, function() {

        clearInterval(timer);
        timer=setInterval(nextFn,2000);
      });

      //点击小圆点效果
      
      aBtn.click(function(event) {
        
        //让当前停留的这个banner淡出，这个banner对应的下标就是num ,让num=当前操作的小圆角的下标实现同步
        aImag.eq(num).stop().fadeOut(800);
        aBtn.eq(num).removeClass('current');

        num=$(this).index();

        aImag.eq(num).stop().fadeIn(800);
        aBtn.eq(num).addClass('current');


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



      //---------------------侧栏二维码显示----------------------
      
      var code=$('.code');
      var codeImg=$('.code img');

      code.hover(function() {

          codeImg.show();

      }, function() {

          codeImg.hide();

      });


      //---------------------火箭回顶部---------------------
    
      
      var viewHeight=$(window).height();
      var goBackObj=$('.arrive');

      $(window).scroll(function(event) {
        
          if($(window).scrollTop()>=viewHeight){
            goBackObj.show();

          }else{

            goBackObj.hide();

          }

      });



      goBackObj.click(function(event) {
        
          $('html,body').stop().animate({

            'scrollTop':0

          }, 500);

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



      //---------------------banner右侧图标切换---------------------


    var aIcoLi=$('.ico li');

    aIcoLi.hover(function() {

        $(this).children('div').show();

    }, function() {
     
        $(this).children('div').hide();

    });


    //---------------------电梯开始---------------------- 

      var dianTiObj=$('.Dianti');
      // dianTiObj.css('margin-top', dianTiObj.height()/-2);
      var dianTiLi=dianTiObj.children('li');

      var f1Top=$('.f1').offset().top-120;
      var f2Top=$('.f2').offset().top-120;
      var f3Top=$('.f3').offset().top-120;
      var f4Top=$('.f4').offset().top-120;
      var f5Top=$('.f5').offset().top-120;
      var f6Top=$('.f6').offset().top-120; 
      var f7Top=$('.f7').offset().top-120; 
      var f8Top=$('.f8').offset().top-120; 
      var f9Top=$('.f9').offset().top-120;
      var f10Top=$('.f10').offset().top-120;
      
      //封装监测楼层功能
      function testLouCeng(event) {
        
        var windowEatTop=$(this).scrollTop();

        if(windowEatTop>=f10Top){

          //到达10楼
          dianTiObj.show();
          dianTiLi.eq(9).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f9Top){

          //到达9楼
          dianTiObj.show();
          dianTiLi.eq(8).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f8Top){

          //到达8楼
          dianTiObj.show();
          dianTiLi.eq(7).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f7Top){

          //到达7楼
          dianTiObj.show();
          dianTiLi.eq(6).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f6Top){

          //到达6楼
          dianTiObj.show();
          dianTiLi.eq(5).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f5Top){

          //到达5楼
          dianTiObj.show();
          dianTiLi.eq(4).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f4Top){

          //到达4楼
          dianTiObj.show();
          dianTiLi.eq(3).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f3Top){

          //到达3楼
          dianTiObj.show();
          dianTiLi.eq(2).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f2Top){

          //到达2楼
          dianTiObj.show();
          dianTiLi.eq(1).addClass('current').siblings('li').removeClass('current');

        }else if(windowEatTop>=f1Top){

          //到达1楼
          dianTiObj.show();
          dianTiLi.eq(0).addClass('current').siblings('li').removeClass('current');

        }else{

          //不在楼层内，隐藏电梯
          dianTiObj.hide();

        }


      }

      $(window).scroll(testLouCeng);


      dianTiLi.click(function(event) {
        

        $(window).off('scroll');

        $(this).addClass('current').siblings('li').removeClass('current');

        var i=$(this).index();

       if(i==9){

          $('html,body').stop().animate({
            'scrollTop':f10Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==8){

          $('html,body').stop().animate({
            'scrollTop':f9Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==7){

          $('html,body').stop().animate({
            'scrollTop':f8Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==6){

          $('html,body').stop().animate({
            'scrollTop':f7Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==5){

          $('html,body').stop().animate({
            'scrollTop':f6Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==4){

          $('html,body').stop().animate({
            'scrollTop':f5Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==3){

          $('html,body').stop().animate({
            'scrollTop':f4Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==2){

          $('html,body').stop().animate({
            'scrollTop':f3Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==1){

          $('html,body').stop().animate({
            'scrollTop':f2Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }else if(i==0){

          $('html,body').stop().animate({
            'scrollTop':f1Top+120
          }, 500,function(){

            $(window).scroll(testLouCeng);

          });

        }
      })


        $('.English-tab>li:first').show();
        //让第一个li显示
       //---------------------英语考试tab栏切换---------------------

       
       var SpeckNavLi=$('.yi>li');
       var EnglishTab=$('.English-tab');
       var EnglishTabLi=$('.English-tab>li');



       SpeckNavLi.mouseenter(function() {
        
         var i=$(this).index();
         SpeckNavLi.eq(i).addClass('current').siblings('li').removeClass('current');
         EnglishTabLi.eq(i).show().siblings('li').hide();
         
        });
       

        //---------------------顶部小广告--------------------- 

        var show=$('.show');
        var guanbi=$('.guanbi');
        guanbi.click(function(event) {
          show.hide();

        });













      });


























         
