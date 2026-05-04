"use client";

import Link from "next/link";

export default function Commerce() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">特定商取引法に基づく表記</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <th>事業者名</th>
              <td>伊藤 悠貴</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                請求があった場合には速やかに開示いたします{" "}
                <small>
                  <small>*1</small>
                </small>
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                050-1726-7452{" "}
                <small>
                  <small>*2</small>
                </small>
                <br />
                24時間対応
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>
                <a href="mailto:support@shironekoserver.com">
                  support@shironekoserver.com
                </a>
                <br />
                24時間対応
              </td>
            </tr>
            <tr>
              <th>ホームページ</th>
              <td>
                <Link href="/">https://www.shironekoserver.com/</Link>
              </td>
            </tr>
            <tr>
              <th>商品販売価格</th>
              <td>各商品ページに記載の価格</td>
            </tr>
            <tr>
              <th>追加手数料</th>
              <td>なし</td>
            </tr>
            <tr>
              <th>支払い方法</th>
              <td>PayPay・クレジットカード・ステーブルコイン</td>
            </tr>
            <tr>
              <th>支払い時期</th>
              <td>
                PayPay・クレジットカード・ステーブルコイン：注文時に直ちに処理されます。
              </td>
            </tr>
            <tr>
              <th>商品の引渡時期</th>
              <td>注文時に直ちに引渡されます。</td>
            </tr>
            <tr>
              <th>返品・交換・キャンセルについて</th>
              <td>
                サブスクリプションはいつでも解約可能です（次回以降の決済からキャンセルされます）
                <br />
                サブスクリプション解約後も、月末まではサブスクリプションをご利用できます。
                <br />
                サブスクリプションの返品・交換は承っておりません。
              </td>
            </tr>
            <tr>
              <th>特別条件</th>
              <td>未成年者のご利用には保護者の同意が必要です。</td>
            </tr>
          </tbody>
        </table>
        <p>
          <small>
            <small>*1</small>{" "}
            個人事業主のため、Webサイトでの表示を省略させていただきます。請求があった場合には速やかに開示いたします。
          </small>
          <br />
          <small>
            <small>*2</small>{" "}
            お電話での問い合わせお場合、電話は自動音声で案内され、SMSでメールに誘導されます。
          </small>
        </p>
      </div>
    </section>
  );
}
