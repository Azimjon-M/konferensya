import React, { useEffect } from "react";
import AdminTaklifEtilganlar from "../../../components/AdminTaklifEtilganlar";
import { useNavigate } from "react-router-dom";

const TaklifEtilganlar = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminTaklifEtilganlar />
        </div>
    );
};

export default TaklifEtilganlar;
