import styled, { keyframes } from "styled-components"
import { createSignal } from 'solid-js';


function WavingHand() {
    return (
        <WavingHandSpan>👋</WavingHandSpan>
    )
}

const WaveAnimation = keyframes`
    0% {
    transform: rotate(0deg);
    }
    15% {
        transform: rotate(14deg);
    }
    30% {
        transform: rotate(-8deg);
    }
    40% {
        transform: rotate(14deg);
    }
    50% {
        transform: rotate(-4deg);
    }
    60% {
        transform: rotate(10deg);
    }
    70% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
`

const WavingHandSpan = styled.span`
    animation: ${WaveAnimation} 2.5s linear infinite;
    transform-origin: 70% 70%;
    display: inline-block;
`

export default WavingHand