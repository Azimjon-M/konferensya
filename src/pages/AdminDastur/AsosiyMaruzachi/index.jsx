import React, { useEffect } from "react";
import AdminAsosiyMaruzachi from "../../../components/AdminAsosiyMaruzachi";
import { useNavigate } from "react-router-dom";

const AsosiyMaruzachi = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminAsosiyMaruzachi />
        </div>
    );
};

export default AsosiyMaruzachi;
