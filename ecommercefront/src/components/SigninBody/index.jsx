import { useState } from 'react'
import React from 'react'

import './style.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Header() {

    const [user, setUser] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        if (user !== "" && fname !== "" && email !== "" && password !== '') {
            let result = await fetch("https://ecomerce101.herokuapp.com/users/create", {
                method: "post",
                body: JSON.stringify({
                    user_name: user,
                    first_name: fname,
                    lasr_name: lname,
                    email, password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            if (result.error) {
                console.log(result.error)
                setError(result.error)
            }
        }
        else {
            setError("Please fill all necessary details")
        }
    }


    return (
        <div style={{
            width: "50vh",
            alignItems: "center",
            margin: 'auto',

        }}>

            <div style={{

                textAlign: "center",
                display: 'flex',
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",


            }}>
                <form onSubmit={onSubmit}
                    style={{
                        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
                        backgroundColor: "White",
                        borderRadius: "16px",
                        paddingBottom: "24px"
                    }}
                >

                    <div style={{
                        margin: "32px",
                        fontSize: "24px",
                    }}
                    >Welcome</div>
                    <Box
                        component="form"

                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="user"
                            label="Username"
                            variant="outlined"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                            required
                        />
                        <TextField
                            id="fname"
                            required
                            label="First name" variant="outlined" value={fname} onChange={(e) => setFname(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="lname" label="Last name" variant="outlined" value={lname} onChange={(e) => setLname(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="email"
                            required
                            label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="pwd_input"
                            required
                            label="Password" type={'password'} variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}
                            style={{
                                marginBottom: "6px",
                                width: "80%",
                            }}
                        />
                    </Box>
                    {error && <div className={"error-msg"}>{error}</div>}
                    <button className="register">Sign up</button>
                </form>
            </div>




        </ div >

    )
}
