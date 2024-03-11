import styled, { keyframes } from "styled-components";

export const Marquee = styled.div`
    display: flex;
    overflow: hidden;
    user-select: none;
`;

export const scrollX = keyframes`
from{
left:translateX(0);
}
to{
transform: translateX(-100%);
}`;

export const MarqueeGroup = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    animation: ${scrollX} 40s linear infinite;
    
`;
export const ImageGroup = styled.div`
    /* width: 400px;
    height: 250px; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
    aspect-ratio: 16/16;
`;
