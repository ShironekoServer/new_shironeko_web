"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Lang = "ja" | "en";

export default function Base({
  children,
  lang = "ja",
}: {
  children: React.ReactNode;
  lang?: Lang;
}) {
  const [navExpand, setNavExpand] = useState(false);
  const pathname = usePathname();

  const t = {
    ja: {
      top: "トップへ",
      menu: "メニュー",
      shop: "料金・商品",
      support: "お問い合わせ",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      commerce: "特定商取引法に基づく表記",
      panel: "管理パネル",
      language: "言語",
    },
    en: {
      top: "Go to Home",
      menu: "Menu",
      shop: "Pricing & Products",
      support: "Support",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      commerce: "Commercial Transactions Act Disclosure",
      panel: "Control Panel",
      language: "Language",
    },
  } as const;

  const text = t[lang];

  const prefix = lang === "en" ? "/en" : "";

  function switchLanguage(nextLang: Lang) {
    let path = pathname;

    if (path.startsWith("/en")) {
      path = path.replace(/^\/en/, "") || "/";
    }

    const nextPath =
      nextLang === "en"
        ? `/en${path === "/" ? "" : path}`
        : path;

    window.location.href = nextPath;
  }

  return (
    <html lang={lang} className="has-navbar-fixed-top">
      <body>
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link
              className="navbar-item"
              href={prefix || "/"}
              aria-label={text.top}
            >
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
              className={`navbar-burger ${
                navExpand ? "is-active" : ""
              }`}
              aria-label={text.menu}
              aria-expanded={navExpand}
              onClick={() => setNavExpand(!navExpand)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div
            className={`navbar-menu ${
              navExpand ? "is-active" : ""
            }`}
          >
            <div className="navbar-start">
              <Link
                className="navbar-item"
                href={`${prefix}/shop`}
              >
                {text.shop}
              </Link>

              <Link
                className="navbar-item"
                href={`${prefix}/support`}
              >
                {text.support}
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <div className="control">
                    <div className="select">
                      <select
                        aria-label={text.language}
                        value={lang}
                        onChange={(e) =>
                          switchLanguage(
                            e.target.value as Lang
                          )
                        }
                      >
                        <option value="ja">
                          日本語
                        </option>
                        <option value="en">
                          English
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="control">
                    <a
                      className="button is-primary is-fullwidth"
                      href="https://wing.shironekoserver.com/"
                    >
                      {text.panel}
                    </a>
                  </div>
                </div>
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
                  <Link
                    href={`${prefix}/shop`}
                    className="button is-text"
                  >
                    {text.shop}
                  </Link>
                </div>

                <div className="column is-narrow">
                  <Link
                    href={`${prefix}/support`}
                    className="button is-text"
                  >
                    {text.support}
                  </Link>
                </div>

                <div className="column is-narrow">
                  <Link
                    href={`${prefix}/terms`}
                    className="button is-text"
                  >
                    {text.terms}
                  </Link>
                </div>

                <div className="column is-narrow">
                  <Link
                    href={`${prefix}/privacy`}
                    className="button is-text"
                  >
                    {text.privacy}
                  </Link>
                </div>

                <div className="column is-narrow">
                  <Link
                    href={`${prefix}/commerce`}
                    className="button is-text"
                  >
                    {text.commerce}
                  </Link>
                </div>
              </div>

              <hr className="has-background-grey-lighter footer-divider" />

              <p className="mb-4">
                <strong className="has-text-primary">
                  ShironekoServer
                </strong>
              </p>

              <p className="is-size-7 has-text-grey">
                © 2026 ShironekoServer. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}