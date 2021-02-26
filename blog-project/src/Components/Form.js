import React,{useState,useEffect} from 'react'



const Form = () => {

    //initialize a new state, and method to set it toa new state
    const [firstName,setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    

    const [person,setPerson]= useState([])//creates a new person array when for  is submitted

    //functions handles when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();//prevents the webpage from reloading when submitting
        
        //checks to see if all fields have been filled out,then a new person is created
        if(firstName &&lastName && email && password){
            const newPerson={firstName,lastName,email,password}
            setPerson((person) => {
                return[...person,newPerson]
            })

            //sets the input back to an empty string after form is submitted
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            
        }else{
       alert("Please Complete the form")
        }
    }
    
    return (
<div onSubmit={handleSubmit}>
<div className="title">Sign IN</div>
<div className="col-auto">
     <form className="row g-3">
  
        <div className="col-auto">
        <label html="firstName" className= "label"></label>
        <input type="text" 
               placeholder="First Name..."
               name="firstName"
               id="firstName"
               className="form-control"
               value={firstName}//sets the value to the firstName
               onChange={(e) => setFirstName(e.target.value)}//as user type, the input changes its value
            />


        <div className="col-auto">
        <label html="lastName" className="label"></label>
        <input type="text" 
               placeholder="Last Name..."
               name="lastName"
               id="lastName"
               className="form-control"
               value={lastName}//sets the value to the firstName
               onChange={(e) => setLastName(e.target.value)}
               />
        </div>

        <div className="col-auto">
        <label html="email" className="label"></label>
        <input type="email" 
               placeholder="Email..."
               name="email"
               id="email"
               className="form-control"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
        </div>


        <div className="col-auto">
         <label html="password" className='label'></label>
        <input type="password"
               placeholder="Password..." 
               name="password"
               id="password"
               className="form-control"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               />
        </div>
        
        <button type="submit" class="btn btn-secondary">Submit</button>

        </div>

        </form>
        </div>  
    </div>   
    )
}

export default Form
