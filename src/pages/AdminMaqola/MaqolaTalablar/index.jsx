import React, { useEffect } from "react";
import AdminMaqolaTalablari from "../../../components/AdminMaqolaTalablari";
import AdminMaqolaTalablar from "../../../components/AdminMaqolaTalablar";
import { useNavigate } from "react-router-dom";

const MaqolaTalablar = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("data")
        if (!token) {
            navigate("/login")
        }
    }, [navigate])
    return (
        <div>
            <AdminMaqolaTalablari />
            <AdminMaqolaTalablar />
        </div>
    );
};

export default MaqolaTalablar;
