"use client";

export default function Commerce() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">特定商取引法に基づく表記</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <th>代表者</th>
              <td>丸山 紘汰</td>
            </tr>
            <tr>
              <th>運営統括責任者</th>
              <td>丸山 紘汰</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>神奈川県横浜市神奈川区金港町5-14 クアドリフォリオ8階</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                050-1726-7452{" "}
                <small>
                  <small>*1</small>
                </small>
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
              <td>https://shironekoserver.com/</td>
            </tr>
            <tr>
              <th>追加手数料等の追加料金</th>
              <td>なし</td>
            </tr>
            <tr>
              <th>受け付け可能な決済手段</th>
              <td>PayPay</td>
            </tr>
            <tr>
              <th>決済期間</th>
              <td>ただちに処理されます</td>
            </tr>
            <tr>
              <th>返品・交換・キャンセルについて</th>
              <td>サービスの性質上、返品・返金はお受けしておりません</td>
            </tr>
            <tr>
              <th>引渡時期</th>
              <td>
                ご購入手続き後、即日でご利用可能です（特別な条件がある場合を除く）
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
            お電話のお問い合わせに関しては承っておりません。電話は自動音声で案内され、SMSでメールに誘導されます。
          </small>
        </p>
      </div>
    </section>
  );
}
