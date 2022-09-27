import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfilDocument} from '../../firebase/firebase.utiles'
import './sign-up.syles.scss'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword : ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword)
        {
            alert("password don't match")
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfilDocument(user, displayName)
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword : ''
            })
        }
        catch(error)
        {
            console.error(error)
        }
    }

    handleChange = (event) => {
        
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name= 'displayName'
                        value = {displayName}
                        handleChange= {this.handleChange}
                        label='Display Name'
                        required></FormInput>
                    <FormInput
                        type = 'email'
                        name= 'email'
                        value = {email}
                        handleChange= {this.handleChange}
                        label='email'
                        required></FormInput>
                    
                    <FormInput
                        type = 'password'
                        name= 'password'
                        value = {password}
                        handleChange= {this.handleChange}
                        label='password'
                        required></FormInput>

                        <FormInput
                        type = 'password'
                        name= 'confirmPassword'
                        value = {confirmPassword}
                        handleChange= {this.handleChange}
                        label='confirm password'
                        required></FormInput>
                    

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;