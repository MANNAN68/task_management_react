class SessionHelper{
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }

    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
    removeSessions=()=>{
        localStorage.clear();
        window.location.href="/login"
    }

    setEmail(Email){
        localStorage.setItem("Email",Email)
    }
    getEmail(){
        return localStorage.getItem("Email")
    }

    setOTP(OTP){
        localStorage.setItem("OTP",OTP)
    }
    getOTP(){
        return localStorage.getItem("OTP")
    }





}
export const {setEmail,getEmail,setOTP,getOTP,setToken,getToken,setUserDetails,getUserDetails,removeSessions}=new SessionHelper();