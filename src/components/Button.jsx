
// eslint-disable-next-line react/prop-types
const Button = ({ value }) => {
    return (
        <button style={{ marginTop: value }} className="button-shadow shadow-lg shadow-white bg-white px-6 py-3 rounded-full flex items-center gap-4 font-semibold" >Lorem ipsum do<span className="bg-white w-10 h-10 border-[16px] border-blue-600 block rounded-full "></span></button>

    )
}

export default Button