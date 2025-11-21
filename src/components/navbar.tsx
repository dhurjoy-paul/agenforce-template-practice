"use client";
import { Button } from "@/components/ui/button";
import { PanelLeft, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Container from "./shared/container";
import Logo from "./shared/logo";

const navLinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-border border-b text-foreground">
      <Container className="flex justify-between items-center py-5">
        <Logo />

        {/* nav menu */}
        <div className="hidden lg:flex items-center gap-13">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-sans font-medium text-sm hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4.5">
          {/* auth buttons */}
          <div className="hidden sm:flex justify-between items-center gap-4 font-sans font-medium text-sm">
            {/* <Link href="/login">Login</Link> */}
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Signup</Link>
            </Button>
          </div>

          {/* panel button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden block hover:bg-muted p-1.5 rounded-md cursor-pointer"
          >
            <PanelLeft className="size-5" />
          </button>
        </div>

        {/* -=-=-=-=-=-=-=-=-=- mobile panel -=-=-=-=-=-=-=-=-=-=- */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(1000px)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="z-50 fixed inset-0 bg-background px-4 py-6 w-full h-full overflow-hidden"
            >
              <div className="flex justify-between items-center">
                <Logo />
                <button
                  onClick={() => setOpen(!open)}
                  className="top-5 right-4.25 absolute hover:bg-muted p-0.5 rounded-md cursor-pointer"
                >
                  <XIcon className="size-7" />
                </button>
              </div>

              <div className="flex flex-col justify-center items-center gap-5 my-10">
                {/* menu */}
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i + link.title}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      className="font-sans font-medium text-xl hover:underline"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}

                {/* auth buttons */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="sm:hidden flex justify-center gap-3 mt-3">
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="text-xl"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button size="lg" asChild className="text-xl">
                      <Link href="/signup">Signup</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
