"use client";

import ItemComponent from "@/app/_components/item";
import Link from "next/link";

export default function Shop() {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title">料金・商品</h1>
          <p>
            ShironekoServerは、Discord
            Botや小規模アプリケーションの運用に必要なサーバー環境を月額で提供します。
            すべて税込価格で、追加手数料はありません。
          </p>
          <p>
            購入前に
            <Link href="/commerce">特定商取引法に基づく表記</Link>、
            <Link href="/terms">利用規約</Link>、
            <Link href="/privacy">プライバシーポリシー</Link>
            をご確認ください。
          </p>
        </div>

        <div className="columns is-multiline">
          <ItemComponent
            id="server-plan-basic"
            title="ベーシックプラン"
            description="小規模なBotや検証用アプリに向いたエントリープランです。"
            specs={["メモリ 1GB", "CPU 1コア相当", "ストレージ 4GB"]}
            price={100}
            isMonthly={true}
          />
          <ItemComponent
            id="server-plan-premium"
            title="プレミアムプラン"
            description="常時稼働のBotや軽量なWebアプリに向いた標準プランです。"
            specs={["メモリ 1.5GB", "CPU 1.5コア相当", "ストレージ 6GB"]}
            price={250}
            isMonthly={true}
          />
          <ItemComponent
            id="server-plan-vip"
            title="VIPプラン"
            description="より余裕を持って運用したい方向けの上位プランです。"
            specs={["メモリ 2GB", "CPU 2コア相当", "ストレージ 8GB"]}
            price={500}
            isMonthly={true}
          />
          <ItemComponent
            id="server-add"
            title="追加サーバー"
            description="既存アカウントにサーバー枠を追加します。複数プロジェクトを分けて運用したい方向けです。"
            specs={[
              "追加サーバー 1台",
              "既存アカウントへの追加",
              "複数アカウントでの重複取得は禁止",
            ]}
            price={300}
            isMonthly={true}
          />
        </div>

        <div className="notification is-warning is-light mt-5">
          <h2 className="title is-5">提供開始・更新・キャンセル</h2>
          <p>
            決済完了後、通常は直ちに管理パネルで利用できます。サブスクリプションではないため、毎月購入必要があります。
          </p>
          <p className="mt-3">
            デジタルサービスの性質上、提供開始後の返金は原則として承っていません。
            ただし、重大な障害や重複決済など個別対応が必要な場合は
            <Link href="/support">お問い合わせ</Link>ください。
          </p>
        </div>
      </div>
    </section>
  );
}
