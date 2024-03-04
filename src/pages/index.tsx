import { Inter } from 'next/font/google';
import Laborally from '@/components/icons/laborally';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-screen mx-auto w-screen">
      <div className="flex justify-center w-full pt-60 sm:pt-72">
        <Laborally className="w-72 sm:w-[40rem]" />
      </div>
    </main>
  );
}
