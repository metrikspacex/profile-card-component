import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/profile-card/Photo.module.scss";
import merge from "@/utilities/merge";

export type PhotoProps = {
  alt: string;
  src: string;
} & HTMLAttributes<HTMLPictureElement>;

export default function Photo({ alt, className, src }: PhotoProps) {
  return (
    <picture className={merge(className, Styles.root)}>
      <img alt={alt} className={merge(Styles.photo)} src={src} />
    </picture>
  );
}
