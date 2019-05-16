  //获取cookie传的参是key
			let cookieStr = $.cookie('carts');
			//先判断
			if(!cookieStr){
				$('.goodlist').css('display','block');
			}else{
				let cookieObj = $strToObj(cookieStr);
				for(let key in cookieObj){
					let good = cookieObj[key];
					let str = `
						<ul class="goodInfo" data-good-id="${key}">
							<li class="goo1"><img src="${good.src}" /></li>
							<li class="goo2">${good.name}</li>
							<li class="goo3">${good.posi}</li>
							<li class="goo4">${good.price}</li>
							<li class="num ">
								<a href="javascript:;" class="minus">-</a>
								<input type="text" name="" id="" value="${good.num}" />
								<a href="javascript:;" class="plus">+</a>
							</li>
							<li class="total">${good.price * good.num}</li>
							<li class="goo7"><a href="javascript:;" class="del">删除</a></li>
						</ul>
					`;
					$('.box').append(str);
					
				}
				//-
					let $minus = $('.goodInfo .minus');
					$minus.each(function(){
						$(this).click(function(){
							let id = $('.goodInfo').attr('data-good-id');
							let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
							let cookieObj = $strToObj(cookieStr);
							if(cookieObj[id].num > 0){
								cookieObj[id].num --;
							}
							$.cookie('carts',JSON.stringify(cookieObj),{expires : 3,path : '/'});
							$(this).next().val(cookieObj[id].num);
						$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
							
						})
						
					})
				
				//+
				let $plus = $('.goodInfo .plus');
				$.each($plus,function(){
					$(this).click(function(){
							let id = $('.goodInfo').attr('data-good-id');
						let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
						let cookieObj = $strToObj(cookieStr);
						cookieObj[id].num ++;
						$.cookie('carts',JSON.stringify(cookieObj),{expires : 3,path : '/'});
						$(this).prev().val(cookieObj[id].num);
						$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
					})
				})
				//数量框
				let $inp = $('.goodInfo .num input');
				$inp.each(function(){
					$(this).blur(function(){
							let id = $('.goodInfo').attr('data-good-id');
						let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
						let cookieObj = $strToObj(cookieStr);
						let str = $(this).val();
						if(/^\d+$/.test(str) && str > 0){
							cookieObj[id].num = str;
						}else{
							cookieObj[id].num = 1;
						}
						$.cookie('carts',JSON.stringify(cookieObj),{expires : 3,path : '/'});
						$(this).val(cookieObj[id].num);
						$(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
					})
				})
				//删除
				let $del = $('.goodInfo .del');
				$.each($del,function(){
					$(this).click(function(){
							let id = $('.goodInfo').attr('data-good-id');
						let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
						let cookieObj = $strToObj(cookieStr);
						delete cookieObj[id];
						$.cookie('carts',JSON.stringify(cookieObj),{expires : 3,path : '/'});
						history.go(0);
					})
				
				})
				
			}
				
			function $strToObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}