//获取页面中元素对象
			const oUname = document.querySelector('.bor');
			const oUpwd = document.querySelector('.pag');
			const oLog = document.querySelector('.sub');
			const oReg = document.querySelector('.go');
			//给按钮添加点击事件
			oLog.onclick = ()=>{
				//获取用户名
				let uname = oUname.value;
				//获取密码
				let upwd = oUpwd.value;
				//获取cookie
				let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
				//将字符串转为对象
				let cookieObj = convertCookieStrToCookieObj(cookieStr);
				//判断对象中是否有登录的用户名
				if(uname in cookieObj){
					if(upwd === cookieObj[uname]){
						alert('登录成功！');
						location.href = 'commodity.html';
						return;
					}else{
						alert('密码错误！');
						return;
					}
				}else{
					alert('用户名不存在！');
					return;
				}
				
				
			}
			oReg.onclick = ()=>{
				location.href = 'list.html';
			}
			//封装json字符串转json对象的函数
			function convertCookieStrToCookieObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}