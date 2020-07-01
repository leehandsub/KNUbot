<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ page import="DB.DTO" %>
<%@ page import="DB.DAO" %>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='chatbot.css?after'>
    <title>Chatbot</title>

    <script>
        function goReplace() {
            window.open('about:blank').location.href = "http://cse.knu.ac.kr/main/index.html";
        }
    </script>
</head>

<body class="center">
<div class="outside">
    <div>
        <div class="top">
            <img src="./짱구.gif" id="img" width="80px"height="50px">
            <h3>고급웹프로그래밍 챗봇</h3>
            <img src="./짱구.gif" id="img" width="80px"height="50px">
            <button id="menu"><img src="./menu.jpg" width="30px" height="30px"></button>
        </div>
    </div>
    <hr>
    <div class="space">
        <div class="chat_space">

            <%
                DAO dao = new DAO();

                String question = "default";
                String answer = "default";

                if(request.getParameter("학점") != null) {
                    question = "학점";
                }
                else if(request.getParameter("계절학기") != null) {
                    question = "계절학기";
                }
                else if(request.getParameter("졸업") != null) {
                    question = "졸업";
                }
                else if(request.getParameter("튜터공고") != null) {
                    question = "튜터공고";
                }
                else if(request.getParameter("세미나") != null) {
                    question = "세미나";
                }
                else if(request.getParameter("마일리지") != null) {
                    question = "마일리지";
                }


                ArrayList<DTO> list = dao.List();

                for (DTO dto : list) {
                    if((dto.getReq()).equals(question)){
                        answer = dto.getRes();       //답으로 전달

                        break;
                    }
                }
            %>

            <div id="user_1" class="user_text">
                <p>질문</p><%=question%>
            </div>

            <div id="bot_1" class="bot_text">
                <p>답</p><%=answer%>
            </div>

        </div>
        <div class="bottom">
            <div>
                <table>
                    <tr>
                        <td><image src="./input_left.jpg" id="input_left"></image></td>
                        <td><input type="text" placeholder="궁금한 사항을 입력해주세요." id="textfield"></td>
                        <td><button id="enter_btn"><image src="./enter.jpg" id="enter_image"></image></button></td>
                    </tr>
                </table>
                <div class="question">
                    <form action="response.jsp" method="get">
                        <table>
                            <tr>
                                <td><input  type="submit" value="학점" name="학점" ></input></td>
                                <td><input type="submit" value="졸업" name="졸업" ></input></td>
                                <td><input type="submit" value="세미나" name="세미나"></input></td>
                            </tr>
                            <tr>
                                <td><input type="submit" value="튜터공고" name="튜터공고"></input></td>
                                <td><input type="submit" value="계절학기" name="계절학기"></input></td>
                                <td><input type="submit" value="마일리지" name="마일리지"></input></td>
                            </tr>
                            <tr>
                                <td><input type="button" id="학교홈페이지" value="학교홈페이지" onclick="goReplace()"></input></td>
                                <td><input type="button" id = "시간표" value="시간표"></input></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>

</html>