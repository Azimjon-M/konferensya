import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminIlmiyQomita from "../../../components/AdminIlmiyQomita";

const IlmiyMaslaxatQomita = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>
        <AdminIlmiyQomita />
    </div>;
};

export default IlmiyMaslaxatQomita;
