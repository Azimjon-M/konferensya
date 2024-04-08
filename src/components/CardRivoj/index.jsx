import React from "react";
import { Box } from "./styled";

const CardRivoj = (props) => {
    return (
        <Box $txt11={props?.bg}>
            <div className="flex items-top w-full text-white gap-x-2">
                <h1 className="text-[26px] font-bold">{props?.numb}</h1>
                <p className="text-[11px] font-bold leading-4 mt-2">
                    {props?.phaparagph}
                </p>
            </div>
            <div>
                <img className="w-[100px]" src={props?.img} alt="icon" />
            </div>
        </Box>
    );
};

export default CardRivoj;
