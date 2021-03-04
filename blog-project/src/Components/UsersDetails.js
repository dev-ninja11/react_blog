
const UsersDetails = ({users,title}) => {
    
    return (  
        <div className="User">
            <h2>{title}</h2>
        
        {users.hits &&
          users.hits.map(item => (
              <div className="users" key={item.id}>
                  
                  <ul class="list-group">
                      <li class="list-group-item">{item.name}</li>
                        <li class="list-group-item"></li>

  
</ul>
                  <p></p>  
              </div>  
          ))}
      
        </div>
    );
}
 
export default UsersDetails;


