import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'


//stops the fecth
    const abortCont = new AbortController();
    const[blogs,setBlogs]=useState(null)

    //while the browser is fetching to the server
    const [isPending,setIsPending] = useState(true)

    //setting error to a state
    const[error,setError]=useState(null)

     

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error("Cant fetch data for that resource")

            }
            return res.json();
        })
        .then((data) =>{
            //console.log(data)
            setBlogs(data)//passing new data
            setIsPending(false)
            setError(null)
        })
        .catch((err => {
            setIsPending(false)
            setError(err.message)
        }))
        return() => console.log('cleanup')
        
    },[]);
    


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}

        </div>
    )
}

export default About;
