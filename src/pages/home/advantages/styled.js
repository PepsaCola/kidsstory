import styled from "styled-components";

export const Container = styled.section`
    max-width: 1420px;
    margin: 0 auto;
    @media (max-width: 720px) {
        margin:  0 20px;
    }
`
export const Description = styled.p`
    color: #334155;  
    font-size: 20px; 
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 58px;
    @media (max-width: 720px) {
        gap: 20px;
    }
`
export const Item = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    width: calc((100% - 50px)/3);
    @media (max-width: 720px) {
        width: calc((100% - 20px)/2);
        flex-direction: column;
        gap: 15px;
    }
`
export const Icon = styled.img`
    width: 76px;
    height: 76px;
    background: ${props => props.back};
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    
`
export const Text = styled.p`
    color: #334155; 
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 720px) {
        font-size: 12px;
        text-align: center;
    }
`