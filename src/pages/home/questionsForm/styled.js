import styled from "styled-components";

export const Container = styled.div`
    max-width:1420px;
    background: #8081BD;
    margin: auto;
    padding: 50px 193px;
    border-radius: 20px;
    display: flex;
    position: relative;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 632px;
    z-index: 1;
`
export const Heading = styled.h1`
    color: white; font-size: 40px;
`
export const Description = styled.p`
    color: white; font-size: 20px;
`
export const Wrap = styled.div`
display: flex;
    gap: 16px;
`
export const Input = styled.input`
    background: white; border-radius: 50px;
    outline: none;
    border: none;
    padding: 14px 20px;
    width: calc((100% - 16px)/2);
    box-sizing: border-box;
`
export const Btn = styled.button`
    background: #F6B31F; border-radius: 50px;
    color: #334155; font-size: 16px;
    font-weight: 700;
    padding: 10px;
    border: none;
    box-sizing: border-box;
    width: calc((100% - 16px)/2);
`
export const Label = styled.label`
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
    z-index: 2;
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
export const Img = styled.img`
position: absolute;
bottom: -54px;
    right: 56px;
    z-index: 0;
`