import styled from "styled-components";

export const Container = styled.section`
    max-width: 1420px;
    margin: 95px auto;
    background-color: #F2F2FF;
    padding:68px 193px 80px;
    border-radius: 20px;
    position: relative;
    @media (max-width: 720px) {
        margin: 37px 20px;
        padding:28px 17px 64px;
    }
`
export const Title = styled.h2`
    color: #334155; font-size: 40px;
    margin-bottom: 40px;
    @media (max-width: 720px) {
        font-size: 24px;
        margin-bottom: 28px;
    }
`
export const Decor = styled.svg`
    position: absolute;
    right: 80px;
    top: -40px;
    @media (max-width: 720px) {
        display: none;
    }
`
export const List = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    
    .slick-slide > div {
        display: flex;
        justify-content: center;
        gap: 40px;
        @media (max-width: 720px) {
            width: 100%;
        }
    }
    & .slick-dots ul{
        display: flex !important;
        justify-content: center;
        align-items: center;
        gap: 22px;
        bottom: -40px;
        & li {
            width: 14px;
            height: 14px;
            margin: 0;
            & div {
                width: 14px;
                height: 14px;
                background: #FDDC4E;
                border-radius: 50%;
                cursor: pointer;
                transition: background 0.3s ease;
            }
            &.slick-active div {
                background: #EA5D4A;
            }
            & button:before {
                display: none;
            }
        }
    }
    @media (max-width: 720px) {
        width: 100%;
    }

`
export const Item = styled.li`
    display: flex !important;
    flex-direction: column;
    gap: 21px;
    @media (max-width: 720px) {
        width: 100%;
    }
`
export const ItemWrap = styled.div`
    background: white;
    border-radius: 20px;
    padding: 36px;
    box-sizing: border-box;
    width: 594px;
    margin: 0 10px;
    display: flex !important;
    flex-direction: column;
    gap:21px;
    @media (max-width: 720px) {
        width: 100%;
        box-sizing: border-box;
        padding: 24px 20px;
        margin: 0;
    }
`
export const Read = styled.button`
    padding:  0 36px;
    background: none;
    outline: none;
    border: none;
    text-align: start;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 720px) {
        text-align: center;
        padding: 0;
    }
`
export const ProfileWrap = styled.div`
    display: flex;
    gap: 20px;
`
export const ImgWrap = styled.div`
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
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const Img = styled.svg`
    width: 27px;
    height: 28px;
    @media (max-width: 720px) {
        width: 14px;
        height: 15px;
    }
`
export const Name = styled.p`
    font-size:20px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size:16px;
    }
`
export const City = styled.span`
    font-size: 14px;
    @media (max-width: 720px) {
        font-size:12px;
    }
`
export const Text = styled.p`
    font-size:20px;
    @media (max-width: 720px) {
        font-size:12px;
    }
`