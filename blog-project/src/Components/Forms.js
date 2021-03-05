import React,{useState,useEffect} from 'react'
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

//creates a new person array when for  is submitted
    const [person,setPerson]= useState([])

//Functions handles when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading when submitting
        const people = { firstName, lastName, email, password }
        console.log(people)
        
        //userApi
//checks to see if all fields have been filled out,then a new person is created
//         if(firstName &&lastName && email && password){
//             const newPerson={firstName,lastName,email,password}
//             setPerson((person) => {
//                 return [...person, newPerson]
                
//             })

// //sets the input back to an empty string after form is submitted
             setFirstName('')
            setLastName('')
             setEmail('')
             setPassword('')
            
//         }else{
//             alert("Please Complete the form")
//         }
      
     }
    

    return (
        <div onSubmit={handleSubmit}>
        <Form className='login-form'>
            <h1>
                <span className='text-center'>Add A New User</span>
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
                 type='submit' className='btn-secondary btn-lg btn-block '>Add User
            </Button>
        </Form>
        </div>
    )
}

export default Forms