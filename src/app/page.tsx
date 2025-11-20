import ModeToggle from "@/src/components/mode-toggle";
import Logo from "../components/shared/logo";

export default function Home() {
  return (
    <div className="min-h-screen font-display text-text">
      <ModeToggle />
      <span className="font-geist-mono">hello world</span>
    </div>
  );
}
