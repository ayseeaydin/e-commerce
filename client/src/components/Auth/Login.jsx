import React from "react";

const Login = () => {
    return (
        <React.Fragment>
            <div class="account-column">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>
                            <span>Username or email address <span class="required">*</span></span>
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Password <span class="required">*</span></span>
                            <input type="password" />
                        </label>
                    </div>
                    <p class="remember">
                        <label>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <button class="btn btn-sm">Login</button>
                    </p>
                    <a href="#" class="form-link">Lost your password?</a>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Login;