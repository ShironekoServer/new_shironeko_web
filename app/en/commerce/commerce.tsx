import Link from "next/link";

export default function Commerce() {
  return (
    <section className="section">
      <div className="container content policy-page">
        <h1>Commercial Transactions Act Disclosure</h1>

        <table className="table is-bordered is-striped is-fullwidth">
          <tbody>
            <tr>
              <th>Business Name</th>
              <td>ShironekoServer</td>
            </tr>

            <tr>
              <th>Operator</th>
              <td>Yuki Ito</td>
            </tr>

            <tr>
              <th>Business Address</th>
              <td>
                In accordance with Article 11 of Japan&apos;s Specified
                Commercial Transactions Act, the address will be disclosed
                promptly in writing or by email upon request.
              </td>
            </tr>

            <tr>
              <th>Phone Number</th>
              <td>
                050-1726-7452
                <br />
                Business Hours: Weekdays, 10:00 AM – 6:00 PM
              </td>
            </tr>

            <tr>
              <th>Email Address</th>
              <td>
                <a href="mailto:support@shironekoserver.com">
                  support@shironekoserver.com
                </a>
              </td>
            </tr>

            <tr>
              <th>Website</th>
              <td>
                <Link href="/en">
                  https://www.shironekoserver.com/
                </Link>
              </td>
            </tr>

            <tr>
              <th>Pricing</th>
              <td>
                Prices are displayed on each product page inclusive of
                applicable taxes.
                <br />
                This service is provided as a one-time purchase digital
                service.
              </td>
            </tr>

            <tr>
              <th>Additional Fees</th>
              <td>
                No additional fees apply. Internet connection and communication
                costs are the responsibility of the customer.
              </td>
            </tr>

            <tr>
              <th>Payment Methods</th>
              <td>
                Credit card and any other payment methods displayed during
                checkout.
              </td>
            </tr>

            <tr>
              <th>Payment Timing</th>
              <td>Payment is processed at the time of purchase.</td>
            </tr>

            <tr>
              <th>Service Availability</th>
              <td>
                After payment is completed, the service is usually available
                immediately through the control panel. Service activation may
                be delayed due to technical issues, screening, identity
                verification, or other operational reasons.
              </td>
            </tr>

            <tr>
              <th>Returns and Refunds</th>
              <td>
                Due to the nature of digital services, returns and refunds are
                generally not available once service delivery has begun.
                Exceptions may be handled individually in cases such as
                duplicate payments, serious service defects, or inability to
                provide the service due to our circumstances.
              </td>
            </tr>

            <tr>
              <th>Cancellation Policy</th>
              <td>
                Due to the nature of the service, cancellations after purchase
                are generally not accepted.
              </td>
            </tr>

            <tr>
              <th>System Requirements</th>
              <td>
                Access to the control panel requires an up-to-date major web
                browser and an internet connection.
              </td>
            </tr>

            <tr>
              <th>Special Conditions</th>
              <td>
                Minors must obtain consent from a parent or legal guardian
                before using the service. Prohibited uses are defined in our{" "}
                <Link href="/en/terms">Terms of Service</Link>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}