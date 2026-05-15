import { useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext.jsx';


export default function Auth() {
    const [mode, setMode] = useState("signup");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const  { signUp } = useContext(AuthContext);

    function onSubmit(e){
        e.preventDefault();
        const newErrors = {};
        if (!email) newErrors.email = { message: 'Email is required' };
        if (!password || password.length < 6) newErrors.password = { message: 'Password must be at least 6 characters' };
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
        alert("signed up");
    }

    return (
      <div className="page">
        <div className="container">
            <div className="auth-container">
                <h1 className="page-title">{mode === "signup" ? "Sign Up" : "Login"}</h1>
                <form className="auth-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <span className="form-error">{errors.password.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary btn-large">
                        {mode === "signup" ? "Sign Up" : "Login"}
                        </button>
                </form>
                <div className="auth-switch">
                    {mode === "signup" ? (
                    <p>
                        Already have an account? <span className="auth-link" onClick={() => setMode("login")}>Login</span></p>
                    ) : (
                        <p>
                        Don't have an account? <span className="auth-link" onClick={() => setMode("signup")}>Sign Up</span></p>
                    )}
                </div>
            </div>
        </div>
      </div>
    );
}