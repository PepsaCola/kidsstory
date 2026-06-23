import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 48px;
    margin-bottom: 40px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`

/* ---------- Sidebar (meal menu) ---------- */

export const Sidebar = styled.aside`
    flex: 0 0 46%;

    @media (max-width: 992px) {
        flex: 1 1 auto;
        width: 100%;
    }
`

export const MealSection = styled.div`
    & + & {
        margin-top: 28px;
    }
`

export const MealTitle = styled.h4`
    color: #6FB66B;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 12px;
`

export const Dish = styled.div`
    display: flex;
    align-items: baseline;
    gap: 6px;
    padding: 5px 0;
`

export const DishName = styled.span`
    color: #8081BD;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
`

export const Leader = styled.span`
    flex: 1;
    border-bottom: 2px dotted #E6C25A;
    transform: translateY(-3px);
`

export const Weight = styled.span`
    color: #8081BD;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
`

/* ---------- Content (images) ---------- */

export const Content = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Featured = styled.div`
    width: 100%;
    height: 360px;
    border-radius: 24px;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};
`

export const Thumbs = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
`

export const Thumb = styled.div`
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};
`

/* ---------- Video row ---------- */

export const VideoRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 60px 0 80px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const VideoTile = styled.div`
    position: relative;
    height: 230px;
    border-radius: 20px;
    overflow: hidden;
    background: ${({ img }) => `url(${img}) center / cover no-repeat, #e2e8f0`};
`

export const Play = styled.button`
    position: absolute;
    inset: 0;
    margin: auto;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.25);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;

    &::after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 13px 0 13px 22px;
        border-color: transparent transparent transparent #fff;
        margin-left: 5px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.4);
    }
`
