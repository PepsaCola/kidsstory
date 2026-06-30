import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(128, 129, 189, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    @media (max-width: 720px) {
        overflow-y: auto;
    }
`;

export const Box = styled.div`
  position: relative;                   
  
  max-width: 760px;
  width: 100%;
    
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 3px; right: 0;
  border: none;
    outline: none;
    background: none;
    @media (max-width: 720px) {
        svg{

            width: 27px;
            height: 27px;
        }
    }
`;
export const BoxText= styled.p`
    font-size: 32px;
    font-weight: 500;
    text-transform: uppercase;
    color:white;
    padding-bottom: 31px;
    @media (max-width: 720px) {
        font-size: 20px;
    }
`
export const ModalContent = styled.div`
    background: #fff;
    border-radius: 20px;
    @media (max-width: 720px) {
        overflow-y: auto;
    }
    
`
export const Header = styled.div`
    display: flex;
    @media (max-width: 720px) {
        flex-direction: column;
    }
   
`
export const Img = styled.img`
    width: 384px;
    height: 369px;
    border-radius: 20px;
    @media (max-width: 720px) {
        width: 204px;
        height: 196px;
        
    }
`
export const ImgWrap = styled.div`
    @media (max-width: 720px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const MobileSocWrap = styled.div`
    display: none;
    @media (max-width: 720px) {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    } 
`
export const MobileSocialBox = styled.div`
    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
export const HeaderText = styled.div`
    padding: 82px 76px;
    padding-bottom: 0;
    @media (max-width: 720px) {
        padding: 15px 18px;
    }
`
export const Role = styled.h3`
    color: #8081BD;
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 31px;
    @media (max-width: 720px) {
        font-size: 20px;
        padding-bottom: 10px;
    }
`
export const Surename = styled.h4`
    color: #8081BD;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`
export const Name = styled.p`
    color: #334155;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 11px;
    @media (max-width: 720px) {
        font-size: 14px;
    }
`
export const Position = styled.p`
    color: #334155;
    font-size: 14px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const Experience = styled.p`
    color: #334155;
    font-size: 14px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const SocialBox = styled.div`
    padding-top: 35px;
    @media (max-width: 720px) {
       display: none;
    }
`
export const Soc = styled.a`
    color: #fff;
    background-color: #8081BD;
    border-radius: 10px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 41px 77px ;
    @media (max-width: 720px) {
        padding: 15px 18px;
        gap: 10px;
        padding-top: 0;
    }
`
export const Text = styled.p`
    margin: 0;
    color: #334155;
    font-size: 16px;
    line-height: 1.5;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const RedText = styled(Text)`
    color: #EA5D4A;
`
export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const ListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 10px;

    &::before {
        content: "";
        flex: 0 0 auto;
        width: 5px;
        height: 5px;
        margin-top: 9px;
        border-radius: 50%;
        background: #334155;
    }
    @media (max-width: 720px) {
        p{
            font-size: 10px;
        }
    }
`