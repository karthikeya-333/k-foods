import React, { useContext, useState } from 'react'
// import {  useHistory } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import itemContext from '../contexts/Context';


const Login = (props) => {
    const context= useContext(itemContext);
    let host = "https://k-fooods-backend1.onrender.com";
    const {role,setRole}= context;
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(host+"/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            console.log(json.role)
            if (json.role === "user") {
                localStorage.setItem('user', json.authtoken);
                setRole("user");
                navigate("/");
            }
            else if (json.role === "admin") {
                localStorage.setItem('admin', json.authtoken);
                setRole("admin");
                navigate("/");
            }
        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="login">
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="username" name="email" value={credentials.email} onChange={onChange} />
                        <input type="password" placeholder="password" name="password" value={credentials.password} onChange={onChange} />
                        <button>login</button>
                        <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login


{/* <div className='container'>
            <h2>Login in to K-foods</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div> */}