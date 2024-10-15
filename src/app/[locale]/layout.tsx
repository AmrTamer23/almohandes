"use client";
import { NavBar } from "@/components/nav-bar";
import { langAtom } from "@/stores/useLang";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

export default function Layout({ children }: { children: React.ReactNode }) {
  const route = useTransitionRouter();
  const [lang, setlang] = useAtom(langAtom);
  const pathname = usePathname();

  const toggleLang = (lang: "en" | "ar") => {
    setlang(lang);
    const currentPath = pathname.split("/");
    currentPath[1] = lang;
    route.push(currentPath.join("/"));
  };

  return (
    <>
      <NavBar lang={lang} onLangChange={toggleLang} />
      {children}
    </>
  );
}
