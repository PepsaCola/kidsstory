import styled from "styled-components";

export const Container = styled.div`
max-width: 1420px;
    margin: 0 auto 183px;
    
`
export const Title = styled.h2`
    color: #8081BD; font-size: 40px;
    margin: 66px 0;
`
export const List = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 47px;
`
export const Item = styled.li`
width: calc((100% - 47px)/2);
    background: #FFF6D1;
    border-radius: 20px;
    padding: 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 29px;
    &:hover {
        transition: 0.3s linear all;
        background: #F2F2FF;
    }
`
export const NameWrap = styled.div`
display: flex;
    flex-direction: column;
`
export const Name = styled.h4`
    color: #334155; font-size: 20px;
`
export const Image = styled.img``
export const City = styled.p`
    color: #334155; font-size: 14px;
`
export const Text = styled.p`
    color: #334155; font-size: 20px;
`
export const Btn = styled.button`
    background: white; border-radius: 50px;
    border: none;
    outline: none;
    color: #334155; font-size: 16px;
    padding: 10px;
    width: 315px;
    box-sizing: border-box;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        transition: 0.3s linear all;
        background: #EA5D4A;
        color: white;
    }
`