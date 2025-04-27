import styled from "styled-components";

export const FormBox = styled.form`
position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    right: 0;
    top: 0;
    width: 384px;
    background-color: #8081BD;
    border-radius: 20px;
    padding: 50px 38px;
    box-sizing: border-box;
`

export const Title = styled.h2`
    color: white; font-size: 32px;`
export const Description = styled.p`
    color: white; font-size: 14px;
    font-weight: 600;
`
export const Inp = styled.input`
    background: white; border-radius: 50px;
    color: #334155; font-size: 10px;
    padding: 14px 20px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    &::placeholder {
        color: #334155; font-size: 10px;
    }
`
export const InpWrap = styled.div`
display: flex;
flex-direction: column;
    gap: 6px;
`
export const PolicyLabel = styled.label`
position: relative;
    cursor: pointer;
    display: flex;
    gap: 13px;
    color: white; font-size: 10px;
    font-weight: 600;
    align-items: center;
`
export const Policy = styled.input`
    opacity: 0;
    
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
    margin: 0;
    cursor: pointer;
    z-index: 2;`
export const Btn = styled.button`
    background: #EA5D4A;
    border-radius: 50px;
    border: none;
    padding: 10px;
    width: 100%;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
`
export const Check = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    background: white;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    pointer-events: none;
    box-sizing: border-box;
    border: 4px solid white;

    ${Policy}:checked + & {
        background: #EA5D4A; /* green when checked */
    }
    
`