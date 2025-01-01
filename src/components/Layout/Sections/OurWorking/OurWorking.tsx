import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../../lib/utils";

import styles from "./our-working-process-section.module.css";

import { IconPlus } from "@/components/Common/Icons/Plus";
import { IconMinus } from "@/components/Common/Icons/Minus";
import Heading from "../../Heading/Heading";
import Typography from "@/components/Common/Typography/typography";
import Card from "../../Card/Card";
import ButtonIcon from "@/components/Common/Button/Button-Icon";
import { useTranslations } from "next-intl";

interface WorkingProcess {
  title: string;
  description: string;
}

type OurWorkingProcessSectionProps = {
  data: WorkingProcess[];
} & HTMLAttributes<HTMLDivElement>;

const OurWorkingProcessSection = forwardRef<
  HTMLDivElement,
  OurWorkingProcessSectionProps
>(({ data, ...restProps }, ref) => {
  const className = mcn([
    styles["our-working-process-section"],
    restProps.className,
  ]);

  const t = useTranslations("Section.OurWorking");

  return (
    <section {...{ ref, ...restProps, className: `${className} mt-20` }}>
      <div className={styles["our-working-process-section__header"]}>
        <Heading
          className={styles["our-working-process-section__title"]}
          level={2}
        >
          {t("title")}
        </Heading>
        <Typography
          className={styles["our-working-process-section__description"]}
        >
          {t("description")}
        </Typography>
      </div>
      <div className={styles["our-working-process-section__list"]}>
        {data.map(({ title, description }, index) => (
          <Card
            key={title}
            className={styles["our-working-process-section__item"]}
            variant="tertiary"
            withShadow
            withBorder
            asChild
          >
            <details open={index == 0} name="our-working-process-section">
              <summary
                className={styles["our-working-process-section__summary"]}
              >
                <Typography
                  level={2}
                  className={
                    styles["our-working-process-section__item__number"]
                  }
                >
                  {index < 9 ? `0${index + 1}` : ++index}
                </Typography>
                <Typography
                  level={4}
                  className={styles["our-working-process-section__item__title"]}
                >
                  {title}
                </Typography>
                <ButtonIcon
                  className={styles["our-working-process-section__button"]}
                  variant="ghost-alt"
                  icon={
                    <>
                      <IconPlus
                        className={
                          styles[
                            "our-working-process-section__button__icon--plus"
                          ]
                        }
                        width={12.97}
                        height={12.97}
                      />
                      <IconMinus
                        className={
                          styles[
                            "our-working-process-section__button__icon--minus"
                          ]
                        }
                        width={12.97}
                        height={12.97}
                      />
                    </>
                  }
                  iconOnly
                  asChild
                >
                  <span />
                </ButtonIcon>
              </summary>
              <Typography
                className={styles["our-working-process-section__content"]}
              >
                {description}
              </Typography>
            </details>
          </Card>
        ))}
      </div>
    </section>
  );
});

OurWorkingProcessSection.displayName = "OurWorkingProcessSection";

export default OurWorkingProcessSection;
