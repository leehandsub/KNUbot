package DB;

public class DTO {
    private String req;
    private String res;

    public String getReq() {
        return req;
    }

    public void setReq(String req) {
        this.req = req;
    }

    public String getRes() {
        return res;
    }

    public void setRes(String res) {
        this.res = res;
    }

    @Override
    public String toString(){
        return "RETURN : [ res : " + res + ", req : " + req +" ]";
    }
}
