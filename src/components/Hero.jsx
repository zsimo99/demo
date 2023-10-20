import img from "../assets/ed40fd3338fe353632a8c9eb474ad906.jpg"
import Button from "./Button"
const Hero = () => {
    return (
        <div className="bg-gray-300 h-screen w-screen overflow-hidden">
            <div className="flex container mx-auto px-4 w-full h-full items-center  gap-24">
                <div className="flex-1 lg:basis-1/2 ">
                    <div className="ml-auto mr-24 w-fit">
                        <h1 className="text-5xl lg:text-7xl w-fit font-bold leading-[1]">CREATE <br /> SOFTWARE <br /> SOLUTION</h1>
                        <p className="text-gray-600 text-lg w-fit max-w-[250px] mt-4 leading-[1.5]">Lorem ipsum dolor, sit amet consectetur elit. Vitae, illum!</p>
                        <Button value="50px" />
                    </div>
                </div>
                <div className="flex-1 lg:basis-1/2  max-lg:hidden">
                    <div className="w-[120%] aspect-square bg-red-500 rounded-[17%] -rotate-45 -translate-y-1/4 -translate-x-20  overflow-hidden ">
                        <img className=" w-full h-full rotate-45 scale-150" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero