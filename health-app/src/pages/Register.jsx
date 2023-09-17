import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styling from '../lib/helpers/Styling';
import "../components/Cascading/styles.css";
import axios from 'axios';


function LoginSignup() {
  const [signIn, toggle] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();


    const email = e.target.email.value;
    const password = e.target.password.value;

    const userData = JSON.stringify({ email, password });
    console.log(userData);

    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      setLoading(true);


      const response = await axios.post('http://localhost:3001/api/auth/login', userData, {
        headers: headers
      });

      console.log(response.data);
      // Redirect to the dashboard after successful registration
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      // setError("Registration failed. Please check your data and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userData = JSON.stringify({ name, email, password });
    console.log(userData);

    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      setLoading(true);


      const response = await axios.post('http://localhost:3001/api/auth/register', userData, {
        headers: headers
      });

        console.log(response.data);
      // Redirect to the dashboard after successful registration
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      // setError("Registration failed. Please check your data and try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Styling.Container>
      {signIn ? (
        <Styling.SignInContainer signinIn={signIn}>
          <Styling.Form  onSubmit={handleSignIn}>
            <Styling.Title>Sign in</Styling.Title>
            <Styling.Input type='email' name='email' placeholder='Email' />
            <Styling.Input type='password' name='password' placeholder='Password' />
            <Styling.Anchor href='#'>Forgot your password?</Styling.Anchor>
            <Styling.Button type='submit'>Sign In</Styling.Button>
          </Styling.Form>
        </Styling.SignInContainer>
      ) : (
          <Styling.SignUpContainer onSubmit={handleSignUp}>
            <Styling.Form>
              <Styling.Title>Create Account</Styling.Title>
              <Styling.Input type='text' name='name' placeholder='Name' />
              <Styling.Input type='email' name='email' placeholder='Email' />
              <Styling.Input type='password' name='password' placeholder='Password' />
              <Styling.Button type='submit' disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </Styling.Button>
            </Styling.Form>
          </Styling.SignUpContainer>
      )}

      <Styling.OverlayContainer signinIn={signIn}>
        <Styling.Overlay signinIn={signIn}>
          <Styling.LeftOverlayPanel signinIn={signIn}>
            <Styling.Title>Hello, Friend!</Styling.Title>
            <Styling.Paragraph>
              You may Login to keep Connected with us.
            </Styling.Paragraph>
            <Styling.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Styling.GhostButton>
          </Styling.LeftOverlayPanel>

          <Styling.RightOverlayPanel signinIn={signIn}>
            <Styling.Title>Hi There, Hero!</Styling.Title>
            <Styling.Paragraph>
              You may enter Your personal details to get connected with us.
            </Styling.Paragraph>
            <Styling.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Styling.GhostButton>
          </Styling.RightOverlayPanel>
        </Styling.Overlay>
      </Styling.OverlayContainer>
    </Styling.Container>
  );
}

export default LoginSignup;