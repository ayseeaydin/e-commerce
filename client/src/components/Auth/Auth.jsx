import React from "react";
import Login from "./Login";
import Register from "./Register";
import Header from "../layout/Header/Header";
import "./Auth.css";


const Auth=()=>{
    return(
        <React.Fragment>
            <section class="account-page">
                <div class="container">
                    <div class="account-wrapper">
                        <Login/>
                        <Register/>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Auth;