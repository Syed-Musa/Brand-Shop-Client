const Footer = () => {
  return (
    <div className="my-10" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <footer className="footer p-10 bg-gradient-to-r from-blue-400 to-indigo-300 text-base-content">
        <aside>
          <p className="text-3xl font-bold italic text-black mt-14">BRAND-SHOPS</p>
        </aside>
        <nav>
          <header className="text-[25px] font-bold text-black italic">Services</header>
          <a className="link link-hover font-bold italic">Branding</a>
          <a className="link link-hover font-bold italic">Design</a>
          <a className="link link-hover font-bold italic">Marketing</a>
          <a className="link link-hover font-bold italic">Advertisement</a>
        </nav>
        <nav>
          <header className="text-[25px] font-bold text-black italic">Company</header>
          <a className="link link-hover font-bold italic">About us</a>
          <a className="link link-hover font-bold italic">Contact</a>
          <a className="link link-hover font-bold italic">Jobs</a>
          <a className="link link-hover font-bold italic">Press kit</a>
        </nav>
        <nav>
          <header className="text-[25px] font-bold text-black italic">Legal</header>
          <a className="link link-hover font-bold italic">Terms of use</a>
          <a className="link link-hover font-bold italic">Privacy policy</a>
          <a className="link link-hover font-bold italic">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
