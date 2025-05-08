import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsPage = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods. All transactions are processed through secure payment gateways.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Delivery times vary depending on your location and the shipping method selected. Standard shipping typically takes 3-7 business days, while express shipping can take 1-3 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Please refer to our Terms & Conditions page for detailed information.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping costs and delivery times vary by location. You can see the available shipping options during checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package's status and estimated delivery date.",
    },
    {
      question: "What if my order arrives damaged?",
      answer:
        "If your order arrives damaged, please contact our customer service team immediately with photos of the damage. We'll arrange for a replacement or refund.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placing it. After that, the order may have entered processing and cannot be changed.",
    },
    {
      question: "Do you offer warranty on products?",
      answer:
        "Warranty coverage varies by product. Most electronics come with a manufacturer's warranty. Specific warranty information is listed on individual product pages.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team through our Contact page, by email, or by using the chat feature on our website. We aim to respond to all inquiries within 24 hours.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <Title className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </Title>

          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left py-4 hover:text-shop_dark_green text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default FAQsPage;
