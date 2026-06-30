import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    @media (max-width: 720px) {
        margin: 20px ;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 720px) {
        margin-top: 27px;
    }
`;

export const Item = styled(Link)`
    width: calc((100% - 40px) / 3);
    height: 370px;
    display: flex;
    align-items: end;
    background-image: url(${props => props.back});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    @media (max-width: 720px) {
        width: 100%;
        height: 210px;
    }
`;

export const Text = styled.p`
    width: 100%;
    padding: 12px;
    background-color: #f2f2ff;
    border-radius: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #334155;
    @media (max-width: 720px) {
        background-color: #FFF6D1;
        padding: 9px;
        font-size: 10px;
    }
`;

export const StyledIcon = styled.div`
    width: 76px;
    height: 76px;
    padding: 17px;
    border-radius: 5px;
    background-color: #fddc4e;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg > path{
        width: 100%;
        height: 100%;
        stroke: #334155;
        fill: none;
    }
    @media (max-width: 720px) {
        width: 56px;
        height: 56px;
        padding: 12px;
        background-color: white;
        svg > path{
            stroke: #8081BD;
        }
    }
`;
