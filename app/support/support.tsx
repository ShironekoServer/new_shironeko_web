"use client";

export default function Support() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-3">サポート</h1>
        <p>サポートはDiscordで受けることができます。</p>
        <iframe
          src="https://discord.com/widget?id=1360185660333363393&theme=dark"
          width="100%"
          height={500}
          {...({ allowtransparency: "true" } as any)}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </section>
  );
}
