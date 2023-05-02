import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type PhotoProps = {
  alt: string;
  src: string;
} & HTMLAttributes<HTMLPictureElement>;

export default function Photo({ alt, src }: PhotoProps) {
  return (
    <picture className={clsx("")}>
      <img alt={alt} src={src} />
    </picture>
  );
}
