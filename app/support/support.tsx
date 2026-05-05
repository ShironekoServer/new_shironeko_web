"use client";

export default function Support() {
  return (
    <section className="section">
      <div className="container content policy-page">
        <h1>お問い合わせ</h1>
        <p>
          購入前の質問、契約内容、請求、解約、障害、返金相談は以下の窓口で受け付けています。
        </p>

        <h2>電話</h2>
        <p>050-1726-7452</p>
        <p>受付時間: 平日10:00から18:00</p>

        <h2>メール</h2>
        <p>
          <a href="mailto:support@shironekoserver.com">
            support@shironekoserver.com
          </a>
        </p>
        <p>
          受付時間: 24時間
          <br />
          返信目安: 平日10:00から18:00の間に順次返信します。
        </p>

        <h2>Discord</h2>
        <p>
          Discordコミュニティでも一般的な質問を受け付けています。請求や個人情報を含む内容はメールでお問い合わせください。
        </p>
        <iframe
          title="ShironekoServer Discord"
          src="https://discord.com/widget?id=1360185660333363393&theme=dark"
          width="100%"
          height={500}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </section>
  );
}
