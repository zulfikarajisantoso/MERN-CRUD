import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Listuser = () => {

    const [user, setuser] = useState([])

    useEffect(() => {
        
        // axios.get('http://localhost:5000/users').then(res => {
       
        //     setuser(res.data)
          
        // })
        getuser();
    }, [])
    
    const getuser = async () => {
      const response = await axios.get('http://localhost:5000/users');
      setuser(response.data);
    }


    const deleteuser = async(id) => {
   

      try {
          await axios.delete(`http://localhost:5000/users/${id}`)
          getuser();
      } catch (error) {
        alert(error)
      }


    }

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, idx) => {
            
            return (
      
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>
                  <Link to={`edituser/${item._id}`} className='btn btn-succes' >Edit</Link>
                  <button onClick={() => deleteuser(item._id)} className='btn btn-danger' >Delete</button>
                </td>
              </tr>
 
            )

          })} 
         
        
        </tbody>
      </table>
    </div>
  )
}

export default Listuser