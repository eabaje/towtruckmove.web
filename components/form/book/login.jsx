import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { useSession, signIn, signOut } from "next-auth/react";

// refresh token
import { refreshTokenSetup } from "../../../helpers/refreshToken";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const googleClientId =
  "200363092011-ccq4j8lpf8m2bod90g3eaeqcmfmcfe7p.apps.googleusercontent.com";

function LoginHooks() {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 `);
  };

  // const { signIn: googeleSigIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   googleClientId,
  //   isSignedIn: true,
  //   accessType: "offline",
  //   // responseType: 'code',
  //   // prompt: 'consent',
  // });
  // const { signIn: facebookSigIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   googleClientId,
  //   isSignedIn: true,
  //   accessType: "offline",
  //   // responseType: 'code',
  //   // prompt: 'consent',
  // });
  return (
    <>
      {/* <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button> */}
      <button
        onClick={handleSignin}
        class="btn btn-voyage-outline order-0"
        type="button"
      >
        <span class="text-primary">Sign in</span>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div class="login-form">
            <form action="/examples/actions/confirmation.php" method="post">
              <div class="text-center social-btn">
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary btn-lg btn-block"
                  onClick={handleSignin}
                >
                  <i class="fa fa-facebook"></i> Sign in with <b>Facebook</b>
                </a>
                {/* <a
                  href="javascript:void(0)"
                  class="btn btn-info btn-lg btn-block"
                  onClick={googeleSigIn}
                >
                  <i class="fa fa-twitter"></i> Sign in with <b>Twitter</b>
                </a> */}
                <a
                  href="javascript:void(0)"
                  class="btn btn-danger btn-lg btn-block"
                  onClick={handleSignin}
                >
                  <i class="fa fa-google"></i> Sign in with <b>Google</b>
                </a>
              </div>
              <div class="or-seperator">
                <b>or</b>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  name="username"
                  placeholder="Username"
                  required="required"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control input-lg"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-success btn-lg btn-block login-btn"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div class="text-center">
              <span class="text-muted">Don't have an account?</span>{" "}
              <a href="#">Sign up here</a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginHooks;
