import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtganVoqea = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>OtganVoqea</div>;
};

export default OtganVoqea;
