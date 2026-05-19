"use client";

export default function Support() {
  return (
    <section className="section">
      <div className="container content policy-page">
        <h1>Support</h1>

        <p>
          Questions before purchase, contract details, billing, cancellations,
          service issues, and refund inquiries can be handled through the
          following contact methods.
        </p>

        <h2>Phone</h2>
        <p>050-1726-7452</p>
        <p>Business Hours: Weekdays, 10:00 AM – 6:00 PM</p>

        <h2>Email</h2>
        <p>
          <a href="mailto:support@shironekoserver.com">
            support@shironekoserver.com
          </a>
        </p>
        <p>
          Available: 24/7
          <br />
          Response Time: Replies are provided sequentially during business
          hours (weekdays, 10:00 AM – 6:00 PM).
        </p>

        <h2>Discord</h2>
        <p>
          General questions are also accepted through our Discord community.
          For billing matters or inquiries involving personal information,
          please contact us by email.
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