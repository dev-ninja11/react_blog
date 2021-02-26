import React,{useState,useEffect} from 'react'



const RegistrationForm = () => {
    //
    const [firstName,setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [confirmPassword,setConfirmPassword]= useState('')

    const [person,setPerson]= useState([])//creates a new person array when for  is submitted

    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading
        
        if(firstName &&lastName && email && password && confirmPassword){
            const newPerson={firstName,lastName,email,password,confirmPassword}
            setPerson((person) => {
                return[...person,newPerson]
            })
            //sets the input back to an empty string after form is submitted
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')

            
            console.log(newPerson)
        }else{
        console.log(" empty")
        }
    }
    


    return (
        <div className= "Form" onSubmit={handleSubmit}>
            <div className="title">Log In</div>
            <div className='input'>
            <form action="">
               
                <div className='form-control'>
                <label htmlFor="firstName">First Name:</label>
                <input 
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}//sets the value to the firstName
                    onChange={(e) => setFirstName(e.target.value)}//as user changes input it sets in a new value
                    
                    />
                </div>

                <div className='form-control'>
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text"
                    name="lastName"
                    id="lastName" 
                    value={lastName}  
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className='form-control'>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='form-control'>
                <label htmlFor="password">Password:</label>  
                <input 
                    type="text"
                    name="password"
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='form-control'>
                <label htmlFor="confirmPassword">Password:</label>
                <input 
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button>Submit</button>

               

            </form>
            </div>
        </div>
    )
}

export default RegistrationForm
