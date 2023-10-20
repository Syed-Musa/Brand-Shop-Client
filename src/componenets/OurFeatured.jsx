
const OurFeatured = () => {
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h2 className="text-xl lg:text-5xl font-bold italic text-orange-400 text-center my-10 uppercase">Our Latest Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <img className="bg-cover w-full h-full" src="/rename.jpg" alt="" />
                <img className="bg-cover w-full h-full" src="/rename2.jpg" alt="" />
                <img className="bg-cover w-full h-full" src="/rename3.jpg" alt="" />
                <img className="bg-cover w-full h-full" src="/rename4.jpg" alt="" />
                <img className="bg-cover w-full h-full" src="/rename5.jpg" alt="" />
                <img className="bg-cover w-full h-full" src="/rename6.jpg" alt="" />
            </div>
        </div>
    );
};

export default OurFeatured;