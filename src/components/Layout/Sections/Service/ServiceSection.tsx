import { forwardRef } from "react";

import styles from "./services-section.module.css";
import styled from "styled-components";
import Table from "@/components/Common/Table/Table";
import { IconArrow } from "@/components/Common/Icons/Arrow";
import { mcn } from "@/lib/utils";
import Heading from "../../Heading/Heading";
import Typography from "@/components/Common/Typography/typography";
import Card from "../../Card/Card";
import ButtonIcon from "@/components/Common/Button/Button-Icon";
import Image from "next/image";
import { useTranslations } from "next-intl";
import CardComponents from "@/components/Common/Card/CardComponents";

const CustomSection = styled.section`
  margin-top: 60px;
`;
const ServicesSection = forwardRef<HTMLDivElement>(() => {
  const t = useTranslations("Section.Service");
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
    {
      id: 1602,
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
      id: 5608,
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
    {
      id: 1622,
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
      id: 5609,
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
    {
      id: 1603,
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
      id: 5610,
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
    {
      id: 1605,
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
      id: 5611,
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
    {
      id: 1606,
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
      id: 5612,
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
    {
      id: 1608,
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
      id: 5614,
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
    {
      id: 1610,
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
      id: 5620,
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
  const data = [
    {
      card: { variant: "tertiary" },
      header: { titles: ["Search engine", "optimization"], variant: "primary" },
      body: {
        src: "/assets/images/service-magnifier-web-search-with-elements.webp",
        alt: "Magnifier Web Search with Elements",
        width: 165,
        height: 129,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "primary" },
      header: { titles: ["Pay-per-click", "advertising"], variant: "ghost" },
      body: {
        src: "/assets/images/service-selecting-a-value-in-the-browser-window.webp",
        alt: "Selecting a Value in The Browser Window",
        width: 165,
        height: 166.47,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "secondary" },
      header: { titles: ["Social media", "marketing"], variant: "ghost" },
      body: {
        src: "/assets/images/service-browser-window-with-emoticon-likes-and-stars-around.webp",
        alt: "Browser Window with Emoticon Likes and Stars Around",
        width: 127.12,
        height: 129,
      },
      button: { variant: "ghost-alt" },
    },
    {
      card: { variant: "tertiary" },
      header: { titles: ["Email", "marketing"], variant: "primary" },
      body: {
        src: "/assets/images/service-sending-messages-from-one-place-to-another.webp",
        alt: "Sending Messages from One Place to Another",
        width: 155,
        height: 142,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "primary" },
      header: { titles: ["Content", "Creation"], variant: "ghost" },
      body: {
        src: "/assets/images/service-many-browser-windows-with-different-information.webp",
        alt: "Many Browser Windows with Different Information",
        width: 138.72,
        height: 129,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "secondary" },
      header: { titles: ["Analytics and", "Tracking"], variant: "primary" },
      body: {
        src: "/assets/images/service-volumetric-analytics-of-different-types-in-web-browsers.webp",
        alt: "Volumetric Analytics of Different Types in Web Browsers",
        width: 157.78,
        height: 129,
      },
      button: { variant: "ghost-alt" },
    },
  ];
  return (
    <CustomSection className={styles["services-section"]}>
      <div className={styles["services-section__header"]}>
        <Heading level={2}>{t("service")}</Heading>
        <Typography className={styles["services-section__description"]}>
          {t("description")}
        </Typography>
      </div>
      {/* <Table rows={tableData} /> */}
      <div className={styles["services-section__list"]}>
        {data.map((service) => (
          <CardComponents
            key={service.header.titles.join("")}
            imageSrc={service.body.src}
            title={service.header.titles.join(" ")}
            description={service.body.alt}
            price="51 đ - 550.000 đ"
            reviews="⭐⭐⭐⭐⭐ 432 Reviews"
            seller="marco_2e46ux"
            product="Dịch vụ Telegram"
          />
        ))}
      </div>
      <div className={`${styles["services-section__header"]} mt-20`}>
        <Heading level={2}>{t("service")}</Heading>
        <Typography className={styles["services-section__description"]}>
          {t("description")}
        </Typography>
      </div>

      <div className={styles["services-section__list"]}>
        {data.map((service) => (
          <Card
            key={service.header.titles.join("")}
            className={styles["services-section__item"]}
            variant={
              service.card.variant as "tertiary" | "primary" | "secondary"
            }
            withShadow
            withBorder
          >
            <div className={styles["services-section__content"]}>
              <div>
                {service.header.titles.map((title, index) => (
                  <Heading
                    key={index}
                    level={3}
                    variant={service.header.variant as "primary" | "ghost"}
                  >
                    {title}
                  </Heading>
                ))}
              </div>

              <ButtonIcon
                className={mcn([
                  styles["services-section__button"],
                  styles["services-section__button--desktop"],
                ])}
                icon={
                  <IconArrow
                    className={styles["services-section__button__icon"]}
                  />
                }
                variant={
                  service.button?.variant as
                    | "primary"
                    | "secondary"
                    | "ghost"
                    | "ghost-alt"
                    | "primary-alt"
                    | "primary-plain"
                    | "secondary-alt"
                    | "secondary-plain"
                    | "ghost-plain"
                    | "outline"
                }
                aria-label="Learn more"
                rotateArrowAnimation
                asChild
              >
                <a href="#learn-more">Learn More</a>
              </ButtonIcon>
            </div>
            <div className={styles["services-section__image-wrapper"]}>
              <ButtonIcon
                className={mcn([
                  styles["services-section__button"],
                  styles["services-section__button--mobile"],
                ])}
                icon={<IconArrow />}
                variant={
                  service.button?.variant as
                    | "primary"
                    | "secondary"
                    | "ghost"
                    | "ghost-alt"
                    | "primary-alt"
                    | "primary-plain"
                    | "secondary-alt"
                    | "secondary-plain"
                    | "ghost-plain"
                    | "outline"
                }
                aria-label="Learn more"
                iconOnly
                rotateArrowAnimation
                asChild
              >
                <a href="#learn-more">Learn More</a>
              </ButtonIcon>
              <Image
                className={styles["services-section__image"]}
                {...service.body}
                alt={service.body.alt}
                loading="lazy"
              />
            </div>
          </Card>
        ))}
      </div>
    </CustomSection>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
