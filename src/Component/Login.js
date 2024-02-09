import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";


const Login = (props) => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])

    const navigate = useNavigate();

    const submitThis = () => {
        const info = { name: userName, password: password }
        setData([info])
    }

    const submitFunction = (e) => {
        e.preventDefault();
        if (userName === "A" && password === "A11") {
            navigate("/Dashboard", { info: "" });
        } else {
            console.error("Invalid username or password");
        }
    };

    return (
        <div className="app-bar">
            <form action
                onSubmit={submitFunction}
            >
                <Box>
                <div classname="portal-data"><label>Portal</label></div>
                <div className="separate-data">
                    <div style={{ paddingBottom: "10px" }}>
                        <label>UserName :</label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                </div>
                <div classname="button-data">
                    <button 
                    //onClick={(e) => submitFunction(e)}
                    >Login</button>
                </div>
                </Box>
            </form>
        </div>
    )
}

export default Login