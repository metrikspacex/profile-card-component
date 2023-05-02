import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/profile-card/Background.module.scss";
import merge from "@/utilities/merge";

export type BackgroundProps = {
  alt: string;
  src: string;
} & HTMLAttributes<HTMLPictureElement>;

export default function Background({ alt, className, src }: BackgroundProps) {
  return (
    <picture className={merge(className, Styles.root)}>
      <img alt={alt} className={merge(Styles.background)} src={src} />
    </picture>
  );
}
