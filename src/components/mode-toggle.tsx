"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    matchMedia.addEventListener("change", handleThemeChange);
    return () => matchMedia.removeEventListener("change", handleThemeChange);
  }, []);

  const SWITCH = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      case "system":
        setTheme(systemTheme === "light" ? "dark" : "light");
        break;
    }
  };

  return (
    <button
      onClick={SWITCH}
      className="flex justify-center items-center size-4"
    >
      <SunIcon
        size={14}
        className="absolute inset-0 rotate-0 dark:rotate-90 scale-100 dark:scale-0 transition-all duration-200 ease-in-out"
      />
      <MoonIcon
        size={14}
        className="absolute inset-0 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all duration-200 ease-in-out"
      />
    </button>
  );
}
