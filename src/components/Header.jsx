import { useEffect } from "react"

const Header = () => {


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
            if (window.scrollY > 40) {
                document.querySelector("header").style.backgroundColor = "rgba(0,0,0,30%)"
            } else {
                document.querySelector("header").style.backgroundColor = "transparent"
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className="fixed w-full top-0 left-0 z-[999]  transition-all duration-300">
            <div className="flex container mx-auto p-5 items-center justify-between">
                <div className="flex items-center">
                    <h1 className="-translate-y-1 text-5xl font-bold text-white">create</h1>
                </div>
                <ul className="flex text-white text-lg font-semibold items-center max-md:hidden">
                    <li><a className="hover:bg-[rgba(255,255,255,20%)] transition-colors duration-300 px-6 py-4" href="#about">ABOUT US</a></li>
                    <li><a className="hover:bg-[rgba(255,255,255,20%)] transition-colors duration-300 px-6 py-4" href="#products">PRODUCTS</a></li>
                    <li><a className="hover:bg-[rgba(255,255,255,20%)] transition-colors duration-300 px-6 py-4" href="#press">PRESS</a></li>
                    <li><a className="hover:bg-[rgba(255,255,255,20%)] transition-colors duration-300 px-6 py-4" href="#carriere">CARIERE</a></li>
                    <li><a className="hover:bg-[rgba(255,255,255,20%)] transition-colors duration-300 px-6 py-4" href="#contact">CONTACT US</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header