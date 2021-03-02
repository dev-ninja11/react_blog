import React,{useState,useEffect} from 'react'
//import {Link,useParams} from 'react-router-dom'
//import PostApi from '../API/PostApi'

const CategoryDetail = () => {
    const [name,setName] = useState('mario')


    const handleClick = () => {
        setName('luigi')
        
    }
    
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button type="button" onClick={handleClick} className="btn btn-secondary">Click Me</button>
            {name}
        </div>
    )

    
    
}

export default CategoryDetail