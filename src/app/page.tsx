 "use client"
import { useLanguage } from '@/context/languageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <main className="flex h-1/2 flex-col items-center justify-between p-24">
      <h1 className="text-white text-7xl">
        {language === 'en' ? 'Welcome you come here!' : 'Chào mừng bạn đến đây'}
      </h1>
    </main>
  );
};

export default Home;
