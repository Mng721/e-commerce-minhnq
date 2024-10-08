import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import IndexPage from "./components/page/IndexPage";
import ContactPage from "./components/page/signin/ContactPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/page/AboutPage";
import SignInPage from "./components/page/signin/SignInPage";
import RegisterPage from "./components/page/register/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },

  {
    path: "/signup",
    element: <RegisterPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
