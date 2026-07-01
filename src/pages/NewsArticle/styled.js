import styled from "styled-components";

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 20px;
`

export const ArticleDate = styled.p`
    color: #94A3B8;
    font-size: 13px;
    font-weight: 600;
    margin: -24px 0 24px;

    span {
        color: #334155;
    }
    @media (max-width: 720px) {
        margin: 7px 0 19px;
    }
`

export const Featured = styled.div`
    width: 100%;
    height: 420px;
    border-radius: 24px;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 32px;
`

export const Para = styled.p`
    margin: 0;
    color: #334155;
    font-size: 15px;
    line-height: 1.7;
`

export const SubHeading = styled.h3`
    margin: 0 0 10px;
    color: #334155;
    font-size: 24px;
    font-weight: 700;
`

export const Block = styled.div``

export const InlineRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 28px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const InlineImg = styled.div`
    flex: 0 0 360px;
    height: 240px;
    border-radius: 16px;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};

    @media (max-width: 768px) {
        flex: 1 1 auto;
        width: 100%;
    }
`

export const InlineText = styled.div`
    flex: 1;
    min-width: 0;
`

export const Share = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
`

export const ShareLabel = styled.span`
    color: #94A3B8;
    font-size: 14px;
    font-weight: 600;
`

export const Soc = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background: #8081BD;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;

    svg {
        width: 18px;
        height: 18px;
    }
`

export const Latest = styled.div`
    margin: 70px 0 40px;
`

export const LatestTitle = styled.h2`
    color: #8081BD;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
`

export const LatestGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`
