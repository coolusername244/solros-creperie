import Navbar from '@/components/navbar/Navbar';
import Menu from '@/_components/menu/Menu';
import News from '@/_components/news/News';
import Offers from '@/_components/offers/Offers';
import About from '@/_components/about/About';
import Contact from '@/_components/contact/Contact';
import VideoBlock from '@/_components/VideoBlock/VideoBlock';

export default function Home() {
  return (
    // <main className="bg-cover bg-center screen-content home-image">
    //   <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50"></div>
    // </main>
    // <main className="flex min-h-[calc(100vh-96px)] justify-center items-center flex-col">
    //   <div className="w-full min-h-[calc(100vh-96px)] bg-[url('_assets/images/cafe/cafe.jpg')] bg-cover bg-center">
    //     <div
    //       className="w-full min-h-[calc(100vh-96px)] flex  justify-center items-center
    //          bg-secondary/30 "
    //     >
    //       <h1 className="text-6xl font-bold text-white">Home page</h1>
    //     </div>
    //   </div>
    // </main>
    <main>
      <Navbar />
      <Menu />
      <Offers />
      <News />
      <VideoBlock />
      <About />
      <Contact />
    </main>
  );
}
