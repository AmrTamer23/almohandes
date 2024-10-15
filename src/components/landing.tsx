"use client";
import { langAtom } from "@/stores/useLang";
import { useAtom } from "jotai";
import HeroEn from "@/app/assets/imgs/hero-en.png";
import HeroAr from "@/app/assets/imgs/hero-ar.png";

export function Landing() {
  const [lang] = useAtom(langAtom);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <img
          src={lang === "en" ? HeroEn.src : HeroAr.src}
          alt="All-Muhandis Logo"
          className="opacity-90"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">رسالتنا</h2>
                <p className="text-gray-600">
                  أن نسعى لتحقيق الجودة بمفهومها الشامل في تنفيذ المشاريع وذلك
                  من خلال تطبيق أحدث الأساليب العلمية والتقنية في مجال الإنشاءات
                  والمقاولات وتوريد المعدات والأجهزة.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/placeholder.svg"
                  alt="Building"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/placeholder.svg"
                  alt="Modern Building"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">الرؤية</h2>
                <p className="text-gray-600">
                  نحن نسعى لنصبح الاختيار الأول والشريك الموثوق به في قطاع
                  المقاولات والتوريدات الحكومية، من خلال تقديم خدمات عالية
                  الجودة وتنفيذ المشاريع بكفاءة وفعالية.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              شركاء النجاح
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt={`Partner ${i + 1}`}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">أعمالنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src="/placeholder.svg"
                    alt={`Work ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      عنوان المشروع
                    </h3>
                    <p className="text-gray-600">وصف موجز للمشروع وتفاصيله.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">للتواصل معنا</h3>
              <p>العنوان: شارع الرئيسي، المدينة</p>
              <p>الهاتف: 123-456-7890</p>
              <p>البريد الإلكتروني: info@almuhandis.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <span className="sr-only">aedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
