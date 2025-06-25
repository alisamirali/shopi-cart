import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/text";
import { Building2, Heart, ShieldCheck, Users2 } from "lucide-react";

const AboutPage = () => {
  const aboutInfo = [
    {
      title: "Our Mission",
      description:
        "To provide high-quality products at competitive prices while delivering exceptional customer service and maintaining sustainable business practices.",
      icon: <Building2 className="size-10 text-shop_dark_green" />,
    },
    {
      title: "Our Vision",
      description:
        "To become the leading e-commerce platform known for quality, reliability, and customer satisfaction in the digital marketplace.",
      icon: <ShieldCheck className="size-10 text-shop_dark_green" />,
    },
    {
      title: "Our Values",
      description:
        "We believe in transparency, integrity, and putting our customers first. Every decision we make is guided by these core principles.",
      icon: <Heart className="size-10 text-shop_dark_green" />,
    },
    {
      title: "Our Team",
      description:
        "A dedicated group of professionals committed to excellence in every aspect of our business, from product selection to customer support.",
      icon: <Users2 className="size-10 text-shop_dark_green" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Title className="text-3xl font-bold mb-4">About Us</Title>
          <p className="text-gray-600">
            Welcome to ShopiCart, your trusted destination for quality products
            and exceptional shopping experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutInfo.map((info, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <CardHeader className="bg-gray-50 border-b border-gray-100 p-6">
                <div className="flex items-center gap-4">
                  {info.icon}
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
