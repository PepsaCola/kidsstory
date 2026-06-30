import styled from "styled-components";

export const QuestionWrap = styled.div`
    
`
export const  QuestionBtn = styled.button`
    position: relative;
    padding: 20px;
    padding-left: 35px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-transform: uppercase;
    color: ${({$open})=>!$open?"#8081BD":'#EA5D4A'};
    font-size: 20px;
    border: none;
    background: transparent;
    @media (max-width: 720px) {
        font-size: 14px;
        padding: 14px;
        padding-left: 35px;
    }
`
export const QuestionContext = styled.div`
    overflow: hidden;
    max-height: ${({$open})=>$open?"1000px":'0'};
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 2px solid ${({$open})=>$open?'transparent':'#F6B31F'};
    transition: all 0.3s ease-in-out;
    padding: ${({$open})=>$open?"10px 20px":'0 20px'};
    @media (max-width: 720px) {
        padding: ${({$open})=>$open?"13px 18px":'0 18px'};
        font-size: 12px;
    }
`
export const ArrowIcon = styled.svg`
    position: absolute;
    top: 50%;
    transform: translateY(-50%) ${({$open})=>$open ? "rotate(-90deg)" : ""};
    left: 15px;
    transition: all 0.2s;
`