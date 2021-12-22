$(function(){
    $('.menu').click(function(){
        $('#gnb').toggleClass('on');
    });
    $('.search').click(function(){
        $('#search').toggleClass('on');
    });
    $('.cart').click(function(){
        window.open(url="https://www.crown.co.kr/product/pList.asp?catecode=1478063272");

    
    });
});

//텝메뉴
$(document).ready(function(){
	   $(".tabArea .tab li a").on("click", function(){ 
		 // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1] 
		 const num = $(".tabArea .tab li a").index($(this)); 
		 // 기존에 적용되어 있는 on class 삭제 
		 $(".tabArea .tab li").removeClass("on"); 
		 $(".tabArea .tabBox").removeClass("on"); 
		 
		 // 다음 요소 클릭시 on class 추가 
		 $('.tabArea .tab li:eq(' + num + ')').addClass("on"); 
		 $('.tabArea .tabBox:eq(' + num + ')').addClass("on"); 
	   }); 
	 });


//이메일 입력방식
$('#selectEmail').change(function(){
		$("#selectEmail option:selected").each(function () {
		  if($(this).val()== '1'){ //직접입력일 경우 
			$("#str_email02").val(''); //값 초기화 
			$("#str_email02").attr("disabled",false); //활성화 
			}else{ //직접입력이 아닐경우 
			$("#str_email02").val($(this).text()); //선택값 입력 
			$("#str_email02").attr("disabled",true); //비활성화 
			} 
		  }); 
	});


//폼체크
function formCheck(){
	var form = document.form;
	//var reg_id = /(?=.*[a-z])(?=.*[0-9])/;//문자와수치만사용시
	var reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*/;
	var reg_email2 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
	var reg_num = /^[0-9]\d{3,4}/;
	var reg_num2 = /\d{4}/;

//약관동의
	if(!form.agree1.checked){
		alert("약관에 동의하세요.");
		form.agree1.focus();
		return false;
	}
	
	//성명검사
	if(!form.userName.value){
		alert("성명을 입력하세요.");
		form.userName.focus();
		return false;
	}
	
	//주소검사
	if(!form.address.value){
		alert("상세주소를 입력하세요.");
		form.address.focus();
		return false;
	}

	//연락처검사
	if(!form.hp1.value){
		alert("연락처를 입력하세요.");
		form.hp.focus();
		return false;
	}

	if(!reg_num.test(form.hp2.value)){
		alert("연락처형식에 맞게 입력하세요.");
		form.hp2.focus();
		return false;
	}

	if(!reg_num.test(form.hp3.value)){
		alert("연락처를 연락처형식에 맞게 입력하세요.");
		form.hp3.focus();
		return false;
	}
	
	//이메일검사
	if(!form.str_email01.value){
		alert("이메일을 입력하세요.");
		form.str_email01.focus();
		return false;
	}

	if(!form.str_email02.value){
		alert("이메일형식에 맞게 입력하세요.");
		form.str_email02.focus();
		return false;
	}

	if(!reg_email.test(form.str_email01.value)){
		alert("이메일형식에 맞게 입력하세요.");
		form.str_email01.focus();
		return false;
	}

	if(!reg_email2.test(form.str_email02.value)){
		alert("이메일형식에 맞게 입력하세요.");
		form.str_email02.focus();
		return false;
	}
	
	//기타입력란 검사
	if(!form.prdName.value){
		alert("제품명을 입력하세요.");
		form.prdName.focus();
		return false;
	}
	
	if(!form.prdDate.value){
		alert("제조일자를 입력하세요.");
		form.prdDate.focus();
		return false;
	}

	if(!form.prdPrice.value){
		alert("가격/중량을 입력하세요.");
		form.prdPrice.focus();
		return false;
	}

	//제목검사
	if(!form.cstit.value){
		alert("제목을 입력하세요.");
		form.cstit.focus();
		return false;
	}

	//내용검사
	if(!form.content.value){
		alert("내용을 입력하세요.");
		form.content.focus();
		return false;
	}

	var res = confirm('문의하시겠습니까?');
	
	if(res==true){
	  form.submit();
	}else{
	   location.href="cs.php";
	}
	return false;
}

	
//FAQ
	var acc = document.getElementsByClassName("accordion");

	for (var i = 0; i < acc.length; i++) {

		  acc[i].onclick = function() {	 
             // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리게)
			 for (var j = 0 ; j<acc.length; j++){
                // 버튼 상태에 입혀진 active 라는 클래스를 지운다.
				 acc[j].classList.remove("active");
                // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
				 if (this!==acc[j]) {
					 acc[j].nextElementSibling.style.maxHeight = null;
				 }
			 }

			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
				this.classList.remove("active");
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
	 
		  }
	}