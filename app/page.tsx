"use client";

import FeatureComponent from "@/app/_components/feature";
import {
  BarChartLine,
  Code,
  Database,
  Headset,
  Rocket,
  ShieldCheck,
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <section className="section" style={{ width: "100vw", height: "100vh" }}>
        <div
          className="container"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="title is-3">迷うのを辞めよう。</h1>
          <p className="subtitle">
            できるよ。<b>ShironekoServer</b>ならね。
          </p>
        </div>
      </section>

      <section className="section">
        <hr />
        <h2 className="title is-4 has-text-centered">ShironekoServerの特徴</h2>
        <div className="columns is-multiline">
          <FeatureComponent
            icon={<Rocket fontSize={50} />}
            color="primary"
            title="高速なサーバー"
            description="最新のハードウェアと最適化されたソフトウェアで、高速かつ安定した環境を提供します。"
          />
          <FeatureComponent
            icon={<ShieldCheck fontSize={50} />}
            color="info"
            title="24時間稼働"
            description="常時監視システムにより、あなたのサービスを24時間365日安定して稼働させることができます。"
          />
          <FeatureComponent
            icon={<Headset fontSize={50} />}
            color="success"
            title="充実したサポート"
            description="初心者の方でも安心して利用できるよう、丁寧なサポートを提供しています。"
          />
          <FeatureComponent
            icon={<Code fontSize={50} />}
            color="warning"
            title="多言語対応"
            description="Python、JavaScript、Javaなど、様々なプログラミング言語でのサービス運営に対応しています。"
          />
          <FeatureComponent
            icon={<Database fontSize={50} />}
            color="danger"
            title="データベース連携"
            description="MongoDBのデータベースがついてくるので、ファイルがごちゃごちゃする心配もありません。"
          />
          <FeatureComponent
            icon={<BarChartLine fontSize={50} />}
            color="link"
            title="スケーラブル"
            description="ボットの成長に合わせて、簡単にリソースをアップグレードすることができます。"
          />
        </div>
      </section>
    </>
  );
}
