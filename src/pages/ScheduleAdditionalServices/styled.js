import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
`

export const TableWrap = styled.div`
    overflow-x: auto;
    margin: 40px 0 70px;
`

export const Table = styled.table`
    width: 100%;
    min-width: 1000px;
    border-collapse: separate;
    border-spacing: 0;
`

export const Th = styled.th`
    background: #FCDE7A;
    color: #334155;
    font-size: 15px;
    font-weight: 700;
    padding: 14px 16px;
    border: 3px solid #fff;
    border-radius: 10px;
    text-align: ${({ $left }) => ($left ? "left" : "center")};
    white-space: nowrap;
`

export const Tr = styled.tr``

export const NameCell = styled.td`
    width: 230px;
    padding: 14px 16px;
    color: #334155;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    border-bottom: 2px solid #FCDE7A;
`

export const TimeCell = styled.td`
    padding: 14px 16px;
    text-align: center;
    color: #8081BD;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    vertical-align: middle;
    border-bottom: 2px solid #FCDE7A;
`

/* ---------- decorations ---------- */

export const BlobDeco = styled.div`
    position: absolute;
    top: 6px;
    left: -20px;
    z-index: -1;
    pointer-events: none;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const ArrowDeco = styled.img`
    position: absolute;
    top: 210px;
    right: -16px;
    width: 70px;
    z-index: -1;
    pointer-events: none;

    @media (max-width: 1200px) {
        display: none;
    }
`
