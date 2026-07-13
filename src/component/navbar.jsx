import { useState } from 'react';
import Contact from './Contact';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);


    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <nav className="fixed left-0 top-0 z-50 w-full px-4 py-3">
               
                <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-6 relative z-50">

                    <a href="#home" className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-blue-200">
                            D
                        </span>
                        <div className="leading-tight">
                            <p className="text-base font-semibold text-slate-900">Dandy</p>
                            <p className="text-xs text-slate-500">Portfolio</p>
                        </div>
                    </a>

                    {/* Tombol Hamburger Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 md:hidden"
                        aria-label="Toggle Menu"
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
                    </button>

                   
                    <div className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex sm:gap-2">
                        <a href="#home" className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-primary">
                            Home
                        </a>
                        <a href="#about" className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-primary">
                            About
                        </a>
                        <a href="#skills" className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-primary">
                            Skills
                        </a>
                        <a href="#certifications" className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-primary">
                            Certifications
                        </a>
                        <a href="#projects" className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-primary">
                            Projects
                        </a>

                     
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="ml-1 rounded-full bg-primary px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Hubungi
                        </button>
                    </div>
                </div>

           
                <div
                    className={`absolute left-0 top-[76px] w-full px-4 transition-all duration-300 md:hidden ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
                        <a href="#home" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary">
                            Home
                        </a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary">
                            About
                        </a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary">
                            Skills
                        </a>
                        <a href="#certifications" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary">
                            Certifications
                        </a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary">
                            Projects
                        </a>

                     
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setIsContactOpen(true);
                            }}
                            className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Hubungi
                        </button>
                    </div>
                </div>
            </nav>


            {isContactOpen && (
                <Contact
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                />
            )}
        </>
    );
}