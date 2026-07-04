/**
 * 실제 시공 사진 준비 전까지 사용하는 자리표시 이미지.
 * 사진 확보 후 next/image로 교체하세요.
 */
export function PlaceholderImage({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-300 ${className}`}
    >
      <span className="px-4 text-center text-sm font-medium text-brand-700/70">
        {label}
      </span>
    </div>
  );
}
