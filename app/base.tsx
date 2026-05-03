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
    <html lang="ja" className="has-navbar-fixed-top">
      <body>
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <img src="/logo.png" alt="ShironekoServer" />
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
              <Link className="navbar-item" href="/support">
                サポート
              </Link>

              <Link className="navbar-item" href="/shop">
                ショップ
              </Link>

              {/*
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
              */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="button is-primary is-fullwidth"
                  href="https://wing.shironekoserver.com/"
                >
                  パネルログイン
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
                  <Link href="/support" className="button is-text">
                    サポート
                  </Link>
                </div>
                <div className="column is-narrow">
                  <Link href="/terms" className="button is-text">
                    利用規約
                  </Link>
                </div>
                <div className="column is-narrow">
                  <Link href="/privacy" className="button is-text">
                    プライバシーポリシー
                  </Link>
                </div>
                <div className="column is-narrow">
                  <Link href="/commerce" className="button is-text">
                    特定商取引法に基づく表記
                  </Link>
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
                © 2026 ShironekoServer. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
