import github from "../assets/logo/github.png"
import facebook from "../assets/logo/facebook.png"
import lenovo from "../assets/logo/Lenovo.png"
import microsoft from "../assets/logo/microsoft.png"
import napster from "../assets/logo/napster.svg"

const Comp = () => {
    return (
        <div className="bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto py-16 px-4">
                <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-10">Trusted by industry leaders</p>
                <div className="flex items-center justify-between gap-8 flex-wrap">
                    <div className="basis-[calc(20%-32px)] min-w-[100px] flex items-center justify-center group">
                        <img className="max-h-8 md:max-h-10 lg:max-h-12 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group-hover:scale-110" src={github} alt="GitHub" />
                    </div>
                    <div className="basis-[calc(20%-32px)] min-w-[100px] flex items-center justify-center group">
                        <img className="max-h-8 md:max-h-10 lg:max-h-12 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group-hover:scale-110" src={facebook} alt="Facebook" />
                    </div>
                    <div className="basis-[calc(20%-32px)] min-w-[100px] flex items-center justify-center group">
                        <img className="max-h-8 md:max-h-10 lg:max-h-12 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group-hover:scale-110" src={lenovo} alt="Lenovo" />
                    </div>
                    <div className="basis-[calc(20%-32px)] min-w-[100px] flex items-center justify-center group">
                        <img className="max-h-8 md:max-h-10 lg:max-h-12 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group-hover:scale-110" src={napster} alt="Napster" />
                    </div>
                    <div className="basis-[calc(20%-32px)] min-w-[100px] flex items-center justify-center group">
                        <img className="max-h-8 md:max-h-10 lg:max-h-12 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group-hover:scale-110" src={microsoft} alt="Microsoft" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp