import { useState } from "react";
import { loginWithGoogle, logout } from "../utils/firebase";

export default function LoginButton() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const res = await loginWithGoogle();
    setUser(res.user);
  };

  return user ? (
    <div>
      <p>Welcome, {user.displayName}!</p>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  ) : (
    <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login with Google</button>
  );
}