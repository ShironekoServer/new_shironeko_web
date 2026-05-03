"use client";

import ItemComponent from "@/app/_components/item";

export default function Shop() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ShironekoServer ショップ</h1>
        <div className="columns is-multiline">
          <ItemComponent
            id="server-plan-basic"
            title="ベーシックプラン"
            description={
              <>
                <span>
                  無料プランではスペックが足りないけど、上位プランではスペックが余りすぎるサーバーのためのプランです。
                </span>
                <br />
                <small>メモリ 1GB CPU1コア ストレージ4GB</small>
              </>
            }
            price={100}
            isMonthly={true}
          />
          <ItemComponent
            id="server-plan-premium"
            title="プレミアムプラン"
            description={
              <>
                <span>
                  スペックがまあまあカツカツのサーバーのためのプラン。
                </span>
                <br />
                <small>メモリ 1.5GB CPU1.5コア ストレージ6GB</small>
              </>
            }
            price={250}
            isMonthly={true}
          />
          <ItemComponent
            id="server-plan-vip"
            title="VIPプラン"
            description={
              <>
                <span>本格的に事業を営みたいサーバーのためのプラン。</span>
                <br />
                <small>メモリ 2GB CPU2コア ストレージ8GB</small>
              </>
            }
            price={500}
            isMonthly={true}
          />
          <ItemComponent
            id="server-add"
            title="サーバーを追加"
            description={
              <>
                <span>サーバーをもう一つ購入します。</span>
                <br />
                <span className="has-text-danger">
                  ※ShironekoServerでは複数アカウントでのサーバー取得は禁止されています。
                </span>
              </>
            }
            price={300}
            isMonthly={false}
          />
        </div>
      </div>
    </section>
  );
}
