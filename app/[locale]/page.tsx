import Menu from '@/_components/menu/Menu';
import News from '@/_components/news/News';
import Offers from '@/_components/offers/Offers';
import About from '@/_components/about/About';
import Contact from '@/_components/contact/Contact';

export default function Home() {
  return (
    <main>
      <Menu />
      <Offers />
      <News />
      <About />
      <Contact />
    </main>
  );
}
