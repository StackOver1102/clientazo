import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../../lib/utils";
import styles from "./cta-section.module.css";
import Card from "../../Card/Card";
import Typography from "@/components/Common/Typography/typography";
import Button from "@/components/Common/Table/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";


type CtaSectionProps = HTMLAttributes<HTMLDivElement>;

const CtaSection = forwardRef<HTMLDivElement, CtaSectionProps>(
  ({ ...restProps }, ref) => {
    const className = mcn([styles["cta-section"], restProps.className]);
    const t = useTranslations("Section.Cta");
    return (
      <section {...{ ref, ...restProps, className:`${className} mt-20` }}>
        <Card className={styles["cta-section__wrapper"]} variant="tertiary">
          <div>
            <Typography
              className={styles["cta-section__title"]}
              level={3}
              asChild
            >
              <h3>{t("title")}</h3>
            </Typography>
            <Typography className={styles["cta-section__description"]}>
              {t("description")}
            </Typography>
            <Button
              variant="secondary"
              className={styles["cta-section__button"]}
            >
              {t("button")}
            </Button>
          </div>
          <div
            className={mcn([
              styles["cta-section__illustration"],
              styles["cta-section__illustration--desktop"],
            ])}
          >
            <Image
              className={styles["cta-section__illustration-image"]}
              src="/assets/images/cta-illustration.webp"
              width={359}
              height={394.27}
              alt=""
              loading="lazy"
            />
          </div>
        </Card>
      </section>
    );
  }
);

CtaSection.displayName = "CtaSection";

export default CtaSection;
