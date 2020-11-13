import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import instance from "./axios.js"

export default function LoginFormTwo() {

    const [cred, setCred] = useState({
        email: "",
        password: ""
    })

    const history = useHistory();

    function handleInputChange(e) {
        const { name, value } = e.target;
        setCred({
            ...cred,
            [name]: value
        })
    }

    function callLogin(e) {
        e.preventDefault();
        console.log(cred);
        instance.post("/login", JSON.stringify(cred)).then(res => {
            console.log(res);
            if (res !== "undefined" && res !== null) {
                routeChange();
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    function routeChange() {
        let path = "/welcome";
        history.push(path);
    }

    return (
        <div className="main_div">
            <img id="img" src="coding_3.jpg" alt="backimage" />
            <div className="box">
                <h1>Login</h1>
                <form onSubmit={callLogin}>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            required
                            value={cred.email}
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
                            value={cred.password}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        </div>
    )
}
