"use client";

import style from "./item.module.css";

export default function ItemComponent(props: {
  id: string;
  title: string;
  description: React.ReactNode;
  price: number;
  isMonthly: boolean;
}) {
  return (
    <div className="column is-4">
      <div className={style.featureCard}>
        <h3 className="title is-4">{props.title}</h3>
        <p>{props.description}</p>
        <p>
          {props.price}円{props.isMonthly ? "/ 月" : ""}
        </p>
        <a
          className="button is-primary"
          href={`https://wing.shironekoserver.com/shop?id=${props.id}`}
        >
          購入する
        </a>
      </div>
    </div>
  );
}
