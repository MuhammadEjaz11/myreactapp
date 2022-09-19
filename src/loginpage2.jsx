import { async } from '@firebase/util';
import React from 'react';
import './login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todos from './todo';





class Signup extends React.Component {
    state = {
        email: "",
        password: '',
        user:null
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(this.state.email,this.state.password)
    }
    handleSubmit = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                console.log(userCredential,"userCredential")
                const user = userCredential.user;
                const localuser = localStorage.setItem(user, "user")

                
                console.log(userCredential.user.uid)
                this.setState({user:userCredential.user.uid})
                
            })
            .then(
                alert("user Logged In")
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("user Invalid")
                console.log(error.message,)
            });
    }
    signout = ()=>{
        this.setState({user:null, email:"", password:""})
    }

    render() {
        return (
            this.state.user ?<Todos name={this.signout}/>: <div className='Maindiv div1'>
                <h1>Log In</h1>
                <input onChange={this.handleChange} autoComplete="off" className='input' type="text" placeholder='Email' name="email" id="email" />
                <input onChange={this.handleChange} autoComplete="off" className='input' type="Password" placeholder='Password' name="password" id="password" />

                <button onClick={this.handleSubmit} className='btn1'>  Log In </button>
                <h5>Create an account? <Link to='/'> <span>Sign Up</span></Link></h5>

            </div>
        )
    }
}

export default Signup