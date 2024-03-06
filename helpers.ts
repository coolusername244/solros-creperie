export const handleClick = (name: string) => {
  const element = document.getElementById(name);
  // small device navbar height
  let navbarHeight = 100;

  if (window.innerWidth >= 1024) {
    // large device navbar height
    navbarHeight = 130;
  }

  if (element) {
    const offset = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offset - navbarHeight,
      behavior: 'smooth',
    });
  }
};
