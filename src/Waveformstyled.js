import styled, { css } from "styled-components"

export const WaveformContianer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    background: transparent;
`

export const Wave = styled.div`
    width: 100%;
    height: 90px;
`

export const PlayButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    textcolor: white;
    background: #7303c0;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    padding-bottom: 3px;
    &:hover {
        background: #004ff9;
    }
`
