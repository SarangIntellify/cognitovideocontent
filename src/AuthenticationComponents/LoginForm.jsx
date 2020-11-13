import React, { useState } from 'react'
import instance from "./axios.js"
import "./Login.css"


export default function LoginForm() {

    const [details, setDetails] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmationcode: ""
    })
    const [displayBox, setDisplayBox] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value
        })
    }

    function postCall(e) {
        e.preventDefault();
        if (displayBox === false) {
            setDisplayBox(true);
            instance.post("/signup", JSON.stringify(details)).then(res => {
                console.log(res)
                setDisplayBox(true);
            }).catch(err => {
                console.log("Error", err.message);
            });
        } else {
            instance.post("/confirmsignup", JSON.stringify(details)).then(res => {
                console.log(res);
            }).catch(err => {
                console.log("Error", err.message);
            });
        }
    }

    function displayBoxFunction() {
        if (displayBox === true) {
            return <div>
                <h3 style={{ position: "relative", marginBottom: 10, top: -20 }}>Please enter the confirmation code below</h3>
                <input name="confirmationcode" value={details.confirmationcode} onChange={handleInputChange} style={{ position: "relative", top: -20, width: 100, marginBottom: 20, height: 40 }} type="text" id="confirmcode" />
            </div>
        }
    }
    return (
        <div className="main_div">
            <img id="img" src="coding.jpg" alt="backimage" />
            <div className="box">
                <h1>Registration</h1>
                <form onSubmit={postCall}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="fullname"
                            id="name"
                            autoComplete="off"
                            required
                            value={details.name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            required
                            value={details.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="off"
                            required
                            value={details.password}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    {displayBoxFunction()}
                    <input type="submit" value="Sign up" />
                    <h3>Already have an account? <a href="/login">Signin</a></h3>
                </form>
            </div>
        </div>
    );
}

