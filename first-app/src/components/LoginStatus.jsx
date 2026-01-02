function LoginStatus(){
    const login=false;
    return(
        <div>
            <h2>{login?"welcome user":"please login"}</h2>
            <button>{login?"Logout":"Login"}</button>
        </div>
    )
}
export default LoginStatus;

   