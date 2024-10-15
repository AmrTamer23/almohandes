import { Landing } from "@/components/landing";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
export default function Home() {
  return <Landing />;
}
