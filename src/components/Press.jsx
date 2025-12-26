import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import Button from "./Button"

const Press = () => {
    return (
        <section id="press" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-row-reverse md:items-center max-md:flex-col max-md:gap-16">
                    <div className="md:basis-1/2 basis-full flex-1">
                        <div className="md:w-8/12 w-10/12 aspect-square mx-auto gap-4 grid grid-cols-2 grid-rows-5">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-end p-6 text-white text-3xl font-bold row-span-3 shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                                <div>
                                    <div className="text-sm font-medium opacity-80 mb-1">Latest News</div>
                                    Press
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "top right" }} className="rounded-3xl row-span-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"></div>
                            <div style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "bottom left" }} className="col-span-2 rounded-3xl row-span-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"></div>
                        </div>
                    </div>
                    <div className="md:basis-1/2 basis-full flex-1 max-md:text-center">
                        <div className="pr-10 xl:pr-32">
                            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6">📰 Featured Story</span>
                            <h3 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                                Infiniti software solutions plans 
                                <span className="gradient-text"> global expansion</span>
                            </h3>
                            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                                We're thrilled to announce our expansion into new markets, bringing innovative software solutions to businesses worldwide. This milestone marks a significant step in our journey to transform the digital landscape.
                            </p>
                            <div className="flex items-center gap-4 mt-6 max-md:justify-center">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                                </div>
                                <span className="text-slate-500 text-sm">Join 1000+ readers</span>
                            </div>
                            <Button value="40px" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Press