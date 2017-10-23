var visiterBox = document.querySelector('.register_main .visiter_box');
var oSpan = visiterBox.querySelector('span');
var visiter = visiterBox.querySelector('.visiter');
var I = visiterBox.querySelector('i');
var on = true;
//邀请码
oSpan.onclick = function(){
	if(on){
		visiter.style.display = 'block';
		I.style.backgroundPosition = '0 -12px';
	}else{
		visiter.style.display = 'none';
		I.style.backgroundPosition = '0 0';
	}
	on = !on;
}
var agreement = document.querySelector('.agreement');
var oI = agreement.querySelector('i');
console.log(agreement)
agreement.onclick = function(){
	if(on){
		oI.style.background = 'url(img/ico_check_no.png)';
	}else{
		oI.style.background = 'url(img/ico_checked.png)';
	}
	on = !on;
}
//正则判断
var UserBox = document.querySelector('form .user');
var User = document.getElementById('user');

var YzmBox = document.querySelector('form .yzm');
var Yzm = document.getElementById('yzm');

var PassBox = document.querySelector('form .pass');
var Pass = document.getElementById('pass');

var p1 = document.querySelector('.user p');
var p2 = document.querySelector('.yzm p');
var p3 = document.querySelector('.pass p');

//用户名
User.onblur = function(){
	str1 = User.value;
	reg1 = /^1[3,4,5,,7,8,9]\d{9}$/.test(str1);
	if(str1 == '' || str1 == null){
		p1.className = 'error';
		p1.innerHTML = '请输入11位手机号码';
		User.style.background ='#fff5f5';
		UserBox.style.background = '#fff5f5';
		UserBox.style.borderColor = '#e25a5e';
	}else{
		if(!reg1){
			p1.className = 'error';
			p1.innerHTML = '手机号码格式错误';
			User.style.background ='#fff5f5';
			UserBox.style.background = '#fff5f5';
			UserBox.style.borderColor = '#e25a5e';
		}else{
			p1.className = '';
			p1.innerHTML = '';
			User.style.background ='#fff';
			UserBox.style.background = '#fff';
			UserBox.style.borderColor = '#e4e4e4';
		}
	}
}

//验证码
Yzm.onblur = function(){
	str2 = Yzm.value;
	reg2 = /^[0-9]\d{5}$/.test(str2);
	if(str2 == '' || str2 == null){
		p2.className = 'error';
		p2.innerHTML = '请输入6位数字验证码';
		Yzm.style.background ='#fff5f5';
		YzmBox.style.background = '#fff5f5';
		YzmBox.style.borderColor = '#e25a5e';
	}else{
		if(!reg2){
			p2.className = 'error';
			p2.innerHTML = '短信验证码格式错误';
			Yzm.style.background ='#fff5f5';
			YzmBox.style.background = '#fff5f5';
			YzmBox.style.borderColor = '#e25a5e';
		}else{
			p2.className = '';
			p2.innerHTML = '';
			Yzm.style.background ='#fff';
			YzmBox.style.background = '#fff';
			YzmBox.style.borderColor = '#e4e4e4';
		}
	}
}

//密码
Pass.onblur = function(){
	str3 = Pass.value;
	reg3 = /[A-z,0-9][A-z,0-9]{5,15}$/.test(str3)
	if(str3 == '' || str3 == null){
		p3.className = 'error';
		p3.innerHTML = '请输入6-16位密码，字母区分大小写';
		Pass.style.background ='#fff5f5';
		PassBox.style.background = '#fff5f5';
		PassBox.style.borderColor = '#e25a5e';
	}else{
		if(!reg3){
			p3.className = 'error';
			p3.innerHTML = '密码长度必须为6-16位字符';
			Pass.style.background ='#fff5f5';
			PassBox.style.background = '#fff5f5';
			PassBox.style.borderColor = '#e25a5e';
		}else{
			p3.className = '';
			p3.innerHTML = '';
			Pass.style.background ='#fff';
			PassBox.style.background = '#fff';
			PassBox.style.borderColor = '#e4e4e4';
		}
	}
}




