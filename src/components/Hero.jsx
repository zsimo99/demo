import img from "../assets/ed40fd3338fe353632a8c9eb474ad906.jpg"
import Button from "./Button"

const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen w-screen overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="flex container mx-auto px-4 w-full h-full min-h-screen items-center gap-24 relative z-10">
                <div className="flex-1 lg:basis-1/2">
                    <div className="ml-auto mr-24 w-fit animate-fade-in-up">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                            ✨ Welcome to the future
                        </span>
                        <h1 className="text-5xl lg:text-7xl w-fit font-extrabold leading-[1.1] text-white">
                            CREATE <br /> 
                            <span className="gradient-text">SOFTWARE</span> <br /> 
                            SOLUTION
                        </h1>
                        <p className="text-slate-400 text-lg w-fit max-w-[320px] mt-6 leading-relaxed">
                            Building innovative digital solutions that transform businesses and empower growth.
                        </p>
                        <Button value="40px" />
                    </div>
                </div>
                <div className="flex-1 lg:basis-1/2 max-lg:hidden">
                    <div className="w-[120%] aspect-square rounded-[17%] -rotate-45 -translate-y-1/4 -translate-x-20 overflow-hidden animate-float shadow-2xl shadow-blue-500/20 ring-1 ring-white/10">
                        <img className="w-full h-full rotate-45 scale-150 object-cover" src={img} alt="Hero" />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero