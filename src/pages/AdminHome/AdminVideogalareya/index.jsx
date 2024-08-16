import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminVideoGalareyaCom from "../../../components/AdminVideoGalareyaCom";

const Videogalareya = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div><AdminVideoGalareyaCom/></div>;
};

export default Videogalareya;
