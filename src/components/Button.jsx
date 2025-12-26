// eslint-disable-next-line react/prop-types
const Button = ({ value, variant = "primary" }) => {
    const baseStyles = "group relative px-8 py-4 rounded-full flex items-center gap-4 font-semibold transition-all duration-300 overflow-hidden"
    
    const variants = {
        primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105",
        secondary: "bg-white text-slate-800 hover:shadow-xl hover:shadow-black/10 hover:scale-105 border border-slate-200"
    }

    return (
        <button 
            style={{ marginTop: value }} 
            className={`${baseStyles} ${variants[variant]}`}
        >
            <span className="relative z-10">Get Started</span>
            <span className="relative z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
    )
}

export default Button