import type { HTMLAttributes } from "react";

import Styles from "@/styles/components/profile-card/Info.module.scss";
import merge from "@/utilities/merge";

export type InfoProps = {
  age: number;
  location: string;
  name: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Info({ age, className, location, name }: InfoProps) {
  return (
    <div className={merge(className, Styles.root)}>
      <h1 className={merge(Styles.container)}>
        <span className={merge(Styles.name)}>{name}</span>
        <span className={merge(Styles.age)}>{age}</span>
      </h1>
      <h2 className={merge(Styles.location)}>{location}</h2>
    </div>
  );
}
