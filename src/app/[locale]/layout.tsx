"use client";
import { NavBar } from "@/components/nav-bar";
import { langAtom } from "@/stores/useLang";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const route = useTransitionRouter();
  const [lang, setLang] = useAtom(langAtom);
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname.split("/");
    const newLang = currentPath[1] as "ar" | "en";

    // Only set the language if it has changed
    if (newLang !== lang) {
      setLang(newLang);
    }
  }, [pathname, lang, setLang]);

  const toggleLang = (newLang: "en" | "ar") => {
    const currentPath = pathname.split("/");
    // Only update the route if the language is different
    if (currentPath[1] !== newLang) {
      currentPath[1] = newLang;
      route.push(currentPath.join("/"));
    }
  };

  return (
    <>
      <NavBar lang={lang} onLangChange={toggleLang} />
      {children}
    </>
  );
}
