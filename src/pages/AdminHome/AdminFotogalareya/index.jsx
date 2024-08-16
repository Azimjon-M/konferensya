import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminFotoGalareyaCom from "../../../components/AdminFotoGalareyaCom";

const Fotogalareya = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div><AdminFotoGalareyaCom/></div>;
};

export default Fotogalareya;
