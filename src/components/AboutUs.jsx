import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import Button from "./Button"

const AboutUs = () => {
    return (
        <section id="about" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex md:items-center max-md:flex-col max-md:gap-16">
                    <div className="md:basis-1/2 basis-full flex-1">
                        <div className="md:w-8/12 w-10/12 aspect-square mx-auto gap-4 grid grid-cols-2 grid-rows-5">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-end p-6 text-white text-3xl font-bold row-span-3 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                                About <br /> Us
                            </div>
                            <div style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "top right" }} className="rounded-3xl row-span-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"></div>
                            <div style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "bottom left" }} className="col-span-2 rounded-3xl row-span-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"></div>
                        </div>
                    </div>
                    <div className="md:basis-1/2 basis-full flex-1 max-md:text-center">
                        <div className="pr-10 xl:pr-32">
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">Who We Are</span>
                            <h3 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                                Never doubt that a small group of 
                                <span className="gradient-text"> thoughtful committed </span>
                                people can change the world.
                            </h3>
                            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                                We are a team of passionate innovators dedicated to crafting exceptional digital experiences. Our mission is to transform ideas into powerful solutions that drive success.
                            </p>
                            <div className="flex gap-8 mt-8 max-md:justify-center">
                                <div>
                                    <div className="text-3xl font-bold text-slate-800">150+</div>
                                    <div className="text-slate-500 text-sm">Projects Done</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-800">50+</div>
                                    <div className="text-slate-500 text-sm">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-800">10+</div>
                                    <div className="text-slate-500 text-sm">Years Exp.</div>
                                </div>
                            </div>
                            <Button value="40px" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs