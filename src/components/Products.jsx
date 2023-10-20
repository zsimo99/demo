import Button from "./Button"

const data = [
    {
        title: "Facebook"
    },
    {
        title: "Discord"
    },
    {
        title: "Github"
    },
]
const Products = () => {
    return (
        <div className="bg-gray-300 py-32">
            <div className="container mx-auto px-4 ">
                <div className="max-w-7xl mx-auto flex max-xl:flex-wrap gap-10 ">
                    <div className="h-1/2 xl:basis-2/12  aspect-square flex-1 bg-blue-500 rounded-3xl p-6 text-3xl text-white flex items-end font-semibold">PRO <br />DUCTS</div>
                    {data.map((d, i) => <div key={i} className="h-full basis-[calc(50%-20px)] xl:basis-1/4 flex-1 bg-gray-50 rounded-3xl p-10">
                        <h3 className="text-4xl text-gray-400 font-bold">{d.title}</h3>
                        <p className="mt-4 font-bold text-xl text-gray-900">Lorem,<br /> ipsum.</p>
                        <p className="mt-4 text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo rem expedita autem dolore natus repellat id optio vitae temporibus et modi doloremque distinctio nobis, facere ducimus fugit veritatis obcaecati?</p>
                        <Button value={"28px"} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Products