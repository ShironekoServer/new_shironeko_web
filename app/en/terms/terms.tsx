"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <section className="section">
      <div className="container content policy-page">
        <h1>Terms of Service</h1>
        <p>
          These Terms of Service govern the use of the hosting services
          provided by ShironekoServer. By using this service, users agree to
          these terms.
        </p>

        <h2>Article 1: Scope</h2>
        <p>
          These Terms apply to all relationships between the user and
          ShironekoServer regarding the use of this service.
        </p>

        <h2>Article 2: Service Description</h2>
        <p>
          This service is a subscription-based hosting service that provides a
          server environment for operating Discord bots, small-scale
          applications, lightweight background services, and similar software.
          Resource allocations, pricing, and renewal conditions for each plan
          are listed on the{" "}
          <Link href="/en/shop">Pricing & Products</Link> page.
        </p>

        <h2>Article 3: Account Management</h2>
        <p>
          Users are responsible for providing accurate registration information
          and managing their account credentials at their own responsibility.
          Lending, transferring, or sharing accounts with third parties is
          prohibited.
        </p>

        <h2>Article 4: Fees and Payment</h2>
        <p>
          Fees for paid plans are displayed as monthly prices inclusive of
          applicable taxes. Payment methods, payment timing, refunds, and
          cancellation conditions are defined in our{" "}
          <Link href="/en/commerce">
            Commercial Transactions Act Disclosure
          </Link>
          .
        </p>

        <h2>Article 5: Service Period and Renewal</h2>
        <p>
          This service is provided on a monthly basis.
          Subscriptions do not automatically renew, and users who wish to continue using the service must make a new purchase each month.
          Refunds or prorated reimbursements are not provided for unused portions of the service period.
        </p>

        <h2>Article 6: Prohibited Activities</h2>
        <p>
          Users must not engage in the following activities when using this
          service:
        </p>
        <ol>
          <li>Violating laws or public order and morals</li>
          <li>Criminal activity or activity that promotes criminal conduct</li>
          <li>
            Infringing upon third-party intellectual property, privacy,
            reputation, or other rights
          </li>
          <li>
            Unauthorized access, malware distribution, phishing, spam, or
            activities that generate excessive system load
          </li>
          <li>
            Use for adult content, violent or discriminatory material, illegal
            drugs, weapons, unauthorized financial services, or any use deemed
            inappropriate by payment providers or our company
          </li>
          <li>
            Interfering with the operation of our services or third-party
            services
          </li>
          <li>Any other activity deemed inappropriate by our company</li>
        </ol>

        <h2>Article 7: Suspension and Termination</h2>
        <p>
          If a user violates these Terms, fails to make required payments, or
          if deemed necessary for operational reasons, we may suspend all or
          part of the service or terminate the agreement without prior notice.
        </p>

        <h2>Article 8: Service Changes and Interruptions</h2>
        <p>
          We may modify, suspend, or discontinue all or part of the service due
          to maintenance, system failures, natural disasters, network outages,
          third-party service interruptions, or other unavoidable
          circumstances.
        </p>

        <h2>Article 9: Disclaimer of Liability</h2>
        <p>
          We do not guarantee the completeness, accuracy, usefulness, or
          fitness for a particular purpose of this service. Except in cases of
          intentional misconduct or gross negligence on our part, we shall not
          be liable for damages incurred by users in connection with the
          service.
        </p>

        <h2>Article 10: Personal Information</h2>
        <p>
          We handle users&apos; personal information in accordance with our{" "}
          <Link href="/en/privacy">Privacy Policy</Link>.
        </p>

        <h2>Article 11: Changes to These Terms</h2>
        <p>
          We may revise these Terms when necessary. Revised Terms shall become
          effective upon publication on this website.
        </p>

        <h2>Article 12: Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by the laws of Japan. In the event of a
          dispute relating to this service, the court having jurisdiction over
          our registered business location shall have exclusive jurisdiction as
          the court of first instance.
        </p>

        <p className="has-text-right">
          Effective Date: May 4, 2026
        </p>
      </div>
    </section>
  );
}