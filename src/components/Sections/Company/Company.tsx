"use client";
import { forwardRef } from "react";
import styles from "./company-section.module.css";
import Marquee from "@/components/Marquee/marquee";
import styled from "styled-components";

const CustomImg = styled.img`
  width: auto !important;
  max-width: fit-content !important;
`;
const CompanySection = forwardRef<HTMLDivElement>(() => {
  const data = [
    {
      image: "/assets/images/company-amazon.webp",
      alt: "Amazon",
      width: 124.11,
      height: 48,
      url: "https://www.amazon.com",
    },
    {
      image: "/assets/images/company-dribbble.webp",
      alt: "Dribbble",
      width: 126.37,
      height: 48,
      url: "https://dribbble.com",
    },
    {
      image: "/assets/images/company-hubspot.webp",
      alt: "HubSpot",
      width: 128.63,
      height: 48,
      url: "https://www.hubspot.com",
    },
    {
      image: "/assets/images/company-notion.webp",
      alt: "Notion",
      width: 145.55,
      height: 48,
      url: "https://www.notion.so",
    },
    {
      image: "/assets/images/company-netflix.webp",
      alt: "Netflix",
      width: 128.63,
      height: 48,
      url: "https://www.netflix.com",
    },
    {
      image: "/assets/images/company-zoom.webp",
      alt: "Zoom",
      width: 110.57,
      height: 48,
      url: "https://zoom.us",
    },
  ];
  return (
    <section className={styles["company-section"]}>
      <Marquee className={styles["company-section__list"]} speed={25}>
        {data.map(({ image, width, height, alt, url }) => (
          <a
            key={`company-list-1-${alt}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <CustomImg
              style={{
                height: `${height}px`,
              }}
              {...{ src: image, width, height, alt }}
            />
          </a>
        ))}
      </Marquee>
      <Marquee
        className={styles["company-section__list"]}
        speed={25}
        direction="to-right"
      >
        {data.reverse().map(({ image, width, height, alt, url }) => (
          <a
            key={`company-list-2-${alt}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <CustomImg
              style={{
                height: `${height}px`,
              }}
              {...{ src: image, width, height, alt }}
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
});

CompanySection.displayName = "CompanySection";

export default CompanySection;
