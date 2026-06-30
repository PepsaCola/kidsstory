import styled from "styled-components";

export const ListItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    transition: transform 0.25s ease;
    cursor: pointer;
    box-sizing: border-box;
`
export const Img = styled.div`
    width: 100%;
    height: 273px;
    border-radius: 20px;
    background: ${({ image }) => (image ? `url(${image}) center / cover no-repeat` : '#e2e8f0')};
`;
export const Surname = styled.p`
    margin: 18px 0 2px;
    color: #8081BD;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
`
export const Name = styled.p`
    margin: 0 0 10px;
    color: #334155;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`
export const Position = styled.p`
    margin: 0;
    color: #94A3B8;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
`
