export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="Aucra Logo"
      className={className}
    />
  );
}
