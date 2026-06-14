import "./index.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIzh0tAAAAAC_MEPOEuz4HUqv6bRI4m1cQEHG8';

render(
  <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </GoogleReCaptchaProvider>, 
  document.getElementById("root")
);
