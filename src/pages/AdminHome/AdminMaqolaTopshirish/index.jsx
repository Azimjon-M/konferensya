import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MaqolaTopshirish = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>MaqolaTopshirish</div>;
};

export default MaqolaTopshirish;
