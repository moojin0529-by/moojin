import { Container } from "@/components/ui/Container";
import { processSteps } from "@/data/home";

export function ProcessSteps() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">시공 프로세스</h2>
        <p className="mt-2 text-gray-500">상담부터 A/S까지, 체계적인 프로세스로 진행합니다.</p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {step.step}
              </div>
              <p className="mt-3 font-bold text-gray-900">{step.title}</p>
              <p className="mt-1 text-sm text-gray-500">{step.description}</p>
              {i < processSteps.length - 1 && (
                <span className="absolute right-[-12px] top-6 hidden text-gray-300 sm:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
