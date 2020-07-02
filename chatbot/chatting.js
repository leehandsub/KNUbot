const Chat = (function(){
    const myName = "blue";
 
    // init 함수
    function init() {
        // enter 키 이벤트
        $(document).on('keydown', '#textfield', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
 
                // 메시지 전송
                sendMessage(message);
                // 입력창 clear
                clearTextarea();
            }
        });
    }
 
    // 메세지 태그 생성
    function createMessageTag(LR_className, message) {
        // 형식 가져오기
        let chatLi = $('div.chat_space.format ul li').clone();
        
        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find('.message span').text(message);

        return chatLi;
    }
 
    // 메세지 태그 append
    function appendMessageTag(LR_className, message) {
        const chatLi = createMessageTag(LR_className, message);
 
        $('div.chat_space:not(.format) ul').append(chatLi);
 
        // 스크롤바 아래 고정
        $('div.chat_space').scrollTop($('div.chat_space')[0].scrollHeight);

        answerMsg(message);
    }
    
    function answerMsg(message) {
        let chatLeft = $('div.chat_space.format ul li').clone();
        chatLeft.addClass("left");
        var str;
        chatLeft.find('.message').css({
	    	   "word-break" : "break-all",
	    	   "max-width": "100%",
	    	   padding: "10px",
	    	   "margin-left": "-30px",
	    	   "border-radius" : "10px",
	    	   "text-align": "left",
	    	   "background-color": "#F5F5F5",
	    	   color: "black"
	       });
    	if(message.indexOf("학점") != -1) {
       	 // 형식 가져오기
           str = "성적은 4.3만점이며 A+부터 D-까지 차등적으로 지급";

    	}
    	else if(message.indexOf("졸업") != -1){
    		str = " abeek 112, 토익 700점 이상, 현장실습, 지도교수상담 등의 조건을 만족해야하며 총 졸업학점은 150이다. 자세한 내용은 홈페이지 참조.";
    	}
    	else if(message.indexOf("세미나") != -1) {
    		str = "세미나 일정은 학부 일정에 따라 상이하며 자세한 내용은 홈페이지 공지사항 참조.";
    	}
    	else if(message.indexOf("튜터공고") != -1) {
    		str = "실습과목에 한하여 튜터를 모집하며 모집 공고는 학기시작 전 학부 홈페이지 참조.";
    	}
    	else if(message.indexOf("계절학기") != -1) {
    		str = "보통 중간고사 전 후에 계절학기 수강신청을 이루며 수강료 납부, 폐강과목 공지, 시간표 등은 학교홈페이지 : knu.ac.kr참조.";
    	}
    	else if(message.indexOf("마일리지") != -1) {
    		str = "학부 프로그램등을 참가하여 마일리지 점수를 적립, 추후 마일리지 점수를 기준으로 차등적 장학금 환산 후 지급. 자세한 마일리지 프로그램 등은 학부 홈페이지 참조 요망.";
    	}
    	else{
    		str = "업데이트를 기다려주세요~~"
    	}
        
        // 값 채우기
        chatLeft.find('.message span').text(str);
	      
        $('div.chat_space:not(.format) ul').append(chatLeft);
    }
 
    // 메세지 전송
    function sendMessage(message) {
        // 서버에 전송하는 코드로 후에 대체
        const data = {
            "message"        : message
        };
        
 
        // 통신하는 기능이 없으므로 여기서 receive
        resive(data);
    }
 
    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $('#textfield').val('');
    }
 
    // 메세지 수신
    function resive(data) {
     //   const LR = (data.senderName != myName)? "left" : "right";
        appendMessageTag("right", data.message);
    }
 
    return {
        'init': init
    };
})();


 
$(function(){
    Chat.init();
});

