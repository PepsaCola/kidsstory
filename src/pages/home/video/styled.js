import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 40px 0;
    text-align: center;
  max-width: 1420px;
  margin: 0 auto;
  z-index: -1;
  overflow-x: hidden;
`;

export const Carousel = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
`;

export const SlideTrack = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${({ currentIndex }) => -currentIndex * 100}%);
`;

export const Slide = styled.div`
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    transform: scale(${({ active }) => (active ? 1 : 0.9)});
    transition: all 0.4s ease;
  z-index: 5;
`;

export const SlideImage = styled.img`
    width: 650px;
    height: 333px;
    border-radius: 16px;
    object-fit: cover;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #f9cf4d;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;

  ${({ direction }) => (direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f9cf4d;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  cursor: pointer;
`;

export const FigGreen = styled.img`
position: absolute;
bottom: -65px;
  left: 317px;
`
export const FigBlue = styled.img`
  position: absolute;
  top: -105px;
  right: 268px;
`