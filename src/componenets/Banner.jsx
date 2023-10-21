
const Banner = () => {
  return (
    <div className="carousel w-full" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="/banner4.jpg" className="w-full h-[500px]"/>
        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="/banner2.jpg" className="w-full h-[500px]"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="/banner3.jpg"className="w-full h-[500px]"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
