import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IlmiyMaslaxatQomita = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>IlmiyMaslaxatQomita</div>;
};

export default IlmiyMaslaxatQomita;
