import poto from "../assets/poto.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-8 overflow-hidden"
    >
      <div
        className="md:w-1/2 flex flex-col items-start text-left"
        data-aos="fade-right"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Available for Freelance Projects
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-900 leading-tight tracking-tight">
          Halo, saya <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Dandy Ghaisan Vidyanto
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
          Web Developer — Frontend & Fullstack
        </h2>

        <p className="text-slate-500 mb-8 leading-relaxed text-lg max-w-lg">
          Membantu bisnis dan personal brand memiliki website modern,
          responsif, dan berperforma tinggi. Siap mentransformasi ide Anda
          menjadi produk digital yang profesional menggunakan React, Next.js,
          dan Node.js.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/6285770347428?text=Halo%20Dandy%2C%20saya%20tertarik%20untuk%20diskusi%20proyek%20website."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:-translate-y-1"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            Konsultasi Proyek
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
          >
            Lihat Portofolio
            <i className="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>

      <div
        className="md:w-1/2 flex justify-center relative mt-10 md:mt-0"
        data-aos="fade-left"
      >
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-400/30 to-cyan-300/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-slate-200">
          <img
            src={poto}
            alt="Dandy Ghaisan Vidyanto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}