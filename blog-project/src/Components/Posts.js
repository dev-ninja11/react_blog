import React,{useState,useEffect} from 'react'
import axios from '../API/BaseApi'

    
const Posts = () => {
        
    const [data, setData] = useState(null)
    
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data)
            })
         
    }, [])
        return (
            <div>
                
            </div>
        )
    }
    
    export default Posts
    