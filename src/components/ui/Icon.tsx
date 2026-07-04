const paths: Record<string, string> = {
  award:
    "M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-3.2 1.6L7 21l5-2.5L17 21l-1.8-4.4",
  "hard-hat":
    "M4 18h16M6 18v-3a6 6 0 0 1 12 0v3M10 15V9a2 2 0 1 1 4 0v6M9 12H4M20 12h-5",
  "shield-check": "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Zm-2.5 9 1.8 1.8L15.5 10",
  ruler: "M4 15 15 4l5 5L9 20 4 15Zm3-3 2 2m2-6 2 2m2-6 2 2",
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const d = paths[name] ?? paths.award;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}
