import Button from "./Button"

const data = [
    {
        title: "Web Apps",
        subtitle: "Modern & Scalable",
        icon: "🌐",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Mobile Apps",
        subtitle: "iOS & Android",
        icon: "📱",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Cloud Solutions",
        subtitle: "Secure & Fast",
        icon: "☁️",
        color: "from-orange-500 to-red-500"
    },
]

const Products = () => {
    return (
        <section id="products" className="bg-gradient-to-b from-slate-900 to-slate-800 py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto flex max-xl:flex-wrap gap-8">
                    <div className="xl:basis-2/12 aspect-square flex-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl shadow-blue-500/20">
                        <span className="text-6xl">🚀</span>
                        <div>
                            <div className="text-4xl font-bold leading-tight">Our</div>
                            <div className="text-4xl font-bold leading-tight">Products</div>
                        </div>
                    </div>
                    {data.map((d, i) => (
                        <div 
                            key={i} 
                            className="card-hover h-full basis-[calc(50%-20px)] xl:basis-1/4 flex-1 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {d.icon}
                            </div>
                            <h3 className="text-3xl text-white font-bold">{d.title}</h3>
                            <p className="mt-2 font-semibold text-lg text-slate-400">{d.subtitle}</p>
                            <p className="mt-4 text-slate-500 leading-relaxed">
                                Cutting-edge solutions designed to elevate your business to new heights with modern technology and best practices.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-blue-400 font-semibold cursor-pointer group/link">
                                Learn more 
                                <svg className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products