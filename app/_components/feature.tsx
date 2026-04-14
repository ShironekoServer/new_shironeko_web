"use client";

import { ReactElement } from "react";
import style from "./feature.module.css";

export default function FeatureComponent(props: {
  title: string;
  icon: ReactElement;
  description: string;
  color: string;
}) {
  return (
    <div className="column is-4">
      <div className={style.featureCard}>
        <div className={`${style.featureIcon} has-text-${props.color}`}>
          {props.icon}
        </div>
        <h3 className="title is-4">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
