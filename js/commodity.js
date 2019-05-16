$('.pic2').mouseenter(
			function(){
				$('.big2').css('display','block')
				$('.big1').css('display','none')
			}
		)
		$('.pic2').mouseenter(
			function(){
				$('.big2').css('display','block')
				$('.big3').css('display','none')
			}
		)
		
		$('.pic3').mouseenter(
			function(){
				$('.big3').css('display','block')
				$('.big2').css('display','none')
			}
		)
		
		$('.pic1').mouseenter(
			function(){
				$('.big3').css('display','none')
				$('.big1').css('display','block')
			}
		)
		$('.pic1').mouseenter(
			function(){
				$('.big2').css('display','none')
				$('.big1').css('display','block')
			}
		)
		
		//实现购物车
		initCartNum()
		$('.adds1').click(function(){
				location.href = 'cart.html';
			})
		let $toCart = $('.adds2');
			$.each($toCart, function() {
				$(this).click(function(event){
					//id
					let goodId = $(this).parent().parent().parent().attr('data-good-id');
					
					//名称
					let goodName =$('.goodna') .text();
					
					//价格
					let goodPrice = parseInt($('.goodp').text());
					
					//src
					let goodSrc = $('.small1').attr('src');
					//获取发货地点
					let goodPosition = $('.positio').text();
						let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
					let cookieObj = $strToObj(cookieStr);
					if(goodId in cookieObj){
						cookieObj[goodId].num ++;
					}else{
						cookieObj[goodId] = {
							"posi":goodPosition,
							"name" : goodName,
							"price" : goodPrice,
							"src" : goodSrc,
							"num" : 1
						}
					}
					$.cookie('carts',JSON.stringify(cookieObj),{expires : 3,path : '/'});
					 history.go(0);
					 
			})
			
	  });
	 
			function initCartNum(){
				let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
				let cookieObj = $strToObj(cookieStr);
				let sum = 0;
				for(let i in cookieObj){
					sum += cookieObj[i].num;
				}
				 $('.adds1').val(`购物车(${sum})`);
			}
			function $strToObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}
			

