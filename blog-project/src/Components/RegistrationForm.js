import React from 'react'


const RegistrationForm = () => {
    return (
        <div className= "Form">
            <div className="title">Log In</div>
            <div className='inputs'>
            <form action="">
               
                <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name..."
                    />
                
                
                <input 
                    type="text"
                    name="lasttName"
                    placeholder="Last Name..."
                    />

                <input 
                    type="text"
                    name="email"
                    placeholder="Email..."
                    />

                <input 
                    type="password"
                    name="password"
                    placeholder="Password..."
                    />

                <input 
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password..."
                    />

                <input 
                    type="submit"
                    id="submit"
                    
                    />

            </form>
            </div>
        </div>
    )
}

export default RegistrationForm
