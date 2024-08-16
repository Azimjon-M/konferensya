import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fotogalareya = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>Fotogalareya</div>;
};

export default Fotogalareya;
