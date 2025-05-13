import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    
`
export const Title = styled.h3`
    color: #8081BD;
    font-size: 40px;
    margin-bottom: 24px;
`
export const Description = styled.p`
    color: #334155;  
    font-size: 20px; 
    font-weight: 500;
`
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 58px;
`
export const Item = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    width: calc((100% - 50px)/3);
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
`