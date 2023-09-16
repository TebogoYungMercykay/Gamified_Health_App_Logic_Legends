import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styling from '../lib/helpers/Styling';
import "../components/Cascading/styles.css";

function LoginSignup() {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Redirect to the dashboard if authentication is successful
    navigate("/dashboard");
  };

  return (
    <Styling.Container>
      {signIn ? (
        <Styling.SignInContainer signinIn={signIn}>
          <Styling.Form>
            <Styling.Title>Sign in</Styling.Title>
            <Styling.Input type='email' placeholder='Email' />
            <Styling.Input type='password' placeholder='Password' />
            <Styling.Anchor href='#'>Forgot your password?</Styling.Anchor>
            <Styling.Button onClick={handleSignIn}>Sign In</Styling.Button>
          </Styling.Form>
        </Styling.SignInContainer>
      ) : (
        <Styling.SignUpContainer signinIn={signIn}>
          <Styling.Form>
            <Styling.Title>Create Account</Styling.Title>
            <Styling.Input type='text' placeholder='Name' />
            <Styling.Input type='email' placeholder='Email' />
            <Styling.Input type='password' placeholder='Password' />
            <Styling.Button>Sign Up</Styling.Button>
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