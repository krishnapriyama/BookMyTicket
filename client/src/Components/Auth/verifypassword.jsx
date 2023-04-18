import React from "react";
import firebase from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import swal1 from "sweetalert";
import axios from 'axios'
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

function forgotpassword() {
  const navigate = useNavigate();

  async function handleClickVerify() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    var phoneNumber = "+91" + document.getElementById("phone").value;
    var appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(async (confirmationResult) => {
        document.getElementById("otp").hidden = false;
        document.getElementById("sendotp").hidden = true;
        document.getElementById("verify").hidden = false;
        document.getElementById("recaptcha-container").hidden = true;
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        swal.fire({
            title: "Error",
            text: " SMS not sent",
            icon: "error",
            confirmButtonText: "OK",
          });
        // console.log(error, "Error; SMS not sent");
        // ...
      });
      
  }

  let checkCode = () => {
    let code = document.getElementById("otp").value;
    window.confirmationResult.confirm(code)
      .then((result) => {
        
        // User signed in successfully.
        let verifyPhoneNumber = {
            verified: true,
            number: "+91" +document.getElementById("phone").value,
          };
          axios.post('http://localhost:4000/verifyNumber', {
            ...verifyPhoneNumber,
          }).then((resp)=>{
            
            if (resp.data.verified) {
                swal1({
                  title: "success",
                  text: `Verified successfully`,
                  icon: "success",
                  dangerMode: false,
                }).then(() => {
                  navigate("/login");
                });
              }else{
                swal.fire({
                    title: "Error",
                    text: "Check your number",
                    icon: "error",
                    confirmButtonText: "OK",
                  });
              }
          })
        // const user = result.user;
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        swal.fire({
            title: "Error",
            text: "Verification code is incorrect",
            icon: "error",
            confirmButtonText: "OK",
          });
          throw error;
        // ...
      });
  }
  
 
  

  return (
    <section className="h-screen justify-center items-center">
      <div className="container mx-auto flex justify-center items-center h-full">
        {/* Form */}
        <div className="md:w-3/4 lg:w-1/2 xl:w-3/5 xl:pl-10 mt-10 md:mt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault;
            }}
          >
            <div className="mb-4 mt-6">
              <input
                type="text"
                id="phone"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Phone number"
              />
            </div>

            <div className="mb-3 mt-4"></div>
          </form>
          <div className="mb-4 mt-6">
            <input
              type="text"
              id="otp"
              hidden
              className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500 "
              placeholder="OTP"
            />
          </div>
          <button
            className="w-full p-3 rounded-lg text-xl text-white bg-red-700"
            onClick={handleClickVerify}
            id="sendotp"
          >
            Send OTP
          </button>
          <button
            className="w-full p-3 rounded-lg text-xl text-white bg-red-700"
            onClick={checkCode}
            id="verify"
            hidden
          >
            Confirm OTP
          </button>

          <div className="text-center" id="recaptcha-container"></div>
          {/* End Form */}
        </div>
      </div>
    </section>
  );
}

export default forgotpassword;
