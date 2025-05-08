import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <div className="bg-gray-50">
      <Container className="py-16">
        <div className="mx-auto">
          <Title className="text-3xl font-bold mb-8 text-center">
            Privacy Policy
          </Title>

          <Card className="border-none shadow-md">
            <CardContent className="p-8 space-y-6">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600">
                  We collect information that you provide directly to us,
                  including name, email address, shipping address, payment
                  information, and any other information you choose to provide.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Process your orders and payments</li>
                  <li>Send you order confirmations and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  3. Information Sharing
                </h2>
                <p className="text-gray-600">
                  We do not sell or rent your personal information to third
                  parties. We may share your information with service providers
                  who assist in our operations and shipping partners to deliver
                  your orders.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  5. Cookies and Tracking
                </h2>
                <p className="text-gray-600">
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Your Rights</h2>
                <p className="text-gray-600">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to our use of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-gray-600">
                  Our services are not intended for children under 13. We do not
                  knowingly collect or maintain information from children under
                  13 years of age.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  8. Changes to Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  this page and updating the effective date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please
                  contact us through our contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
