import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Title } from "@/components/ui/text";
import { getDealProducts } from "@/sanity/queries";

const DealPage = async () => {
  const products = await getDealProducts();

  return (
    <div className="py-10 bg-deal-bg">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-[1px] text-base uppercase tracking-wide">
          Hot Deals of the Week
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.length > 0 ? (
            <>
              {products?.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </>
          ) : (
            <p>No products available</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default DealPage;
