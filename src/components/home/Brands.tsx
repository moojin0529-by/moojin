import { Container } from "@/components/ui/Container";
import { brands } from "@/data/home";

export function Brands() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-12">
      <Container>
        <p className="text-center text-sm font-medium text-gray-500">취급 브랜드</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <span key={brand} className="text-base font-bold text-gray-400">
              {brand}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
