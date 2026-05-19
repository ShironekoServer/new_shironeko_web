"use client";

import ItemComponent from "@/app/_components/item";
import Link from "next/link";

export default function Shop() {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title">Pricing & Products</h1>
          <p>
            ShironekoServer provides monthly server hosting for Discord bots,
            small-scale applications, and lightweight services. All prices are
            tax-inclusive, with no additional fees.
          </p>
          <p>
            Before purchasing, please review our{" "}
            <Link href="/commerce">
              Commercial Transactions Act Disclosure
            </Link>
            , <Link href="/terms">Terms of Service</Link>, and{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>

        <div className="columns is-multiline">
          <ItemComponent
            id="server-plan-basic"
            title="Basic Plan"
            description="An entry-level plan suitable for small bots and test applications."
            specs={[
              "1 GB Memory",
              "Equivalent to 1 CPU Core",
              "4 GB Storage",
            ]}
            price={100}
            isMonthly={true}
          />

          <ItemComponent
            id="server-plan-premium"
            title="Premium Plan"
            description="A standard plan suitable for always-online bots and lightweight web applications."
            specs={[
              "1.5 GB Memory",
              "Equivalent to 1.5 CPU Cores",
              "6 GB Storage",
            ]}
            price={250}
            isMonthly={true}
          />

          <ItemComponent
            id="server-plan-vip"
            title="VIP Plan"
            description="A higher-tier plan for users who want more room for stable operation."
            specs={[
              "2 GB Memory",
              "Equivalent to 2 CPU Cores",
              "8 GB Storage",
            ]}
            price={500}
            isMonthly={true}
          />

          <ItemComponent
            id="server-add"
            title="Additional Server"
            description="Adds an extra server slot to an existing account. Suitable for users who want to separate multiple projects."
            specs={[
              "1 Additional Server",
              "Added to an Existing Account",
              "Duplicate purchases across multiple accounts are prohibited",
            ]}
            price={300}
            isMonthly={true}
          />
        </div>

        <div className="notification is-warning is-light mt-5">
          <h2 className="title is-5">
            Service Activation, Renewal, and Cancellation
          </h2>

          <p>
            After payment is completed, services are usually available
            immediately through the control panel. Since this service is not
            subscription-based, a new purchase is required each month.
          </p>

          <p className="mt-3">
            Due to the nature of digital services, refunds are generally not
            available after service activation. However, if individual handling
            is required, such as for serious service issues or duplicate
            payments, please{" "}
            <Link href="/support">contact us</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}