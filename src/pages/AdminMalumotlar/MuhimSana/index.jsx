import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MuhimSana = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>MuhimSana</div>;
};

export default MuhimSana;
