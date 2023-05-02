import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type BackgroundProps = {
  alt: string;
  src: string;
} & HTMLAttributes<HTMLPictureElement>;

export default function Background({ alt, src }: BackgroundProps) {
  return (
    <picture className={clsx("")}>
      <img alt={alt} className={clsx("")} src={src} />
    </picture>
  );
}
