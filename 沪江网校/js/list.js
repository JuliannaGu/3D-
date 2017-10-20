$(function() {
	
	//---------------------jq初始化css样式----------------------
		var noMargin=$('.banner6-in li');

		noMargin.eq(1).css('margin-right', 0);
		noMargin.eq(3).css('margin-right', 0);
		noMargin.eq(2).css('margin-bottom',0);
		noMargin.eq(3).css('margin-bottom',0);

		var list1=$('.list1 li');
		list1.eq(0).css('margin-right', 20);
		list1.eq(2).css('margin-right', 20);

		$('.more li:first').css('margin-right', 50);



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


















});





       


      

		





		