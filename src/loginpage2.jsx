import { async } from '@firebase/util';
import React from 'react';
import './login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




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
                const localuser = localStorage.setItem("user")

                alert("user Logged In")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("User is Invalid")
                console.log(error.message,)
            });
    }

    render() {
        return (
            <div className='Maindiv div1'>
                <h1>Log In</h1>
                <input onChange={this.handleChange} autoComplete="off" className='input' type="text" placeholder='Email' name="email" id="" />
                <input onChange={this.handleChange} autoComplete="off" className='input' type="Password" placeholder='Password' name="password" id="" />

                <button onClick={this.handleSubmit} className='btn1'>Log In</button>
                <h5>Create an account? <span>Sign Up</span></h5>

            </div>
        )
    }
}

export default Signup