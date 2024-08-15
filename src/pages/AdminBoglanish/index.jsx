import React, { useEffect } from "react";
import AdminBoglanishCom from "../../components/AdminBoglanish";
import { useNavigate } from "react-router-dom";

const AdminBoglanish = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminBoglanishCom />
        </div>
    );
};

export default AdminBoglanish;
