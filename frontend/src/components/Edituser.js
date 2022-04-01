import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Edituser = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setgender] = useState("Male");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        
        getid();

    }, [])
    

    const getid = async() => {
         const res = await axios.get(`http://localhost:5000/users/${id}`);
        setname(res.data.name)
        setemail(res.data.email)
        setgender(res.data.gender)
    }

    const updateuder = async(e) => {
        e.preventDefault(); 

        try{
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email, 
                gender

            });
            navigate('/')
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <div>
      <div>
        
        <form onSubmit={updateuder}>
   
            <div className="mb-3 w-50 ">
                <label htmlFor="exampleInputEmail1" className="form-label">nama</label>
                <input type="text" onChange={(e) => setname(e.target.value)} value={name} className="form-control"  />
   
            </div>
            <div className="mb-3 w-50">
                <label  className="form-label">Email address</label>
                <input type="email"  onChange={(e) => setemail(e.target.value)} value={email} className="form-control" />
               
            </div>
            <div className="mb-3 w-50">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <select  onChange={(e) => setgender(e.target.value)} value={gender} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
         
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>

    </div>
    </div>
  )
}

export default Edituser