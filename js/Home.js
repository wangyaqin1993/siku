$shift = $('.china');
		$shift.click(function(){
			  $('.chinese_english_shift').css('display','block')
		 })
		$shift.mouseleave(function(){
			  $('.chinese_english_shift').css('display','none')
		 })
		
        //鼠标滑过轮播实现顶部向上效果
       $('.slidesum').hover(
		  function () {
		    $(this).css("top","-10px");
		  },
		  function () {
		    $(this).css("top","0");
		  }
		)
       
       
  
 
       //实现轮播改变ul的left值。按左按钮向右走，按右按钮向左走5张图片的加margin的宽度
       //移入按钮透明度变为50%
       //获取页面操作元素
        const oBigBox = $id('slide_con_slide');//大盒子
        const oSlidecon1 = $id('slide_con_slide1');//ul
  	    const  oButleft = $id('slide_button_left');//左按钮
        const  oButright = $id('slide_button_right');//右按钮
        const  oPic = document.getElementsByClassName('slidesum');//li
        //初始化变量
        let indexA = 0;
         //添加事件
         //左按钮---移入事件----左按钮（透明度）
			oButleft.onmouseenter = function(){
					sport(oButleft,{opacity : 50});
				}
		//左按钮---移出事件----左按钮（透明度）
			oButleft.onmouseleave = function(){
					sport(oButleft,{opacity : 100});
				}
          //右按钮---移入事件----右按钮（透明度）	
			oButright.onmouseenter = function(){
					sport(oButright,{opacity : 50});
				}
          //右按钮---移出事件----右按钮（透明度）	
			oButright.onmouseleave = function(){
					sport(oButright,{opacity : 100});
				}
   
       	//左按钮添加事件
       	  oButleft.onclick = function(){
					indexA += 5;	
					if(indexA >= oPic.length){
						indexA = 0;
					}
					console.log(indexA)
					slide();
				}
       	  function slide(){
					//小图轮播
					if(indexA === 0){
						sport(oSlidecon1,{left : 0});
					}else{
						sport(oSlidecon1,{left : -indexA*245});
					}			
				}
       	  
       	  
       	  
      //右按钮点击事件
        oButright.onclick = function(){	 
					indexA  -= 5;	
					if(indexA <= 0 ){
						indexA = oPic.length;
					}
					console.log(indexA)
					slider();
				}
       	  function slider(){
					//小图轮播
					if(indexA === 0){
						sport(oSlidecon1,{left : 0});
					}else{
						sport(oSlidecon1,{left : -(indexA-5)*245});
					}			
				}
      
 
        //获取id的函数
        function $id(id){
				return document.getElementById(id);
			}