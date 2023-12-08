import React, {useState} from 'react';
import axios from 'axios';

const Auth = () => {

    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    let [output, setOutput] = useState("")

    let [zuku, setZuku] = useState("")
   
    let {name, email, password, confirmPassword} = user;
      async function signup(e){
            e.preventDefault();
            if(password !== confirmPassword){
                alert("Password not matched")
                return
            }
            try{
                let response =  await axios.post("https://instagram-express-app.vercel.app/api/auth/signup/", 
                {name:name, email:email, password:password} )
                console.log(response.data)
                setOutput(response.data)
                setUser({name:"", email:"", password:"", confirmPassword:""})
            }
            catch(error){
                console.log(error.response.data.message)
            }
     }

     function zukuMesaage(){
            axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                headers: {
                    authorization: `Bearer ${output.data.token}` 
                }
            })
            .then(response =>  setZuku(response.data.data.message))
            .catch(error => console.log(error.response.data.message))
     }

    return(
        <div>
             <form onSubmit={signup}>
                <input type="text" placeholder="Enter ur Name" 
                onChange={(e) => setUser({...user, name:e.target.value})}
                value= {user.name}
                />
                <input type="email" placeholder="Enter ur Email" 
                onChange={(e) => setUser({...user, email:e.target.value})}
                value= {user.email}
                />
                <input type="password" placeholder="Enter ur Password" 
                onChange={(e) => setUser({...user, password:e.target.value})}
                />
                <input type="password" placeholder="Enter ur Password Again" 
                onChange={(e) => setUser({...user, confirmPassword:e.target.value})}
                />
                <button type="submit">Sign Up</button>
             </form>
             {
                    output && 
                    <div>
                        <h1>{output.message}</h1>
                        <h1>{output.data.name}</h1>
                        <h1>{output.data.token}</h1>
                    </div>
             }

             <button onClick={zukuMesaage}>Get Zuku Jokes</button>
             {
                    zuku && <h1>{zuku}</h1>
             }
        </div>
    )
}

export default Auth;





// axios.post("https://instagram-express-app.vercel.app/api/auth/signup/", 
//{
//     name: "Rahul",
//     email: "",
//     password: ""
// },
//{
//     headers: {},
//     params: {}
// }
// )