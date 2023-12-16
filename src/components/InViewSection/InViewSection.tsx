import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type InViewSectionProps = {
  children: React.ReactNode;
  threshold?: number;
};

export const InViewSection: FC<InViewSectionProps> = ({
  children,
  threshold = 0.1,
}) => {
  const options = { threshold };
  const { ref, inView, entry } = useInView(options);

  useEffect(() => {
    if (!inView || !entry?.target) return;
    entry.target.classList.remove("section--hidden");
  }, [inView, entry]);

  return (
    <div className="section section--hidden" ref={ref}>
      {children}
    </div>
  );
};
