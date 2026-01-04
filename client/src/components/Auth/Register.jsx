import React from "react";

const Register = () => {
    return (
        <React.Fragment>
            <div class="account-column">
                <h2>Register</h2>
                <form>
                    <div>
                        <label>
                            <span>Username <span class="required">*</span></span>
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Email address <span class="required">*</span></span>
                            <input type="email" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Password <span class="required">*</span></span>
                            <input type="password" />
                        </label>
                    </div>
                    <div class="privacy-policy-text remember">
                        <p>
                            Your personal data will be used to support your experience throughout this website, to
                            manage access to your account, and for other purposes described in our <a
                                href="#">privacy policy.</a>
                        </p>
                        <button class="btn btn-sm">Register</button>
                    </div>

                </form>
            </div>
        </React.Fragment>
    )
}

export default Register;