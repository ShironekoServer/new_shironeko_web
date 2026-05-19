"use client";

export default function Privacy() {
  return (
    <section className="section">
      <div className="container content policy-page">
        <h1>Privacy Policy</h1>
        <p>
          ShironekoServer appropriately handles personal information collected
          in connection with the provision of this service in accordance with
          the following policy.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ol>
          <li>
            Information required for inquiries or identity verification, such
            as name, email address, and phone number
          </li>
          <li>
            Account ID, subscription plan, usage history, and support history
          </li>
          <li>
            Payment status, billing history, and subscription status
          </li>
          <li>
            Technical information necessary for service operation, such as
            access logs, IP addresses, and browser information
          </li>
        </ol>

        <h2>Purpose of Use</h2>
        <p>Collected information may be used for the following purposes:</p>
        <ol>
          <li>Providing, managing, and maintaining this service</li>
          <li>
            Identity verification, contract management, billing, payment
            processing, and cancellation handling
          </li>
          <li>
            Responding to inquiries, incidents, refund requests, and support
            matters
          </li>
          <li>
            Maintenance notifications, important service announcements, and
            fraud prevention
          </li>
          <li>
            Investigating and responding to Terms violations or unauthorized
            use
          </li>
          <li>
            Service improvements, quality enhancement, and statistical analysis
          </li>
        </ol>

        <h2>Payment Information</h2>
        <p>
          Payment information, including credit card details, is securely
          processed by payment service providers. We do not store credit card
          numbers directly.
        </p>

        <h2>Disclosure to Third Parties</h2>
        <p>
          We do not provide personal information to third parties except where
          required by law, with user consent, or where necessary to trusted
          service providers involved in payment processing, server operations,
          customer support, or other functions necessary to provide this
          service.
        </p>

        <h2>Security Measures</h2>
        <p>
          We implement necessary and appropriate security measures to prevent
          unauthorized access, leakage, loss, or alteration of personal
          information.
        </p>

        <h2>Access, Correction, and Deletion</h2>
        <p>
          Upon request from the user, we will appropriately respond to requests
          for disclosure, correction, addition, deletion, or suspension of use
          of personal information in accordance with applicable laws.
        </p>

        <h2>Cookies and Similar Technologies</h2>
        <p>
          This website may use cookies and similar technologies to improve user
          experience, analyze traffic, and prevent unauthorized use. Cookies
          may be disabled through browser settings; however, some features of
          the service may become unavailable.
        </p>

        <h2>Contact</h2>
        <p>
          For inquiries regarding this policy, please contact us at:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@shironekoserver.com">
            support@shironekoserver.com
          </a>
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may revise this policy as necessary. Changes become effective upon
          publication on this website.
        </p>

        <p className="has-text-right">
          Effective Date: May 4, 2026
        </p>
      </div>
    </section>
  );
}