import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../../lib/utils";

import styles from "./team-section.module.css";

import { IconLinkedIn } from "@/components/Common/Icons/Linkin";
import Heading from "../../Heading/Heading";
import Typography from "@/components/Common/Typography/typography";
import Card from "../../Card/Card";
import ButtonIcon from "@/components/Common/Button/Button-Icon";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface TeamMember {
  name: string;
  title: string;
  about: string;
  picture: string;
  linkedin: string;
}

type TeamSectionProps = {
  data: TeamMember[];
} & HTMLAttributes<HTMLDivElement>;

const TeamSection = forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = mcn([styles["team-section"], restProps.className]);
    const t = useTranslations("Section.Team");
    return (
      <section {...{ ref, ...restProps, className: `${className} mt-20` }}>
        <div className={styles["team-section__header"]}>
          <Heading level={2}>{t("title")}</Heading>
          <Typography className={styles["team-section__description"]}>
            {t("description")}
          </Typography>
        </div>
        <div className={styles["team-section__list"]}>
          {data.map(({ name, title, about, picture, linkedin }) => (
            <Card
              key={`team-${name}-${title}`}
              variant="tertiary"
              className={styles["team-section__item"]}
              withBorder
              withShadow
            >
              <div className={styles["team-section__profile"]}>
                <Image
                  style={{
                    height: `103px`,
                    width: `auto`,
                  }}
                  src={picture}
                  width={103}
                  height={103}
                  alt={`${name} profile picture`}
                  loading="lazy"
                />
                <div className={styles["team-section__info"]}>
                  <ButtonIcon
                    icon={<IconLinkedIn />}
                    variant="secondary"
                    iconOnly
                    asChild
                    aria-label={`Visit ${name}'s LinkedIn profile`}
                  >
                    <a href={linkedin} target="_blank" rel="noreferrer" />
                  </ButtonIcon>

                  <div className={styles["team-section__details"]}>
                    <Typography level={4}>{name}</Typography>
                    <Typography>{title}</Typography>
                  </div>
                </div>
              </div>
              <Typography>{about}</Typography>
            </Card>
          ))}
        </div>
        {/* <div className={styles["team-section__button-container"]}>
          <Button
            variant="secondary"
            className={styles["team-section__button"]}
          >
            {t("button")}
          </Button>
        </div> */}
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";

export default TeamSection;
