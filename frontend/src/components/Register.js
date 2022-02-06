import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('faiza@gmail.com');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('im in handle submit');
        console.log(email, password);
        const data = {email, password}
        const res = axios.post('http://localhost:5000/users/register', data);
        console.log(res)

    }
    return (<div className='container col-md-6 mx-auto mt-5'>
        <form onSubmit={handleSubmit}>
          
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" 
                   onChange={(e) => setPassword(e.target.value)}

                className="form-control" id="exampleInputPassword1"/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>);
};

export default Register;