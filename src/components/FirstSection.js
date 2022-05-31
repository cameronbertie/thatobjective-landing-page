import React, {useState} from "react";
import "./FirstSection.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCiqYwB5hLVD2Wo3yGOcI0MiPqL3MQiH3I",
  authDomain: "thatobjective-landing-page.firebaseapp.com",
  projectId: "thatobjective-landing-page",
  storageBucket: "thatobjective-landing-page.appspot.com",
  messagingSenderId: "746221871539",
  appId: "1:746221871539:web:512d85536ed91a14c4abc6",
});


const firestore = firebase.firestore();

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log('Welcome to thatobjective.com')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

function FirstSection() {
  const emailsRef = firestore.collection('emails');
  const [formValue, setFormValue] = useState('');
  const [showForm, setShowForm] = useState(true)

  const submitEmail = async(e) => {
    e.preventDefault();
    await emailsRef.add({
      email: formValue
    })
    setFormValue('');
    setShowForm(false);
  }

  return (
    <>
      <div className="first-section-outer-container collapse">
        <div className="first-section-inner-container">
          <div className="first-section-box-1">
          
          
            <h1>the world's first To-Do List app For Gamers</h1>
            { showForm ?
            <>
            <p className="input-description">
              Sign up for early access and to not miss out on news and updates
              about <span>thatOBJECTIVE</span>
            </p>
            <form onSubmit={submitEmail}>
              <div className="form-container">
                <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                  className="email-input"
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                ></input>
                <button
                  className="submit-button"
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  GET ACCESS
                </button>
              </div>
            </form>
            </>
            : <p class="confirmation-text">GOOD FOR YOU. YOU ARE ON THE EARLY ACCESS LIST! YOU WILL BE EMAILED WITH MORE INFORMATION SOON.</p>}
          </div>
          <div className="first-section-box-1"></div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
