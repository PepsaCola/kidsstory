import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 95px auto;
    background-color: #F2F2FF;
    padding:68px 193px 80px;
    border-radius: 20px
`
export const Title = styled.h2`
    color: #334155; font-size: 40px;
    margin-bottom: 40px;
`
export const List = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    .slick-slide > div {
        display: flex;
        justify-content: center;
        gap: 40px;
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
    

    .slick-dots li 
`
export const Item = styled.li`
    display: flex !important;
    flex-direction: column;
    gap: 21px;
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
`
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const Img = styled.svg``
export const Name = styled.p`
    font-size:20px;
    font-weight: 500;
`
export const City = styled.span`
    font-size: 14px;
    
`
export const Text = styled.p`
    font-size:20px;
    
`