import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto 183px;
    @media (max-width: 720px) {
        margin: 24px 20px;
        margin-top: 0;
    }
`
export const List = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 47px;
    @media (max-width: 720px) {
        margin-top: 24px;
        gap: 24px;
    }
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
    @media (max-width: 720px) {
        width: 100%;
        padding: 24px 18px;
        gap: 14px;
    }
`
export const ItemHeader = styled.div`
    display: flex;
    gap: 21px;
    align-items: center;
    
`
export const Avatar = styled.div`
    width: 60px;
    height: 60px;
    background-color: #8081BD;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 720px) {
        width: 37px;
        height: 37px;
    }
`
export const Img = styled.svg`
    width: 27px;
    height: 28px;
    @media (max-width: 720px) {
        width: 14px;
        height: 15px;
    }
`
export const NameWrap = styled.div`
display: flex;
    flex-direction: column;
`
export const Name = styled.h4`
    color: #334155; font-size: 20px;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`
export const Image = styled.img``
export const City = styled.p`
    color: #334155; font-size: 14px;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const Text = styled.p`
    color: #334155; font-size: 20px;
    @media (max-width: 720px) {
        font-size: 12px;
    }
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
    @media (max-width: 720px) {
        width: 100%;
        font-size: 12px;
    }
`