import { async } from '@firebase/util';
import React from 'react';
import './login.css'
import './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



class Login extends React.Component{
    state = {
    email:"",
    password:''
    }
    handleChange = (e) =>{
        const { name, value} = e.target;
        this.setState({[name]:value})
    }

    handleSubmit = ()=>{
        console.log("asd")
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.email,this.state.password)
        .then((userCredential) => {
            
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
          this.setState({email:'',password:''})
          alert("User Is Registerd")
          
    }
    render(){
        return(
            <div className='Maindiv div1'>
                <h1>Sign Up</h1>
                <input onChange={this.handleChange} className='input' type="text" placeholder='Email' name="email" id="" />
                <input onChange={this.handleChange} className='input' type="Password" placeholder='Password' name="password" id="" />

                <button onClick={this.handleSubmit} className='btn1'>Sign Up</button>
                <h5>Already have an account? <span>Log In</span></h5>
                
            </div>
        )
    }
}

export default Login