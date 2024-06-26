import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BarChart from "./Pages/BarChart/BarChart";
import Calendar from "./Pages/Calendar/Calendar";
import Faq from "./Pages/Faq/Faq";
import Form from "./Pages/Form/Form";
import Invoices from "./Pages/Invoices/Invoices";
import LineChart from "./Pages/LineChart/LineChart";
import RedialChart from "./Pages/RedialChart/RedialChart";
import Team from "./Pages/Team/Team";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./Context/authContext";
import PrivateRoute from "./Context/PrivateRoute";
import Companies from "./Pages/Companies/Companies";
import Recycling from "./Pages/Recycling/Recycling";

import Antika from "./Pages/Antika/Antika";
import APIsContextProvider from "./Context/APIsContext";
import Users from "./Pages/Users/Users";

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
          path: "users",
          element: (
            <PrivateRoute>
              <Users />
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
    <div style={{ minHeight: "100vh" }}>
      <div className="w-100 ">
        <APIsContextProvider>
          <AuthProvider>
            <RouterProvider router={routes}></RouterProvider>
          </AuthProvider>
        </APIsContextProvider>
      </div>
    </div>
  );
}

export default App;
