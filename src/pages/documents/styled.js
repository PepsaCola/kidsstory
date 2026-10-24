import styled from "styled-components";
import {ReactComponent as Doc} from "../../img/icons/doc.svg";
import {Link} from "react-router-dom";

export const Container = styled.div`
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 0 auto;
    @media (max-width: 720px) {
        margin: 24px 20px;
        margin-top: 0;
    }
`

export const List = styled.ul`
display: flex;
    flex-direction: column;
    gap: 37px;
    @media (max-width: 720px) {
        margin: 24px 0;
        gap: 27px;
    }
`
export const Item = styled.li`
display: flex;
    align-items: center;
    gap: 33px;
    @media (max-width: 720px) {
        gap: 23px;
    }
`
export const Icon = styled(Doc)`
    width: 42px;
    height: 56px;
    @media (max-width: 720px) {
        width: 29px;
        height: 40px;
    }
`
export const Text = styled(Link)`
    color: #8081BD; font-size: 20px;
    font-weight: 600;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`