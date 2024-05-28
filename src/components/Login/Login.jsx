import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, TextField, Button } from "@mui/material";
import { useAuth } from "../../utils/hooks/useAuth";

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [signInDisabled, setSignInDisabled] = useState(true);

  const {user, login} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home", { replace: true });
    }
  }, [navigate, user]);

  useEffect(() => {
    if(userName && password){
      setSignInDisabled(false);
    } else{
      setSignInDisabled(true);
    }
  }, [userName, password])

  const signInHandler = () => {
    try {
      login(userName, password);
    } catch (error) {
      console.log('An error has occurred while logging in.');
    }
  }

  return (
    <div className="login">
      <form className="form" onSubmit={signInHandler}>
        <FormControl className="formControl">
          <TextField id="email" label="Email" name="username" variant="standard" type="email" autoFocus value={userName} onChange={e => setUserName(e.target.value)} />
        </FormControl>
        <FormControl className="formControl">
          <TextField id="password" label="Password" name="password" variant="standard" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </FormControl>

        <Button variant="contained" onClick={signInHandler} disabled={signInDisabled}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default Login;
