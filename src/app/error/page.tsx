import React from "react";
import { FlagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useLanguage } from "@/context/languageContext";

export function ErrorPage() {
  const { language } = useLanguage();

  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <FlagIcon className="w-20 h-20 mx-auto hover:text-red-600" />
        <h2 className="mt-10 text-3xl leading-snug md:text-4xl text-blue-gray-700">
          {language === 'en' ? 'Error 404' : 'Lỗi 404'} <br />
          {language === 'en' ? 'It looks like something went wrong.' : 'Có vẻ như đã có sự cố xảy ra.'}
        </h2>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          {language === 'en' ? 'Don’t worry, our team is already on it. Please try refreshing the page or come back later.' : 'Đừng lo lắng, đội ngũ của chúng tôi đã biết và đang xử lý. Vui lòng thử làm mới trang hoặc quay lại sau.'}
        </p>
        <Link href="/home" passHref>
          <button className="bg-blue-700 text-white text-lg font-bold px-4 py-2 rounded hover:bg-blue-800">
            {language === 'en' ? 'Back home' : 'Về trang chủ'}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
