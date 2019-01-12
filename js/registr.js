function $(id) {
	return document.getElementById(id);
}

var count = 0;
$("btnLogin").onclick=function(event){
	var ev = event || window.event;
	if (count<3) {
		alert("小宝贝，您输入有误哦！");
		ev.preventDefault();
	}
}

window.onload = function(){
	//手机号
	$("txtCellPhone").onblur = function () {
		var reg =/^1[3-9]\d{9}$/i;
		if (reg.test(this.value)) {
			$("PhoneInfo").style = "display:block";
			// count++;
		}else{
			$("PhoneInfo").style = "display:block";
			$("PhoneInfo").innerHTML = "手机号码格式不正确";
		}
	}
	//密码
	$("pwd").onkeyup = function () {
		// $("passDiv").innerHTML = "密码正确";
		var pass = this.value;
		console.log(pass);
		if(pass.length>=6 && pass.length<=16){

			var hasNum = false;
			var regNum = /\d/;
			if(regNum.test(pass)){
				hasNum = true;
			}

			var hasLetter = false;
			var regLetter = /[a-zA-Z]/ig;
			if(regLetter.test(pass)){
				hasLetter = true;
			}

			var hasSpecial = false;
			var regSpecial = /[@!#\$%+-/.]/;
			if(regSpecial.test(pass)){
				hasSpecial = true;
			}
			
			let level = hasNum+hasLetter+hasSpecial;
			if(level==1){
				$("PassInfo").style = "display:block";
				$("PassInfo").innerHTML = "安全强度适低，可以使用三种以上的组合来提高安全强度";
				count++;
			}else if(level==2){
				$("PassInfo").style = "display:block";
				$("PassInfo").innerHTML = "安全强度适中";
				count++;
			}else if(level==3){
				$("PassInfo").style = "display:block";
				$("PassInfo").innerHTML = "安全强度适高";
				count++;
			}
		}else{
			$("PassInfo").style = "display:block";
			$("PassInfo").innerHTML = "长度只能在6-20个字符";
		}
	}
}





