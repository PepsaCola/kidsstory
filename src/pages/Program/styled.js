import styled from "styled-components";

export const TopWrap = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Band = styled.section`
    position: relative;
    background: #FFF6D1;
    margin-top: 40px;
    padding: 100px 0;
`

const Wave = styled.svg`
    position: absolute;
    left: 0;
    width: 100%;
    height: 48px;
    display: block;
    z-index: 1;
`

export const WaveTop = styled(Wave)`
    top: -1px;
`

export const WaveBottom = styled(Wave)`
    bottom: -1px;
`

export const Inner = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
    margin-bottom: 60px;
`

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

    & + & {
        margin-top: 80px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }
`

export const GroupImg = styled.div`
    flex: 0 0 360px;
    height: 240px;
    border-radius: 20px;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};

    @media (max-width: 768px) {
        flex: 1 1 auto;
        width: 100%;
    }
`

export const GroupText = styled.div`
    flex: 1;
    min-width: 0;
`

export const GroupTitle = styled.h3`
    color: #8081BD;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const GroupDesc = styled.p`
    color: #334155;
    font-size: 15px;
    line-height: 1.7;
`

/* ---------- decorations ---------- */

export const BlobDeco = styled.div`
    position: absolute;
    top: 40px;
    left: 30px;
    z-index: 0;
    pointer-events: none;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const ArrowDeco = styled.img`
    position: absolute;
    top: 46%;
    right: 24px;
    width: 70px;
    z-index: 0;
    pointer-events: none;

    @media (max-width: 1100px) {
        display: none;
    }
`
