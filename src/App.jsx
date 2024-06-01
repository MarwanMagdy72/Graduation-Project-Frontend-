import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BarChart from "./Pages/BarChart/BarChart";
import Calendar from "./Pages/Calendar/Calendar";
import Contacts from "./Pages/Contacts/Contacts";
import Faq from "./Pages/Faq/Faq";
import Form from "./Pages/Form/Form";
import Invoices from "./Pages/Invoices/Invoices";
import LineChart from "./Pages/LineChart/LineChart";
import RedialChart from "./Pages/RedialChart/RedialChart";
import Team from "./Pages/Team/Team";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import UpdateProfile from "./Pages/Auth/UpdateProfile";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./Context/authContext";
import PrivateRoute from "./Context/PrivateRoute";
import Companies from "./Pages/Companies/Companies";
import Recycling from './Pages/Recycling/Recycling' ;
import Managing from './Pages/Managing/Managing' ; 

import Antika from './Pages/Antika/Antika' ; 

function App() {
  const routes = createBrowserRouter([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "sign-up",
      element: <Signup />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "update-profile",
      element: <UpdateProfile />,
    },
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "barChart",
          element: (
            <PrivateRoute>
              <BarChart />
            </PrivateRoute>
          ),
        },
        {
          path: "calendar",
          element: (
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          ),
        },
        {
          path: "contacts",
          element: (
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          ),
        },
        {
          path: "faq",
          element: (
            <PrivateRoute>
              <Faq />
            </PrivateRoute>
          ),
        },
        {
          path: "form",
          element: (
            <PrivateRoute>
              <Form />
            </PrivateRoute>
          ),
        },
        {
          path: "invoices",
          element: (
            <PrivateRoute>
              <Invoices />
            </PrivateRoute>
          ),
        },

        {
          path: "lineChart",
          element: (
            <PrivateRoute>
              <LineChart />
            </PrivateRoute>
          ),
        },
        {
          path: "redialChart",
          element: (
            <PrivateRoute>
              <RedialChart />
            </PrivateRoute>
          ),
        },
        {
          path: "team",
          element: (
            <PrivateRoute>
              <Team />
            </PrivateRoute>
          ),
        },
        {
          path: "companies",
          element: (
            <PrivateRoute>
              <Companies />
            </PrivateRoute>
          ),
        },
        {
          path: "recycle",
          element: (
            <PrivateRoute>
              <Recycling />
            </PrivateRoute>
          ),
        },
        {
          path: "manage",
          element: (
            <PrivateRoute>
              <Managing />
            </PrivateRoute>
          ),
        },
        {
          path: "antika",
          element: (
            <PrivateRoute>
              <Antika />
            </PrivateRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 ">
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
