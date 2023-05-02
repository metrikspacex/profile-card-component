import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/profile-card/Summary.module.scss";
import merge from "@/utilities/merge";

export type SummaryProps = {
  followers: number;
  likes: number;
  photos: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Summary({
  className,
  followers,
  likes,
  photos,
}: SummaryProps) {
  return (
    <div className={merge(className, Styles.root)}>
      <div className={merge(Styles.container)}>
        <h1 className={merge(Styles.heading)}>{`${followers}K`}</h1>
        <h2 className={merge(Styles.subheading)}>Followers</h2>
      </div>
      <div className={merge(Styles.container)}>
        <h1 className={merge(Styles.heading)}>{`${likes}K`}</h1>
        <h2 className={merge(Styles.subheading)}>Likes</h2>
      </div>
      <div className={merge(Styles.container)}>
        <h1 className={merge(Styles.heading)}>{`${photos}K`}</h1>
        <h2 className={merge(Styles.subheading)}>Photos</h2>
      </div>
    </div>
  );
}
