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
                請求があった場合には遅滞なく開示いたします
                <br />
                ※個人事業主のため、上記のとおり省略しております
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                050-1726-7452
                <br />
                受付時間：平日 10:00〜18:00（土日祝を除く）
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>
                <a href="mailto:support@shironekoserver.com">
                  support@shironekoserver.com
                </a>
                <br />
                受付時間：24時間（返信は営業時間内に対応）
              </td>
            </tr>
            <tr>
              <th>ホームページ</th>
              <td>
                <Link href="/">https://www.shironekoserver.com/</Link>
              </td>
            </tr>
            <tr>
              <th>販売価格</th>
              <td>各商品ページに記載の価格（税込）</td>
            </tr>
            <tr>
              <th>追加手数料</th>
              <td>なし</td>
            </tr>
            <tr>
              <th>支払い方法</th>
              <td>クレジットカード・PayPay</td>
            </tr>
            <tr>
              <th>支払い時期</th>
              <td>クレジットカード・PayPay：注文時に直ちに決済されます</td>
            </tr>
            <tr>
              <th>サービス提供時期</th>
              <td>
                決済完了後、直ちにサーバーの利用権および管理パネルへのアクセスが付与されます
              </td>
            </tr>
            <tr>
              <th>返品・キャンセルについて</th>
              <td>
                本サービスはデジタルサービスの性質上、提供開始後の返金は原則として受け付けておりません。
                <br />
                サブスクリプションはいつでも解約可能であり、次回更新日以降の課金が停止されます。
                <br />
                解約後も契約期間終了日まではサービスをご利用いただけます。
                <br />
                重大な不具合等によりサービス提供が困難な場合は、個別に対応いたします。
              </td>
            </tr>
            <tr>
              <th>特別条件</th>
              <td>未成年者は保護者の同意を得た上でご利用ください。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
