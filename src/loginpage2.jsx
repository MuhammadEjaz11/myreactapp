import { async } from '@firebase/util';
import React from 'react';
import './login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




class Signup extends React.Component {
    state = {
        email: "",
        password: ''
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

                alert("user Logged In")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("user Invalid")
                console.log(error.message,)
            });
    }

    render() {
        return (
            <div className='Maindiv div1'>
                <h1>Log In</h1>
                <input onChange={this.handleChange} autoComplete="off" className='input' type="text" placeholder='Email' name="email" id="email" />
                <input onChange={this.handleChange} autoComplete="off" className='input' type="Password" placeholder='Password' name="password" id="password" />

                <button onClick={this.handleSubmit} className='btn1'> <Link to='/todos'> Log In </Link></button>
                <h5>Create an account? <Link to='/'> <span>Sign Up</span></Link></h5>

            </div>
        )
    }
}

export default Signup