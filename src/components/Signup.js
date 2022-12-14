import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import itemContext from '../contexts/Context';





const Signup = () => {

    const context= useContext(itemContext);
    const {role,setRole}= context;
    let host = "https://k-fooods-backend1.onrender.com";


    const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:"" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(host+"/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        //console.log(json);
        if (json.success) {
            //console.log(json.role)
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
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="name" value={credentials.name} name="name"onChange={onChange} />
                        <input type="text" placeholder="email address" value={credentials.email} name="email" onChange={onChange} />
                        <input type="password" placeholder="password"  value={credentials.password} name="password" onChange={onChange} />
                       
                        <button>create</button>
                        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Signup;


{/* <div classNameName='container'>
            <form onSubmit={handleSubmit}>
                <div classNameName="mb-3">
                    <label htmlFor="name" classNameName="form-label">Name</label>
                    <input type="text" classNameName="form-control" value={credentials.name} name="name"onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div classNameName="mb-3">
                    <label htmlFor="email" classNameName="form-label">Email address</label>
                    <input type="email" classNameName="form-control" value={credentials.email} name="email" onChange={onChange} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div classNameName="mb-3">
                    <label htmlFor="password" classNameName="form-label">Password</label>
                    <input type="password" classNameName="form-control" value={credentials.password} name="password" onChange={onChange} id="password" />
                </div>
                <div classNameName="mb-3">
                    <label htmlFor="cpassword" classNameName="form-label">Confirm Password</label>
                    <input type="password" classNameName="form-control" value={credentials.cpassword} name="cpassword" onChange={onChange} id="password" />
                </div>

                <button type="submit" classNameName="btn btn-primary">Submit</button>
            </form>
        </div> */}