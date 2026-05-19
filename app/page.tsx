import FeatureComponent from "@/app/_components/feature";
import Link from "next/link";
import Image from "next/image";
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
      <section className="section hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="has-text-weight-semibold has-text-primary">
              Discord Bot・小規模アプリ向けホスティング
            </p>
            <h1 className="title is-2">ShironekoServer</h1>
            <p className="subtitle">
              月額100円から使える、個人開発者向けのホスティング環境です。
              料金、提供内容、更新課金、キャンセル条件を購入前に確認できます。
            </p>
            <div className="buttons">
              <Link className="button is-primary" href="/shop">
                料金を見る
              </Link>
              <Link className="button is-light" href="/support">
                問い合わせる
              </Link>
            </div>
          </div>
          <div className="hero-logo" aria-hidden="true">
            <Image
              src="/logo.png"
              alt=""
              width={1500}
              height={500}
              priority
              sizes="(max-width: 768px) 80vw, 320px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title is-4 has-text-centered">
            ShironekoServerでできること
          </h2>
          <div className="columns is-multiline">
            <FeatureComponent
              icon={<Rocket fontSize={50} />}
              color="primary"
              title="すぐに使える環境"
              description="決済完了後、管理パネルからサーバー環境を利用できます。Discord Botや小規模Webアプリの運用に向いています。"
            />
            <FeatureComponent
              icon={<ShieldCheck fontSize={50} />}
              color="info"
              title="継続運用を重視"
              description="安定稼働を前提に、必要に応じてメンテナンス告知や障害対応を行います。"
            />
            <FeatureComponent
              icon={<Headset fontSize={50} />}
              color="success"
              title="問い合わせ窓口"
              description="購入前後の質問、請求、解約、障害についてメールまたはDiscordで受け付けます。"
            />
            <FeatureComponent
              icon={<Code fontSize={50} />}
              color="warning"
              title="開発者向け"
              description="Python、JavaScript、Javaなど、Botや軽量な常駐プログラムの運用を想定しています。"
            />
            <FeatureComponent
              icon={<Database fontSize={50} />}
              color="danger"
              title="プラン別リソース"
              description="メモリ、CPU、ストレージ容量をプランごとに明示しています。用途に合わせて選択できます。"
            />
            <FeatureComponent
              icon={<BarChartLine fontSize={50} />}
              color="link"
              title="買い切り"
              description="各プランは買い切りです。そのため、買いすぎてしまうことはありません"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notification is-info is-light">
            <h2 className="title is-5">購入前にご確認ください</h2>
            <p>
              本サービスはデジタルサービスです。提供開始後の返金は原則として承っていません。
              解約、返金、問い合わせ、事業者情報は以下のページで確認できます。
            </p>
            <div className="buttons mt-4">
              <Link className="button is-info" href="/commerce">
                特商法表記
              </Link>
              <Link className="button is-light" href="/terms">
                利用規約
              </Link>
              <Link className="button is-light" href="/privacy">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
