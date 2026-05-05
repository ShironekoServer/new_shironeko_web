import Link from "next/link";

export default function Commerce() {
  return (
    <section className="section">
      <div className="container content policy-page">
        <h1>特定商取引法に基づく表記</h1>
        <table className="table is-bordered is-striped is-fullwidth">
          <tbody>
            <tr>
              <th>販売事業者</th>
              <td>ShironekoServer</td>
            </tr>
            <tr>
              <th>運営責任者</th>
              <td>伊藤 悠貴</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                ご請求があった場合には、特定商取引法第11条に基づき、遅滞なく書面または電子メールにて開示いたします。
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                050-1726-7452
                <br />
                受付時間: 平日10:00から18:00
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>
                <a href="mailto:support@shironekoserver.com">
                  support@shironekoserver.com
                </a>
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
              <td>
                各商品ページに税込価格で表示します。
                <br />
                本サービスは都度購入型のデジタルサービスです。
              </td>
            </tr>
            <tr>
              <th>商品代金以外の必要料金</th>
              <td>
                追加手数料はありません。インターネット接続料金、通信料金はお客様のご負担です。
              </td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>クレジットカードその他、決済画面に表示される方法</td>
            </tr>
            <tr>
              <th>支払時期</th>
              <td>注文時に決済されます。</td>
            </tr>
            <tr>
              <th>サービス提供時期</th>
              <td>
                決済完了後、通常は直ちに管理パネルで利用できます。障害、審査、本人確認等により提供開始が遅れる場合があります。
              </td>
            </tr>
            <tr>
              <th>返品・返金</th>
              <td>
                本サービスはデジタルサービスのため、提供開始後の返品・返金は原則として承っていません。
                重複決済、重大な提供不備、当社都合による提供不能がある場合は個別に対応します。
              </td>
            </tr>
            <tr>
              <th>解約・キャンセル</th>
              <td>
                商品の性質上、購入後のキャンセルは原則としてお受けできません。
              </td>
            </tr>
            <tr>
              <th>動作環境</th>
              <td>
                管理パネルの利用には、最新の主要ブラウザとインターネット接続が必要です。
              </td>
            </tr>
            <tr>
              <th>特別条件</th>
              <td>
                未成年の方は保護者の同意を得たうえでご利用ください。禁止用途は
                <Link href="/terms">利用規約</Link>に定めます。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
