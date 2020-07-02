package DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class DAO {

    // db접속
    public Connection connectDB() {

        Connection connect = null; // db접속 객체

        try {
            // mysql jdbc driver 로딩
            Class.forName("com.mysql.jdbc.Driver");

            String url = "jdbc:mysql://localhost:5877/chatbot";
            String id = "root";
            String passwd = "dlwjdduf1!";

            connect = DriverManager.getConnection(url,id,passwd);
            //System.out.println("db접속 성공");
        } catch (Exception e) {
            // db관련작업은 반드시 익셉션 처리
            //System.out.println("db접속 실패");
            e.printStackTrace();
        }

        return connect;
    }

    //리스트
    public ArrayList<DTO> List() {

        ArrayList<DTO> list = new ArrayList<DTO>();
        Connection conn = null; // DB접속 객체
        PreparedStatement pstmt = null; // SQL실행객체
        ResultSet rs = null; // 결과셋 처리 객체

        try {
            conn = connectDB(); // db연결 키
            String sql = "select * from question";
            pstmt = conn.prepareStatement(sql); // sql을 실행시키는 객체 만들어짐
            rs = pstmt.executeQuery(); // 실행 후 결과 값이 rs에 넘어옴

            while (rs.next()) {                    //결과셋.next(); 다음 레코드가 있으면 true

                DTO dto = new DTO();
                dto.setReq(rs.getString("req"));
                dto.setRes(rs.getString("res"));

                list.add(dto);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try{
                if(rs!=null){rs.close();}

            }catch(Exception e2){
                e2.printStackTrace();
            }

            try{
                if(pstmt!=null){pstmt.close();}

            }catch(Exception e2){
                e2.printStackTrace();
            }

            try{
                if(conn!=null){conn.close();}

            }catch(Exception e2){
                e2.printStackTrace();
            }

        }
        return list;
    }

}