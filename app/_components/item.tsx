"use client";

import Link from "next/link";
import style from "./item.module.css";

export default function ItemComponent(props: {
  id: string;
  title: string;
  description: React.ReactNode;
  specs: string[];
  price: number;
  isMonthly: boolean;
}) {
  return (
    <div className="column is-4">
      <div className={style.featureCard}>
        <div>
          <h3 className="title is-4">{props.title}</h3>
          <p>{props.description}</p>
          <ul className={style.specList}>
            {props.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="title is-5 mb-3">
            {props.price.toLocaleString("ja-JP")}円
            {props.isMonthly ? " / 月（税込）" : "（税込）"}
          </p>
          <a
            className="button is-primary is-fullwidth"
            href={`https://wing.shironekoserver.com/shop?id=${props.id}`}
          >
            購入手続きへ
          </a>
          <p className="is-size-7 has-text-grey mt-3">
            決済前に商品内容、金額、更新条件を確認できます。
          </p>
          <p className="is-size-7 mt-2">
            <Link href="/commerce">返金・キャンセル条件</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
