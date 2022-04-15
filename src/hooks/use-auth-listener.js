import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
}
