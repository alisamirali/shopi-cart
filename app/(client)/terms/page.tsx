import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <div className="bg-gray-50">
      <Container className="py-16">
        <div className="mx-auto">
          <Title className="text-3xl font-bold mb-8 text-center">
            Terms & Conditions
          </Title>

          <Card className="border-none shadow-md">
            <CardContent className="p-8 space-y-6">
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing and using ShopiCart, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms &
                  Conditions. If you do not agree with any part of these terms,
                  please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. User Accounts</h2>
                <p className="text-gray-600">
                  When you create an account with us, you must provide accurate
                  and complete information. You are responsible for maintaining
                  the confidentiality of your account and password and for
                  restricting access to your computer.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  3. Product Information
                </h2>
                <p className="text-gray-600">
                  We strive to provide accurate product descriptions and pricing
                  information. However, we do not warrant that product
                  descriptions or prices are accurate, complete, reliable,
                  current, or error-free.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  4. Pricing and Payment
                </h2>
                <p className="text-gray-600">
                  All prices are subject to change without notice. We reserve
                  the right to modify or discontinue any product without notice.
                  We are not liable to you or any third party for any
                  modification, price change, or discontinuance.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  5. Shipping and Delivery
                </h2>
                <p className="text-gray-600">
                  Shipping times and costs may vary based on location and other
                  factors. We are not responsible for delays caused by customs,
                  natural disasters, or other circumstances beyond our control.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  6. Returns and Refunds
                </h2>
                <p className="text-gray-600">
                  Products may be returned within 30 days of delivery for a full
                  refund. Items must be unused and in their original packaging.
                  Shipping costs for returns are the responsibility of the
                  customer unless the item was received damaged or incorrect.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Privacy Policy</h2>
                <p className="text-gray-600">
                  Your use of ShopiCart is also governed by our Privacy Policy.
                  Please review our Privacy Policy to understand our practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  ShopiCart shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising from your
                  use of our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to update these Terms & Conditions at any
                  time. Changes will be effective immediately upon posting to
                  the website. Your continued use of ShopiCart after changes
                  constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold">10. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms & Conditions,
                  please contact us through our contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
