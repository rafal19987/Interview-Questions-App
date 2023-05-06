import { Montserrat } from 'next/font/google';
import Header from 'components/shared/Header/Header';
import Footer from 'components/shared/Footer/Footer';
import './globals.css';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Interview Questions App',
  description: 'JavaScript Interview Questions App',
  icons: {
    icon: '/pageFavicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center lg:w-screen lg:h-screen  text-[#ACA4B2] bg-[#1C1C1C] ${montserrat.className}`}
      >
        <div className="relative overflow-hidden w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:w-[800px] xl:w-[1200px]">
          <div className="flex flex-col justify-between items-center min-h-screen max-h-full w-full">
            <Header />
            <main className="flex grow flex-col items-center h-full w-full mx-6 verflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
