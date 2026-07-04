import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { strengths } from "@/data/home";

export function Strengths() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {strengths.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name={item.icon} />
              </div>
              <p className="font-bold text-gray-900">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
