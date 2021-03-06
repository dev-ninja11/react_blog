import React,{useState} from 'react'
import{Button,Form,FormGroup,Label,Input}
from 'reactstrap'
import UserApi from '../API/UserApi'



const Forms = () => {
   //UserApi.new user

//initialize a new state, and method to set it toa new state
    const [firstName,setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

//Functions handles when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading when submitting
        const newPerson = { firstName, lastName, email, password }
        console.log(newPerson)
        
        UserApi.newUser({ newPerson })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            
    
    
    
            //sets the input back to any empty string
             setFirstName('')
             setLastName('')
             setEmail('')
             setPassword('')
    }
    
    return (
        
        <Form className='login-form' onSubmit={handleSubmit}>
            <h1>
                <span className='text-center'>Add User</span>
            </h1>


            <FormGroup>
                <Label>First Name</Label>
                <Input 
                    type="text" 
                    placeholder="First Name..."
                    name="firstName"
                    id="firstName"
                    //sets the value to the firstName
                    value={firstName}
                    //as user type, the input changes its value
                    onChange={(e) => setFirstName(e.target.value)}
                ></Input>
            </FormGroup>

            <FormGroup>
                <Label>Last Name</Label>
                <Input 
                    type="text" 
                    placeholder="Last Name..."
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                ></Input>
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input 
                    type="email" 
                    placeholder="Email..."
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                ></Input>
            </FormGroup>

            <FormGroup>
                <Label>Password</Label>
                <Input 
                    type="password"
                    placeholder="Password..." 
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Input>
            </FormGroup>

            <Button 
                 type='submit' className='btn-secondary btn-lg btn-block '>Submit
            </Button>
                
        </Form>
        
    )
}

export default Forms