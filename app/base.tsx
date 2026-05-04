"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Link className="navbar-item" href="/" aria-label="トップへ">
              <Image
                className="navbar-logo"
                src="/logo.png"
                alt="ShironekoServer"
                width={210}
                height={70}
                priority
              />
            </Link>

            <button
              type="button"
              className={`navbar-burger ${navExpand ? "is-active" : ""}`}
              aria-label="メニュー"
              aria-expanded={navExpand}
              onClick={() => setNavExpand(!navExpand)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className={`navbar-menu ${navExpand ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link className="navbar-item" href="/shop">
                料金・商品
              </Link>
              <Link className="navbar-item" href="/support">
                お問い合わせ
              </Link>
              <Link className="navbar-item" href="/commerce">
                特定商取引法に基づく表記
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="button is-primary is-fullwidth"
                  href="https://wing.shironekoserver.com/"
                >
                  管理パネル
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
                  <Link href="/shop" className="button is-text">
                    料金・商品
                  </Link>
                </div>
                <div className="column is-narrow">
                  <Link href="/support" className="button is-text">
                    お問い合わせ
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

              <hr className="has-background-grey-lighter footer-divider" />

              <p className="mb-4">
                <strong className="has-text-primary">ShironekoServer</strong>
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
