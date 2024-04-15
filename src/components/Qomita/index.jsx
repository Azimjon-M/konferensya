import React, { useEffect, useState } from "react";
import APIQomita from "../../services/qomita";

function Qomita() {
  const [qomita, setQomita] = useState([]);

  useEffect(() => {
    const fechtQomita = async () => {
      try {
        const response = await APIQomita.hammuallif();
        setQomita(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fechtQomita();
  }, []);

  console.log(qomita);

  return (
    <div>
      <p>
        <span>Homiy:</span>
        <span>ssss</span>
      </p>
    </div>
  );
}

export default Qomita;
