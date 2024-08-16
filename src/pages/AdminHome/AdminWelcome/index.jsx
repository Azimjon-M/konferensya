import React, { useEffect } from "react";
import AdminWelcomeCom from "../../../components/AdminWelcomeCom";
import { useNavigate } from "react-router-dom";

const AdminWelcome = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminWelcomeCom />
        </div>
    );
};

export default AdminWelcome;
