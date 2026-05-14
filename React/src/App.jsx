import { useContext, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
      }}
      >
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <div>
          {!user.isAuthenticated ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <span style={{ marginRight: "1rem" }}>Hello, {user.name}!</span>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </header>
  )

}

function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "0 1.5rem"}}>
      <h1>Home Page</h1>
      {user ? (
        <p>Welcome back, {user.name}!</p>
      ) : (
        <p>You are not logged in. Please login to see your profile.</p>
      )}
    </div>
  )
}

function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ padding: "0 1.5rem"}}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Here you could show more user info from the context!</p>
    </div>
  )
}

function LoginPage() {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name.trim());
  }
  
  return (
    <div style={{ padding: "0 1.5rem"}}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Type any name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>Login</button>
      </form>

      {user.isAuthenticated && (
        <p style={{ marginTop: "1rem" }}>Welcome, {user.name}!</p>
      )}
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState({name: "", isAuthenticated: false});

  function login(name) {
    setUser({name, isAuthenticated: true});
  }

  function logout() {
    setUser({name: "", isAuthenticated: false});
  }

  return (
    <>
    <div>

      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="*"
            element={<h1 style={{ padding: "0 1.5rem"}}>404 Not Found</h1>}
          />
        </Routes>
      </AuthContext.Provider>
    </div>
    </>
  );
}

