import React, { useEffect } from "react";
import AdminNashr from "../../../components/AdminNashr";
import { useNavigate } from "react-router-dom";

const Nashr = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminNashr />
        </div>
    );
};

export default Nashr;
