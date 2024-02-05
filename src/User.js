import {useState} from "react";

function User(){

    const [username , setUserName] = useState("");
    const [userpass , setUserPass] = useState("");
    const [usermail , setUserMail] = useState("");
    const [btn , setbtn] = useState(false)

    function getUserData(e){
            console.log(username , userpass , usermail);
            e.preventDefault();
    }

    function printData(){
        setbtn(true);
    }

   return(

        <div className="User">
            <h1>Sign up form</h1>
            <br></br>

            <form onSubmit={getUserData}>
                
                <input type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}></input>
                <br/> <br/>
                <input type="password" placeholder="Enter password" onChange={(e)=>setUserPass(e.target.value)}></input>
                <br/> <br/>
                <input type="email" placeholder="Enter email Id" onChange={(e)=>setUserMail(e.target.value)}></input>
                <br/> <br/>
                <button type="submit" onClick={printData}>Sign up</button>
                <br/> <br/>

                { btn ? 
            <h1>{username},{usermail},{userpass}</h1>
            : null
            }
                
                

            </form>
        </div>
    )
}

export default User ;