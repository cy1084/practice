/**
 * 
 */
function validation(){
	const id = document.querySelector('#id');
	const pw = document.querySelector('#pw');
	if(id.value.trim().length<3){
		alert('아이디는 3글자 이상입니다.');
		id.value = '';
		id.focus();
		return false;
	}
	if(pw.value.trim().length<1){ 
		alert('비밀번호는 1글자 이상입니다.');
		pw.value = '';
		pw.focus();
		return false;
	}
	return true;
}