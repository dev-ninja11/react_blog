
const UsersDetails = ({users,title}) => {
    
    return (  
        <div className="User">
            <h2>{title}</h2>
        
        {users.hits &&
          users.hits.map(item => (
              <div className="users" key={item.id}>
                  
                  <p>{item.name}</p>
                  
              </div>  
          ))}
      
        </div>
    );
}
 
export default UsersDetails;


