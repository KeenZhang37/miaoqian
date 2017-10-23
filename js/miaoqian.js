var UserBox = document.querySelector('form .user');
var User = document.getElementById('user');
var PassBox = document.querySelector('form .pass');
var Pass = document.getElementById('pass');
var p1 = document.querySelector('.user p');
var p2 = document.querySelector('.pass p');

User.onblur = function(){
	str1 = User.value;
	reg1 = /^1[3,4,5,,7,8,9]\d{9}$/.test(str1);
	if(str1 == '' || str1 == null){
		p1.className = 'error';
		p1.innerHTML = '登录账号不能为空';
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
Pass.onblur = function(){
	str2 = Pass.value;
	if(str2 == '' || str2 == null){
		p2.className = 'error';
		p2.innerHTML = '登录密码不能为空';
		Pass.style.background ='#fff5f5';
		PassBox.style.background = '#fff5f5';
		PassBox.style.borderColor = '#e25a5e';
	}else{
			p2.className = '';
			p2.innerHTML = '';
			Pass.style.background ='#fff';
			PassBox.style.background = '#fff';
			PassBox.style.borderColor = '#e4e4e4';
	}
}