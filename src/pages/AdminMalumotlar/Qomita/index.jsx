import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Qomita = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>Qomita</div>;
};

export default Qomita;
