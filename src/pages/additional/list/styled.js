import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
`;

export const BackWrap = styled.div`
display: flex;
    gap: 40px;
`;

export const Back = styled(Link)`
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.active ? "#8081BD" : "#334155"};
`;

export const Title = styled.h2`
    color: #8081BD; font-size: 40px;
    margin-bottom: 66px;
    margin-top: 54px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Item = styled.li`
    width: calc((100% - 40px) / 3);
    height: 370px;
    display: flex;
    align-items: end;
    background-image: url(${props => props.back});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
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
`;
