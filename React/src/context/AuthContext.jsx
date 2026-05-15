import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signUp(email, password) {
        const stored = localStorage.getItem("users");
        const users = stored ? JSON.parse(stored) : [];

        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setUser(newUser);
    }

    function login(email, password) {
        const stored = localStorage.getItem("users");
        const users = stored ? JSON.parse(stored) : [];
        const found = users.find((u) => u.email === email && u.password === password);
        if (found) setUser(found);
        return !!found;
    }

    return (
        <AuthContext.Provider value={{ user, signUp, login }}>
            {children}
        </AuthContext.Provider>
    );
}