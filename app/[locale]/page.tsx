import Navbar from '@/components/navbar/Navbar';
import Menu from '@/_components/menu/Menu';
import News from '@/_components/news/News';
import Offers from '@/_components/offers/Offers';
import About from '@/_components/about/About';
import Contact from '@/_components/contact/Contact';
import VideoBlock from '@/_components/VideoBlock/VideoBlock';
import Footer from '@/_components/footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Menu />
      <Offers />
      <News />
      <VideoBlock />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
