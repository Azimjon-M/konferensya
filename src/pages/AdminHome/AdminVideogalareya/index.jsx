import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Videogalareya = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return <div>Videogalareya</div>;
};

export default Videogalareya;
