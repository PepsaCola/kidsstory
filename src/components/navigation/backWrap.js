import styled from "styled-components";
import {Link} from "react-router-dom";

export const BackWrap = styled.div`
display: flex;
    gap: 40px;
    @media (max-width: 720px) {
        display: none;
    }
`;

export const Back = styled(Link)`
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.active ? "#8081BD" : "#334155"};
`;