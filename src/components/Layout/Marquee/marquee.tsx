"use client";

import { forwardRef, HTMLAttributes, ReactNode, useState, Children, cloneElement } from "react";
import { MarqueeContainer, MarqueeWrapper, MarqueeItem } from "./StyledMarquee";

type MarqueeProps = {
  speed?: number;
  direction?: "to-left" | "to-right";
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const duplicateChildren = (children: ReactNode, times: number) => {
  const childArray = Children.toArray(children);
  const duplicatedChildren = [];
  for (let i = 0; i < times; i++) {
    duplicatedChildren.push(
      ...childArray.map((child, index) =>
        cloneElement(child as React.ReactElement, {
          key: `child-${i}-${index}`,
        })
      )
    );
  }
  return duplicatedChildren;
};

const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  ({ direction = "to-left", speed = 25, children, ...restProps }, ref) => {
    const [paused, setPaused] = useState(false); // Trạng thái toàn cục

    const childArray = Children.toArray(children);
    const childCount = childArray.length;

    const duplicatedChildren =
      childCount < 6
        ? duplicateChildren(children, Math.ceil(12 / childCount))
        : childArray;

    const animationDirection = direction === "to-left" ? "normal" : "reverse";

    return (
      <MarqueeContainer
        ref={ref}
        {...restProps}
        onMouseEnter={() => setPaused(true)} // Dừng tất cả khi hover
        onMouseLeave={() => setPaused(false)} // Chạy lại khi rời chuột
      >
        <MarqueeWrapper>
          {new Array(2).fill(null).map((_, i) => (
            <MarqueeItem
              key={`marquee-item-${i}`}
              speed={speed}
              direction={animationDirection}
              $paused={paused} // Pass as $paused
              >
              {duplicatedChildren}
            </MarqueeItem>
          ))}
        </MarqueeWrapper>
      </MarqueeContainer>
    );
  }
);

Marquee.displayName = "Marquee";
export default Marquee;
