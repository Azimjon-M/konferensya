import React, { useEffect, useState } from "react";
import data from "../../language/index.json";
import { useSelector } from "react-redux";

const TranslateMessage = ({ id = "Bunday id Yo'q!" }) => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [txt, setTxt] = useState("");

    useEffect(() => {
        setTxt(data[Lang][id]);
    }, [Lang, id]);
    return <>{txt}</>;
};

export default TranslateMessage;
