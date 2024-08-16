import React, { useEffect } from "react";
import AdminCarouselCom from "../../../components/AdminCarouselCom";
import { useNavigate } from "react-router-dom";

const AdminCarousel = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("data");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <div>
            <AdminCarouselCom />
        </div>
    );
};

export default AdminCarousel;
