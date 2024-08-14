import React from "react";
import langData from "../../language/index.json";
import { useSelector } from "react-redux";

const TextTranslate = ({ id }) => {
    const isLang = useSelector((state) => state.reducerLang.isLang);
    return <p>{langData[isLang][id]}</p>;
};

export default TextTranslate;
