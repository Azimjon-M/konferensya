import styled from "styled-components";

export const Box = styled.div`
    width: 170px;
    height: 170px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => (props.bg)};
`;
