import styled from "styled-components";

export const Box = styled.div`
    width: 150px;
    height: 150px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => (props.bg)};
`;
