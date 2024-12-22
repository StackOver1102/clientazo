import { forwardRef } from "react";

import styles from "./services-section.module.css";
import Heading from "@/components/Heading/Heading";
import Typography from "@/components/Typography/typography";
import styled from "styled-components";
import Table from "@/components/Table/Table";

const CustomSection = styled.section`
  margin-top: 60px;
`;
const ServicesSection = forwardRef<HTMLDivElement>(() => {
  const tableData = [
    {
      id: 1601,
      service: "YouTube Likes",
      ratings: "⭐⭐⭐⭐⭐ 126 Reviews",
      qna: 3,
      startTime: "0-6 Hours Start",
      minOrder: 20,
      maxOrder: 100000,
      speed: "50,000-100,000 per day",
      price: 2.99,
      refill: "30 Day Refill",
      geo: "Worldwide",
      restrictions:
        "Likes stats must be PUBLIC. No videos with country or age restrictions.",
      note: "This service may over-deliver by up to 20% to compensate for a potential drop.",
    },
    {
      id: 5607,
      service: "Instagram Likes",
      ratings: "⭐⭐⭐⭐⭐ 6 Reviews",
      qna: 0,
      startTime: "Instant Start",
      minOrder: 10,
      maxOrder: 300000,
      speed: "30,000-50,000 per day",
      price: 1.96,
      refill: "14 Day Refill",
      geo: "Worldwide",
      restrictions: "Account must be public. No restricted content.",
      note: "Likes are guaranteed within the refill period.",
    },
    // Add more rows here...
  ];
  return (
    <CustomSection className={styles["services-section"]}>
      <div className={styles["services-section__header"]}>
        <Heading level={2}>Services</Heading>
        <Typography className={styles["services-section__description"]}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </Typography>
      </div>
      <Table rows={tableData} />
    </CustomSection>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
