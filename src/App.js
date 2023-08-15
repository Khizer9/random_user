import React, {useEffect, useState} from 'react';
import './App.css';

function  App() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    async function getUsers(){
      const response = await fetch("https://randomuser.me/api?results=5")
      const data = await response.json()
      setuser(data.results)
    }
  getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Random Users</h1>
      <ul className='userContent'>
        {user.map((user, index) => (
          <>
          <div className='container'>
            <img className='userImage' src={user.picture.thumbnail}/>
            
          <div className='userData'>
          <li className='userList' key={index}>
            <p className='userName'>{user.name.first} {user.name.last}</p>
            <p>{user.email}</p>
          </li>
          </div>
          </div>
          </>
        ))}
      </ul>
    </div>

  );
}

export default App;
