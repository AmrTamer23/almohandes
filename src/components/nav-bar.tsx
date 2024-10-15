import Logo from "@/app/assets/imgs/logo.png";
import clsx from "clsx";
export function NavBar({ lang }: { lang: "en" | "ar" }) {
  return (
    <header className="bg-white shadow-sm">
      <div
        className={clsx(
          "container mx-auto px-4 py-4 flex items-center justify-between",
          "md:px-8",
          lang === "en" && "flex-row-reverse"
        )}
      >
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                اتصل بنا
              </a>
            </li>
            <li>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">
                تسجيل
              </a>
            </li>
          </ul>
        </nav>
        <img
          src={Logo.src}
          alt="Al-Muhandis Logo"
          width={150}
          height={50}
          className="w-48 h-fit"
        />
      </div>
    </header>
  );
}
