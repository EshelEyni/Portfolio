import { FC } from "react";
import { InViewSection } from "../InViewSection/InViewSection";
import "./SectionHeader.scss";

type SectionHeaderProps = {
  title: string;
  description: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <InViewSection>
      <header className="section-header">
        <h1>{title}</h1>
        <span />
        <p>{description}</p>
      </header>
    </InViewSection>
  );
};
