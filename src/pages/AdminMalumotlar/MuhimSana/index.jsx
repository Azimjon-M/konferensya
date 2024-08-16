import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminMuhimSanalar from "../../../components/AdminMuhimSanalar";

const MuhimSana = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminMuhimSanalar />
        </div>
    );
};

export default MuhimSana;
