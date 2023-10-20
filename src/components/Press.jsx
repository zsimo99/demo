import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import Button from "./Button"

const Press = () => {
    return (
        <section id="press" className="py-32 bg-gray-100">
            <div className="container mx-auto px-4 ">
                <div className="flex flex-row-reverse md:items-center max-md:flex-col max-md:gap-10 ">
                    <div className="md:basis-1/2 basis-full flex-1">
                        <div className="md:w-7/12 w-10/12 aspect-square mx-auto gap-6  grid grid-cols-2 grid-rows-5 ">
                            <div className="bg-[#367DCB] rounded-3xl flex  items-end p-4 text-white text-3xl font-semibold row-span-3">Press</div>
                            <div style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "top right" }} className="bg-blue-300 rounded-3xl row-span-3"></div>
                            <div style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "bottm left" }} className="bg-blue-300 col-span-2 rounded-3xl row-span-2"></div>
                        </div>
                    </div>
                    <div className="md:basis-1/2 basis-full flex-1 max-md:text-center">
                        <div className="pr-10 xl:pr-48 ">
                            <h3 className="text-3xl font-semibold">Infiniti software solutions plans global expansion</h3>
                            <p className="mt-4 font-semibold text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt beatae facere nam fugit adipisci harum ad hic quae, atque corrupti, placeat vero at voluptates odio, ea qui aspernatur asperiores?</p>
                            <Button value="30px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Press