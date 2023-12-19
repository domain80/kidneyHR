import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Patient from "./pages/Patient";
import DashboardPage from "./pages/DashboardPage.tsx";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/reset-password", element: <ResetPassword /> },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: "patient/:patientID", element: <Patient /> },
            { path: "patient/:patientID/newReport", element: <></> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
