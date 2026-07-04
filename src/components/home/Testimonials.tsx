import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/home";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-500" aria-label={`평점 ${rating}점`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">고객 후기</h2>
        <p className="mt-2 text-gray-500">실제 시공을 경험하신 고객님들의 후기입니다.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-gray-200 p-6"
            >
              <Stars rating={t.rating} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-3">
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
