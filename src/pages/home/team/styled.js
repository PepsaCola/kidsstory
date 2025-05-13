import styled from "styled-components";

export const Container = styled.div`
max-width: 1420px;
    margin: 95px auto;
    
`
export const Title = styled.h3`
    color: #8081BD;
    font-size: 40px;
    margin-bottom: 53px;
`
export const List = styled.ul`
    //position: relative;
    max-width: 1228px;
    margin: 0 auto;
`;

export const ListItem = styled.li`
    width: 283px;
    display: flex;
    flex-direction: column;
`
export const Img = styled.div`
    width: 283px;
    height: 273px;
    border-radius: 20px;
    background: ${({ image }) => (image ? `url(${image}) center no-repeat` : 'none')};
`;

export const Surname = styled.p`
    color: #8081BD; font-size: 20px;
    font-weight: 700;
    
`
export const Name = styled.p`
    color: #334155; 
    font-size: 20px;
    font-weight: 500;
`
export const Position = styled.p`
    color: #334155; font-size: 14px;
    font-weight: 500;
`

export const NavigationWraper = styled.div`
    //position: relative;
    //width: 1228px; 
    //margin: 0 auto;
`

export const Navigation = styled.div`
    //position: relative;
    //display: flex;
    //justify-content: center;
    //overflow: hidden;
    
`;


export const NavBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ className }) => className?.includes("slick-prev") ? "left: -100px;" : "right: -100px;"}
    background: transparent;
    color:#8081BD;
    border: 1px solid #8081BD;
    width: 60px ;
    height: 60px ;
    font-size: 40px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        background: #8081BD;
        color: #fff;
    }
`
