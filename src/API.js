import React, { useState, useEffect, useCallback } from 'react';
import Details from './Details';
import Contact from './Contact';
import './API.scss';

function API() {
  const [userNames, setUserNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
   const data = JSON.parse(window.localStorage.getItem('session'));
   console.log("done1",data)
    setIsLoading(true);
    setError(null);

       const loadedUsers = [];

     for (const key in data){
        loadedUsers.push({
          id: key,
          fullname: data[key].fullname,
          phone: data[key].phone,
          email: data[key].email,
          comment: data[key].comment,
        });
     }

    
       setUserNames(loadedUsers);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  function SaveDataToLocalStorage(data)
  {
      var a = [];
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(window.localStorage.getItem('session')) || [];
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(data);
      // Alert the array value
      console.log('done',a);  // Should be something like [Object array]
      // Re-serialize the array back into a string and store it in localStorage
      window.localStorage.setItem('session', JSON.stringify(a));
  }

   const addUserHandler = async (user) =>{
    SaveDataToLocalStorage(user)
  
    
    const response = await fetch('https://react-http-req-b0fcd-default-rtdb.firebaseio.com/movies.json',{
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
    console.log(data);
  };

  let content = <p>Found no Users.</p>;

  if (userNames.length > 0) {
    content = <Details userNames={userNames} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    
    <React.Fragment>
      
      <section>
        <Contact onAddUser={addUserHandler} />
      </section>
      <section className="sec">
        <button onClick={fetchUsersHandler}>Fetch User-Lists</button>
      </section>
      <section className="sec">{content}</section>
    </React.Fragment>
  );
}
export default API;