import React from "react";
import { Box } from "./styled";

const CardRivoj = ({ bg, numb, phaparagph, img }) => {
    return (
        <Box bg={bg}>
            <div className="flex items-top w-full text-white gap-x-2">
                <h1 className="text-[26px] font-bold">{numb}</h1>
                <p className="text-[12px] font-bold leading-4 mt-2">
                    {phaparagph}
                </p>
            </div>
            <div>
                <img src={img} alt="icon" />
            </div>
        </Box>
    );
};

export default CardRivoj;
