import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminOtganVoqea from "../../../components/AdminOtganVoqea"

const OtganVoqea = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>
        <AdminOtganVoqea />
    </div>;
};

export default OtganVoqea;
