"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";
import { Title } from "@/components/ui/text";

export default function HelpPage() {
  return (
    <Container>
      <div className="py-10">
        <Title className="text-3xl font-bold mb-8 text-center">
          Help Center
        </Title>

        <Card className="p-6">
          <div className="space-y-6">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How Can We Help You?
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to our Help Center. We&apos;ve organized helpful
                information and common questions to assist you better. If you
                can&apos;t find what you&apos;re looking for, please don&apos;t
                hesitate to contact our support team.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Quick Support Guides
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="account">
                  <AccordionTrigger>Account Management</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>How to create an account</li>
                      <li>Updating your profile information</li>
                      <li>Managing your password</li>
                      <li>Email preferences and notifications</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="orders">
                  <AccordionTrigger>Orders & Shipping</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Tracking your order</li>
                      <li>Shipping methods and delivery times</li>
                      <li>Order cancellation process</li>
                      <li>International shipping information</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns">
                  <AccordionTrigger>Returns & Refunds</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Return policy overview</li>
                      <li>How to initiate a return</li>
                      <li>Refund processing timeline</li>
                      <li>Return shipping guidelines</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical">
                  <AccordionTrigger>Technical Support</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Website navigation help</li>
                      <li>Payment issues troubleshooting</li>
                      <li>Mobile app support</li>
                      <li>Browser compatibility</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-gray-600">support@shopicart.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Response within 24 hours
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Phone Support</h4>
                  <p className="text-gray-600">+20-111-418-1442</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">
                Self-Help Resources
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="/faqs"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold mb-2">FAQs</h4>
                  <p className="text-sm text-gray-600">
                    Browse our frequently asked questions
                  </p>
                </a>
                <a
                  href="/terms"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold mb-2">Terms & Conditions</h4>
                  <p className="text-sm text-gray-600">
                    Review our terms of service
                  </p>
                </a>
                <a
                  href="/privacy"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold mb-2">Privacy Policy</h4>
                  <p className="text-sm text-gray-600">
                    Learn about data protection
                  </p>
                </a>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </Container>
  );
}
