"use client";
import { useAtom } from "jotai";
import { langAtom } from "@/stores/useLang";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  const [lang] = useAtom(langAtom);

  return router.push(`/${lang}`);
}
