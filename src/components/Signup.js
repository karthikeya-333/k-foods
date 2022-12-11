import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import itemContext from '../contexts/Context';





const Signup = () => {

    const context= useContext(itemContext);
    const {role,setRole}= context;


    const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:"" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        //console.log(json);
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
        <div>
            <div className="login">
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="name" value={credentials.name} name="name"onChange={onChange} />
                        <input type="text" placeholder="email address" value={credentials.email} name="email" onChange={onChange} />
                        <input type="password" placeholder="password"  value={credentials.password} name="password" onChange={onChange} />
                       
                        <button>create</button>
                        <p class="message">Already registered? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Signup;


{/* <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} name="name"onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} name="email" onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} name="password" onChange={onChange} id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={credentials.cpassword} name="cpassword" onChange={onChange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> */}