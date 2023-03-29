import React, { useEffect, useState } from "react";

function LoginPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;
      setUser(waName);

      // Handle the signup/signin process
      // ...
    };
  }, []);
  return <div>{user !== null && <label>{user}</label>}</div>;
}

export default LoginPage;
