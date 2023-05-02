import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type SummaryProps = {
  followers: number;
  likes: number;
  photos: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Summary({ followers, likes, photos }: SummaryProps) {
  return (
    <div className={clsx("")}>
      <div className={clsx("")}>
        <h1 className={clsx("")}>{`${followers}K`}</h1>
        <h2 className={clsx("")}>Followers</h2>
      </div>
      <div className={clsx("")}>
        <h1 className={clsx("")}>{`${likes}K`}</h1>
        <h2 className={clsx("")}>Likes</h2>
      </div>
      <div className={clsx("")}>
        <h1 className={clsx("")}>{`${photos}K`}</h1>
        <h2 className={clsx("")}>Photos</h2>
      </div>
    </div>
  );
}
