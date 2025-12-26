import { useEffect, useState } from "react"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        let prevPos = 0
        const handleScroll = () => {
            const newPos = scrollY
            if (newPos > prevPos && scrollY > 0) {
                document.querySelector("header").style.top = "-100px"
                prevPos = newPos
            } else if (window.scrollY <= 0 || newPos < prevPos) {
                document.querySelector("header").style.top = "0"
                prevPos = newPos
            }
            setScrolled(window.scrollY > 40)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed w-full top-0 left-0 z-[999] transition-all duration-500 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-black/10' : 'bg-transparent'}`}>
            <div className="flex container mx-auto p-5 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">C</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">create</h1>
                </div>
                <ul className="flex text-white text-sm font-medium items-center max-md:hidden gap-1">
                    <li><a className="relative px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:text-blue-400" href="#about">About Us</a></li>
                    <li><a className="relative px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:text-blue-400" href="#products">Products</a></li>
                    <li><a className="relative px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:text-blue-400" href="#press">Press</a></li>
                    <li><a className="relative px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:text-blue-400" href="#carriere">Careers</a></li>
                    <li><a className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/25" href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header