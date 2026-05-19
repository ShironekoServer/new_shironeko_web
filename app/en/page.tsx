import FeatureComponent from "@/app/_components/feature";
import Link from "next/link";
import Image from "next/image";
import {
  BarChartLine,
  Code,
  Database,
  Headset,
  Rocket,
  ShieldCheck,
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <section className="section hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="has-text-weight-semibold has-text-primary">
              Hosting for Discord bots and small-scale services
            </p>
            <h1 className="title is-2">ShironekoServer</h1>
            <p className="subtitle">
              This is a hosting service for individual developers, starting at just 1$ per month.
              You can review pricing, features, billing terms, and cancellation policies before purchasing.
            </p>
            <div className="buttons">
              <Link className="button is-primary" href="/en/shop">
                View Prices
              </Link>
              <Link className="button is-light" href="/en/support">
                Contact us
              </Link>
            </div>
          </div>
          <div className="hero-logo" aria-hidden="true">
            <Image
              src="/logo.png"
              alt=""
              width={1500}
              height={500}
              priority
              sizes="(max-width: 768px) 80vw, 320px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title is-4 has-text-centered">
            What You Can Do with ShironekoServer
          </h2>
          <div className="columns is-multiline">
            <FeatureComponent
              icon={<Rocket fontSize={50} />}
              color="primary"
              title="Ready-to-use environment"
              description="Once payment is complete, you can access the server environment via the control panel. It is ideal for running Discord bots and small-scale web applications."
            />
            <FeatureComponent
              icon={<ShieldCheck fontSize={50} />}
              color="info"
              title="Emphasis on long-term operation"
              description="With the goal of ensuring stable operation, we will issue maintenance notices and address any issues as needed."
            />
            <FeatureComponent
              icon={<Headset fontSize={50} />}
              color="success"
              title="Contact Form"
              description="We accept inquiries regarding pre- and post-purchase questions, billing, cancellations, and technical issues via email or Discord."
            />
            <FeatureComponent
              icon={<Code fontSize={50} />}
              color="warning"
              title="For Developers"
              description="We anticipate using Python, JavaScript, Java, and other languages for running bots and lightweight background programs."
            />
            <FeatureComponent
              icon={<Database fontSize={50} />}
              color="danger"
              title="Resources by Plan"
              description="We clearly list the memory, CPU, and storage capacity for each plan. You can choose the plan that best suits your needs."
            />
            <FeatureComponent
              icon={<BarChartLine fontSize={50} />}
              color="link"
              title="One-time purchase"
              description="Each plan is a one-time purchase. Therefore, you won’t end up buying more than you need."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notification is-info is-light">
            <h2 className="title is-5">Please review this information before purchasing</h2>
            <p>
              This is a digital service. As a general rule, we do not issue refunds after the service has begun.
              Information regarding cancellation, refunds, inquiries, and the service provider can be found on the following page.
            </p>
            <div className="buttons mt-4">
              <Link className="button is-light" href="/en/terms">
                Terms of Service
              </Link>
              <Link className="button is-light" href="/en/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
