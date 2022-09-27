import React from "react";
import './sign-in.styles.scss'
import { auth, signInWithGoogle } from "../../firebase/firebase.utiles";


import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

    const {email, password} = this.state;

    try {
        auth.signInWithEmailAndPassword(email, password)
        this.setState({ email: '', password: ''})
    }
    catch(error){
        console.log(error)
    }

        
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an acount</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name="email" 
                        type="email"
                        label="email" 
                        value={this.state.email} 
                        required />
                    <FormInput 
                    name="password"
                    type="password"
                    handleChange ={this.handleChange} 
                    value={this.state.password} 
                    label='password'
                    required />
                    <div className="buttons">
                        <CustomButton onChange={this.handleChange} type="submit">sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            sign in with google</CustomButton>

                    </div>
                    
                </form>

            </div>
        )
    }
}

export default SignIn;