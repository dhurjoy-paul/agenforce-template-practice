import ModeToggle from "@/src/components/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen font-display text-text">
      <ModeToggle />
      <span className="font-sans">hello world</span>
    </div>
  );
}
