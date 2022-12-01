import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';


function App() {


  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-[40vmin] pointer-events-none" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          React + TanStack Query Tips
        </h1>
        <a
          className="text-brue-600"
          href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack Query
        </a>
        <Users />
      </header>
    </div>
  );
}

export default App;


type User = {
  id: number,
  name: string
}
const Users = () =>{
  const [user, setUsers] = useState<User[]>([]);

  useEffect(()=>{
    const fetch = async () =>{
      const { data } = await axios.get('/users')
      setUsers(data)
    }
    fetch()
  },[])
if(!user) <p>loading...</p>
return (
  <main>
    <h1>Users</h1>
    {user && user.map((user)=>(
      <div key={user.id}>{user.name}</div>
    ))}
  </main>
)}
