import { useParams } from "react-router";


const BlogDetails = () => {

    const {id} = useParams
    return ( 
        <div className="blog-details">
        <h2>Blog Details- {id}</h2>
        
        </div>
     );
}
 
export default BlogDetails;