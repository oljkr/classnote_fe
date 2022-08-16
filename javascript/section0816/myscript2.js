/*myscript2.js*/

function getID(){
    //alert("getID");

    //<input type="text" name="uid" id="uid">에 접근해 보자

    //1)id 사용
    //<form>의 컨트롤 요소 접근시 id사용(추천)
    //alert(document.getElementById("uid")); //[object HTMLInputElement]
    //alert(document.getElementById("uid").value);
    
    //2)tag name사용
    //tag name접근
    //본문에서 <input> 태그들 접근, html파일에서 input이 3개가 있음. 이걸 순서대로 접근가능.
    //alert(document.getElementsByTagName("input")); //[object HTMLCollection]
    //<input>태그들 중에서 0번째 접근
    // alert(document.getElementsByTagName("input")[0]); //[object HTMLInputElement]
    // alert(document.getElementsByTagName("input")[0].value); //실제값

    //3)name사용
    //<form>의 컨트롤 요소 접근시 name 사용
    //alert(document.memfrm.uid.value); //비추
    //alert(document.getElementsByName("uid")[0].value);//[object NodeList]

    //4)class사용
    //스타일 접근
    alert(document.getElementsByClassName("line")); //[object HTMLCollection]

}

function setID(){
    //<input type="text" name="uid" id="uid">에 값 대입하기
    let str="itwill";

    //1)id접근(추천)
    //document.getElementById("uid").value=str;
    //2)tag name접근
    //document.getElementsByTagName("input")[0].value=str;
    //3)name접근
    document.getElementsByName("uid")[0].value=str;
}