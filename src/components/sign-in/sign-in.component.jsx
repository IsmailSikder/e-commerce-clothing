import './sign-in.style.scss'
import React from 'react'
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../custome-button/custom-button.component'
import { signInwithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component{

    constructor() {
        super()
        this.state ={
            email:'',
            password :''
        }
    }

    // handleEmail = (event)=>{
    //     this.setState({email : event.target.value})
    // }
    // handlePassword = (event)=>{
    //     this.setState({password : event.target.value})
    // }

    handleChange =event =>{
        const {name,value} = event.target
        console.log(event)
        this.setState({[name]:value})
    }
    handleSubmit =event=>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }

    render(){

        console.log(this.state.email)
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput  
                        name='email' 
                        type='email' 
                        label='Email'
                        handleChange={this.handleChange}
                        value = {this.state.email}
                        required
                    />
                    <FormInput
                        name='password' 
                        type='password' 
                        label='Password'
                        handleChange={this.handleChange}
                        value = {this.state.password}
                        required
                    />
                    <CustomButton >SIGN IN</CustomButton>
                    <CustomButton onClick={signInwithGoogle} isGoogleSignIn='true'>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </form>

            </div>
        )

    }
}

export {SignIn}