"use client";
import { NavBar } from "@/components/nav-bar";
import { langAtom } from "@/stores/useLang";
import { useAtom } from "jotai";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [lang, setlang] = useAtom(langAtom);

  return (
    <>
      <NavBar lang={lang} onLangChange={(lang: "en" | "ar") => setlang(lang)} />
      {children}
    </>
  );
}
