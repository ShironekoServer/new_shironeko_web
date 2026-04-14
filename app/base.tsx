"use client";

import Link from "next/link";
import { useState } from "react";

export default function Base({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navExpand, setNavExpand] = useState(false);

  return (
    <html lang="ja">
      <body>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <img src="/siteimage.jpg" alt="ShironekoServer" />
            </Link>

            <a
              role="button"
              className={`navbar-burger ${navExpand ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => {
                setNavExpand(!navExpand);
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${navExpand ? "is-active" : ""}`}>
            <div className="navbar-start">
              <a className="navbar-item" href="https://discord.gg/MXdrkR7626">
                公式Discord
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">ドキュメント</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"> サーバーの作り方 </a>
                  <a className="navbar-item"> ファイルのアップロード方法 </a>
                  <a className="navbar-item"> コードの実行方法 </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item"> 準備中... </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="button is-primary"
                  href="https://wing.shironekoserver.com/"
                >
                  さっそく使ってみる！
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <div className="columns is-centered is-multiline">
                <div className="column is-narrow">
                  <a href="/terms" className="button is-text">
                    利用規約
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href="/privacy" className="button is-text">
                    プライバシーポリシー
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href="/commerce" className="button is-text">
                    特定商取引法に基づく表記
                  </a>
                </div>
              </div>

              <hr
                className="has-background-grey-lighter"
                style={{
                  height: "1px",
                  margin: "1.5rem auto",
                  maxWidth: "50%",
                }}
              />

              <p className="mb-4">
                <strong className="has-text-primary">ShironekoServer</strong> by{" "}
                <a href="https://nennneko5787.net/" className="has-text-info">
                  nennneko5787
                </a>{" "}
                and{" "}
                <a href="https://paicha.cloud" className="has-text-info">
                  nyaa
                </a>
                .
              </p>

              <p className="is-size-7 has-text-grey">
                © 2024 ShironekoServer. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
