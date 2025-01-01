import { ComponentProps, forwardRef } from "react";

import styles from "./footer.module.css";
import {
  IconPositivus,
  IconPositivusTypography,
} from "../../Common/Icons/positivus";

import { useTranslations } from "next-intl";
import Typography from "@/components/Common/Typography/typography";
import ButtonIcon from "@/components/Common/Button/Button-Icon";
import Heading from "../Heading/Heading";
import Button from "@/components/Common/Table/Button";
import { IconLinkedIn } from "@/components/Common/Icons/Linkin";
import { IconFacebook } from "@/components/Common/Icons/IconFacebook";
import { IconTwitter } from "@/components/Common/Icons/IconTwitter";

interface NavLink {
  title: string;
  url: string;
}

interface SocialMediaLink {
  title: string;
  url: string;
  icon: React.ReactNode;
}

type FooterProps = {
  navLinks?: NavLink[];
  socialMedia?: SocialMediaLink[];
  className?: string;
} & ComponentProps<"footer">;

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ className, ...props }, ref) => {
  const t = useTranslations("Footer");

  const menuData = [
    { title: t("menu.aboutUs"), url: "#about-us" },
    { title: t("menu.services"), url: "#services" },
    { title: t("menu.useCases"), url: "#use-cases" },
    { title: t("menu.pricing"), url: "#pricing" },
    { title: t("menu.blog"), url: "#blog" },
  ];

  const socialMedia =  [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <IconLinkedIn width={17} height={17} />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
      icon: <IconFacebook width={17} height={17} />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/",
      icon: <IconTwitter width={17} height={17} />,
    },
  ]
  return (
    <footer ref={ref} className={`${styles.footer} ${className}`} {...props}>
      <div className={styles["footer__header"]}>
        <div className={styles["footer__logo"]}>
          <IconPositivus className={styles["footer__icon"]} />
          <IconPositivusTypography className={styles["footer__icon-text"]} />
        </div>
        <div className={styles["footer__nav-list"]}>
          {menuData.length > 0 &&
            menuData.map((item) => (
              <Typography
                className={styles["footer__nav-item"]}
                key={item.title}
                asChild
              >
                <a href={item.url}>{item.title}</a>
              </Typography>
            ))}
        </div>
        <div className={styles["footer__social-media-list"]}>
          {socialMedia.length > 0 &&
            socialMedia.map((item) => (
              <ButtonIcon
                key={item.title}
                className={styles["footer__social-media-item"]}
                variant="ghost-alt"
                icon={item.icon}
                iconOnly
                asChild
                aria-label={item.title}
              >
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              </ButtonIcon>
            ))}
        </div>
      </div>
      <div className={styles["footer__contact-subscribe"]}>
        <div className={styles["footer__contact-info"]}>
          <Heading level={4} className={styles["footer__contact-info-heading"]}>
            {t("title")}
          </Heading>
          <div className={styles["footer__contact-info-list"]}>
            <Typography>{t("email")}: info@positivus.com</Typography>
            <Typography>{t("phone")}: 555-567-8901</Typography>
            <Typography>
              {t("address")}: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </Typography>
          </div>
        </div>
        <div className={styles["footer__subscribe"]}>
          <input
            className={styles["footer__input-subscribe"]}
            type="email"
            placeholder="Email"
          />
          <Button className={styles["footer__button-subscribe"]}>
            {t("button")}
          </Button>
        </div>
      </div>
      <div className={styles["footer__social-media-list-mobile"]}>
        {socialMedia.length > 0 &&
          socialMedia.map((item) => (
            <ButtonIcon
              key={item.title}
              className={styles["footer__social-media-item-mobile"]}
              variant="ghost-alt"
              icon={item.icon}
              iconOnly
              asChild
              aria-label={item.title}
            >
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </ButtonIcon>
          ))}
      </div>
      <div className={styles["footer__bottom"]}>
        <Typography>© 2023 Positivus. All Rights Reserved.</Typography>
        <div className={styles["footer__bottom-links"]}>
          <Typography asChild>
            <a href="#privacy">Privacy</a>
          </Typography>{" "}
          <Typography asChild>
            <a href="#policy">Policy</a>
          </Typography>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
