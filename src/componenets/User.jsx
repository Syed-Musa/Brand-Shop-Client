import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const User = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = id => {
    fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            console.log('deleted successfully');
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
        }
    })
  }

  return (
    <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      <h2 className="font-bold text-xl lg:text-5xl italic text-center text-orange-400 my-7">OUR USERS</h2>
      <div className="overflow-x-auto">
        <table className="table bg-gradient-to-r from-blue-400 to-indigo-300 p-10">
          <thead>
            <tr>
              
              <th className="text-2xl text-black font-bold italic">_Id</th>
              <th className="text-2xl text-black font-bold italic">Email</th>
              <th className="text-2xl text-black font-bold italic">Created At</th>
              <th className="text-2xl text-black font-bold italic">Last Logged At</th>
            </tr>
          </thead>
          <tbody>
            
            {
                users.map(user => <tr key={user._id}>
                    <td className="font-bold italic text-black">{user._id}</td>
                    <td className="font-bold italic text-black">{user.email}</td>
                    <td className="font-bold italic text-black">{user.createdAt}</td>
                    <td className="font-bold italic text-black">{user.lastLoggedAt}</td>
                    <td>
                        <button onClick={()=> handleDelete(user._id)} className="btn bg-red-600 font-bold text-white">X</button>
                    </td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
