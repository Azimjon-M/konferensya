import React, { useEffect } from "react";
import AdminBolimCom from "../../../components/AdminBolimCom";
import { useNavigate } from "react-router-dom";

const Bolim = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminBolimCom />
        </div>
    );
};

export default Bolim;
