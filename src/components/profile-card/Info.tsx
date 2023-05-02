import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InfoProps = {
  age: number;
  location: string;
  name: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Info({ age, location, name }: InfoProps) {
  return (
    <div className={clsx("")}>
      <h1 className={clsx("")}>
        <span className={clsx("")}>{name}</span>
        <span className={clsx("")}>{age}</span>
      </h1>
      <h2 className={clsx("")}>{location}</h2>
    </div>
  );
}
