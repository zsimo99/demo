import github from "../assets/logo/github.png"
import facebook from "../assets/logo/facebook.png"
import lenovo from "../assets/logo/Lenovo.png"
import microsoft from "../assets/logo/microsoft.png"
import napster from "../assets/logo/napster.svg"



const Comp = () => {
    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex ">
                <div className="basis-1/5 max-h-5 md:max-h-6  lg:max-h-9 xl:max-h-11 flex items-center">
                    <img className=" w-full h-full object-contain" src={github} alt="" />
                </div>
                <div className="basis-1/5 max-h-5 md:max-h-6 lg:max-h-9 xl:max-h-11 flex items-center">
                    <img className="w-full h-full object-contain" src={facebook} alt="" />
                </div>
                <div className="basis-1/5 max-h-5 md:max-h-6 lg:max-h-9 xl:max-h-11 flex items-center">
                    <img className="w-full h-full object-contain" src={lenovo} alt="" />
                </div>
                <div className="basis-1/5 max-h-5 md:max-h-6 lg:max-h-9 xl:max-h-11 flex items-center">
                    <img className="w-full h-full object-contain" src={napster} alt="" />
                </div>
                <div className="basis-1/5 max-h-5 md:max-h-6 lg:max-h-9 xl:max-h-11 flex items-center">
                    <img className="w-full h-full object-contain" src={microsoft} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Comp