function bbsCheck(){
    //1)작성자 2글자 이상 입력
    var writer=document.getElementById("wname").value;
    
	
	//2)제목 2글자 이상 입력
    alert(document.getElementById("subject").value);
	
	//3)내용 2글자 이상 입력
    alert(document.getElementById("content").value);
	
	//4)비밀번호 4글자 이상이면서, 숫자형 기호만 입력
    alert(document.getElementById("passwd").value);

    return true; //onsubmit이벤트에서 서버로 전송

}//bbsCheck() end