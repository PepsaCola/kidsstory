import styled from "styled-components";
import {Link} from "react-router-dom";

export const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    @media (max-width: 992px) {
        width: 100%;
    }
`

export const CardImg = styled.div`
    width: 100%;
    height: 210px;
    border-radius: 16px;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};
    margin-bottom: 16px;
`

export const PubDate = styled.p`
    color: #94A3B8;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;

    span {
        color: #334155;
    }
`

export const CardTitle = styled.h4`
    color: #8081BD;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3;
    margin-bottom: 12px;
`

export const CardText = styled.p`
    color: #334155;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const More = styled.span`
    margin-top: auto;
    align-self: flex-start;
    background: transparent;
    color: #334155;
    border: 1px solid #E2E8F0;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 28px;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

    ${Card}:hover & {
        background: #EA5D4A;
        border-color: #EA5D4A;
        color: #fff;
    }
    @media (max-width: 992px) {
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }
`
