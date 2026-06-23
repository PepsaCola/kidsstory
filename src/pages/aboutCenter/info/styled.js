import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1420px;
    display: flex;
    gap: 76px;
`
export const Img = styled.img`
    width: 364px;
    height: 369px;
    border-radius: 20px
`
export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
`
export const NameWrap = styled.div`
display: flex;
    flex-direction: column;
    margin-bottom: 41px;
`
export const Position = styled.h2`
    color: #8081BD; font-size: 32px;
`
export const Surname = styled.h3`
    color: #8081BD; font-size: 20px;
    margin-top: 31px;
`
export const Name = styled.h4`
    color: #334155; font-size: 20px;
    margin-bottom: 11px;
`
export const Span = styled.span`
    color: #334155; font-size: 14px;
    font-weight: 500;
`
export const Text = styled.p`
    color: ${(props)=> props.red ? "#EA5D4A":"#334155"} ;
    font-size: 16px;
`
export const List = styled.ul`
padding-left: 20px;
    margin-top: 22px;
`
export const Item = styled.li`
    list-style: disc;
    color: #334155;
    font-size: 16px;
`