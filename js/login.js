 	  //获取页面元素对象
			const oUname = document.querySelector('.bor');
			const oUpwd = document.querySelector('.pag');
			const oUpwd2 = document.querySelector('.pag2');
			const oLog = document.querySelector('.sub');
			const oReg = document.querySelector('.go');
			//给按钮添加点击事件
			 oLog .onclick = ()=>{
				//获取用户名
				let uname = oUname.value;
				//获取密码
				let upwd = oUpwd.value;
				//获取再次输入的密码
				let upwd2 = oUpwd2.value;
				//判断用户名是否为空
				if(!uname){
					alert('用户名不能为空！');
					return;
				}
				if(!upwd){
					alert('密码不能为空！');
					return;
				}
				if(upwd != upwd2){
					alert('密码不一致，请重新输入');
					return;
				}
				//获取cookie，判断当前cookie中用户名是否存在
				let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
				//将cookie字符串转为cookie对象
				let cookieObj = convertCookieStrToCookieObj(cookieStr);
				//判断对象中是否有当前注册的用户名这个属性
				if(uname in cookieObj){
					alert('用户名已存在！');
					return;
				}else{
					cookieObj[uname] = upwd;
					alert('已完成注册,请点击下方登录按钮完成登录哦!')
				}
				//将改变后的对象转为字符串
				cookieStr = JSON.stringify(cookieObj);
				//重新存入cookie
				$cookie('registors',cookieStr,10);
			}
			
			 oReg.onclick = ()=>{
				location.href = 'register.html';
			}
			//封装一个将json字符串转为json对象的函数
			function convertCookieStrToCookieObj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}