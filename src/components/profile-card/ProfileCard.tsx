import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/profile-card/ProfileCard.module.scss";
import merge from "@/utilities/merge";

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
  photoAlt: string;
  photoSrc: string;
  photos: number;
} & HTMLAttributes<HTMLElement>;

export default function ProfileCard({
  age,
  backgroundAlt,
  backgroundSrc,
  followers,
  likes,
  location,
  name,
  photoAlt,
  photoSrc,
  photos,
}: ProfileCardProps) {
  return (
    <section className={merge(Styles.root)}>
      <Background
        alt={backgroundAlt}
        className={merge(Styles.background)}
        src={backgroundSrc}
      />
      <Photo alt={photoAlt} className={merge(Styles.photo)} src={photoSrc} />
      <Info
        age={age}
        className={merge(Styles.info)}
        location={location}
        name={name}
      />
      <Summary
        className={merge(Styles.summary)}
        followers={followers}
        likes={likes}
        photos={photos}
      />
    </section>
  );
}
