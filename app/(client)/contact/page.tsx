"use client";

import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvgarlgo");
  if (state.succeeded) {
    return (
      <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-shop_dark_green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We&apos;ll get back to
                you as soon as possible.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Title className="text-3xl font-bold mb-4">Contact Us</Title>
          <p className="text-gray-600">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      First Name
                    </label>
                    <Input placeholder="John" name="firstName" required />
                    <ValidationError
                      prefix="First Name"
                      field="firstName"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Last Name
                    </label>
                    <Input placeholder="Doe" name="lastName" required />
                    <ValidationError
                      prefix="Last Name"
                      field="lastName"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <Input
                    placeholder="How can we help you?"
                    name="subject"
                    required
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <Textarea
                    placeholder="Leave us a message..."
                    className="min-h-[150px]"
                    name="message"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={state.submitting}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
