import styled, { keyframes, css } from "styled-components";

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - var(--c-marquee-item-gap)));
  }
`;

export const MarqueeContainer = styled.div`
  width: inherit;
  overflow: hidden;
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--c-marquee-item-gap, 37px);

  @media (min-width: 1366px) {
    --c-marquee-item-gap: 96px;
  }
`;

export const MarqueeItem = styled.div<{ speed: number; direction: "normal" | "reverse"; $paused: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: var(--c-marquee-item-gap);
  animation: ${marqueeAnimation} ${(props) => props.speed}s linear infinite;
  animation-direction: ${(props) => props.direction};
  animation-play-state: ${(props) => (props.$paused ? "paused" : "running")};
`;
