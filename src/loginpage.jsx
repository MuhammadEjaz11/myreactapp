import { async } from '@firebase/util';
import React from 'react';
import './login.css'
import './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Signup from './loginpage2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



class Login extends React.Component{
    state = {
    email:"",
    password:''
    }
    handleChange = (e) =>{
        const { name, value} = e.target;
        this.setState({[name]:value})
        console.log(this.state.email,this.state.password)
    }

    handleSubmit = ()=>{
        console.log("asd")
        const auth = getAuth();
        if(this.state.email && this.state.password){

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
        }else{
            alert("Please Enter Email")
        }
          
    }
    render(){
        return(
            <div className='Maindiv div1'>
                <h1>Sign Up</h1>
                <input onChange={this.handleChange} className='input' type="text" placeholder='Email' name="email" id="" />
                <input onChange={this.handleChange} className='input' type="Password" placeholder='Password' name="password" id="" />

                <button onClick={this.handleSubmit} className='btn1'>Sign Up</button>
                <h5>Already have an account? <span> <Link to='/signup'> Log In</Link></span> </h5>
                
            </div>
        )
    }
}

export default Login