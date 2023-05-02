import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Background from "./Background";
import Info from "./Info";
import Photo from "./Photo";
import Summary from "./Summary";

export type ProfileCardProps = {
  age: number;
  backgroundAlt: string;
  backgroundSrc: string;
  followers: number;
  likes: number;
  location: string;
  name: string;
  photos: number;
  photoAlt: string;
  photoSrc: string;
} & HTMLAttributes<HTMLElement>;

export default function ProfileCard({
  age,
  backgroundAlt,
  backgroundSrc,
  followers,
  likes,
  location,
  name,
  photos,
  photoAlt,
  photoSrc,
}: ProfileCardProps) {
  return (
    <section className={clsx("")}>
      <Background
        alt={backgroundAlt}
        className={clsx("")}
        src={backgroundSrc}
      />
      <Photo alt={photoAlt} className={clsx("")} src={photoSrc} />
      <Info age={age} className={clsx("")} location={location} name={name} />
      <Summary
        className={clsx("")}
        followers={followers}
        likes={likes}
        photos={photos}
      />
    </section>
  );
}
