import React from "react";

const LoginForm  = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        alert('Someone logged in: ' + email);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="email-label">
                Email:
                <input
                    className="email-textfield"
                    type="text" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <label className="password-label">
                Password:
                <input
                    className="password-textfield"
                    type="text" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <input type="submit" value="Log in" />
        </form>
    );
}

export default LoginForm;