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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Lulusan SMKN 3 Kota Tangerang • Teknik Komputer dan Jaringan
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-900 leading-tight tracking-tight">
          Halo, saya <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Dandy Ghaisan
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
         Jaringan Komputer
        </h2>

        <p className="text-slate-500 mb-8 leading-relaxed text-lg max-w-lg">
          Saya adalah lulusan Teknik Komputer dan Jaringan yang memiliki
          ketertarikan pada pengembangan web dan jaringan komputer. Saat ini
          saya terus belajar membangun aplikasi web menggunakan JavaScript,
          React, dan Tailwind CSS melalui berbagai proyek pribadi sebagai bagian
          dari proses pengembangan kemampuan saya.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:-translate-y-1"
          >
            Lihat Portofolio{" "}
            <i className="fas fa-arrow-right text-sm"></i>
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
          >
            Tentang Saya
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