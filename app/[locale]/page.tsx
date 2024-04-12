import Menu from '@/_components/menu/Menu';
import New from '@/_components/new/New';
import Offers from '@/_components/offers/Offers';
import About from '@/_components/about/About';
import Contact from '@/_components/contact/Contact';

export default function Home() {
  return (
    <main>
      <Menu />
      <Offers />
      <New />
      <About />
      <Contact />
    </main>
  );
}
