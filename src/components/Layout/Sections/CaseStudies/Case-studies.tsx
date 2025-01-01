import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../../lib/utils";
import styles from "./case-studies-section.module.css";

import { IconArrow } from "@/components/Common/Icons/Arrow";
import Heading from "../../Heading/Heading";
import Typography from "@/components/Common/Typography/typography";
import Card from "../../Card/Card";
import ButtonIcon from "@/components/Common/Button/Button-Icon";
import { useTranslations } from "next-intl";

interface CaseStudy {
  content: string;
  link: {
    path: string;
    text: string;
  };
}

type CaseStudiesSectionProps = {
  data: CaseStudy[];
} & HTMLAttributes<HTMLDivElement>;

const CaseStudiesSection = forwardRef<HTMLDivElement, CaseStudiesSectionProps>(
  ({ data, ...restProps }, ref) => {
    const t = useTranslations("Section.CaseStudy");
    const className = mcn([
      styles["case-studies-section"],
      restProps.className,
    ]);

    return (
      <section {...{ ref, ...restProps, className: `${className} mt-20` }}>
        <div className={styles["case-studies-section__header"]}>
          <Heading level={2}>{t("caseStudy")}</Heading>
          <Typography className={styles["case-studies-section__description"]}>
            {t("description")}
          </Typography>
        </div>
        <div className={styles["case-studies-section__list"]}>
          {data.map(({ content, link }) => (
            <Card
              key={content}
              className={styles["case-studies-section__item"]}
              variant="secondary"
            >
              <Typography className={styles["case-studies-section__content"]}>
                {content}
              </Typography>
              <ButtonIcon
                className={styles["case-studies-section__button"]}
                variant="primary-plain"
                icon={<IconArrow />}
                asChild
                rotateArrowAnimation
              >
                <a href={link.path}>{link.text}</a>
              </ButtonIcon>
            </Card>
          ))}
        </div>
      </section>
    );
  }
);

CaseStudiesSection.displayName = "CaseStudiesSection";

export default CaseStudiesSection;
