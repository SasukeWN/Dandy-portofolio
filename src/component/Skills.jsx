export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "fab fa-html5",
      color: "text-orange-600",
      bg: "bg-orange-50",
      desc: "Membuat kerangka dan struktur dasar halaman web",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt",
      color: "text-blue-600",
      bg: "bg-blue-50",
      desc: "Memberi warna dan mengatur tata letak sederhana",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      desc: "Menambahkan interaktivitas dasar pada website",
    },
    {
      name: "React JS",
      icon: "fab fa-react",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      desc: "Sedang belajar membangun UI dengan komponen",
    },
    {
      name: "Tailwind CSS",
      icon: "fas fa-paint-brush",
      color: "text-teal-500",
      bg: "bg-teal-50",
      desc: "Styling website dengan bantuan utility classes",
    },
    {
      name: "Git",
      icon: "fab fa-git-alt",
      color: "text-red-500",
      bg: "bg-red-50",
      desc: "Mencatat perubahan kode dasar (add, commit, push)",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      color: "text-slate-800",
      bg: "bg-slate-200",
      desc: "Tempat menyimpan dan mengamankan kode proyek",
    },
    {
      name: "AI Tools",
      icon: "fas fa-robot",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
      desc: "Teman diskusi untuk mencari solusi dan debugging",
    },
    {
      name: "MikroTik",
      icon: "fas fa-network-wired",
      color: "text-rose-500",
      bg: "bg-rose-50",
      desc: "Pemahaman dasar jaringan (sertifikasi MTCNA)",
    },
    {
      name: "Linux & Server",
      icon: "fab fa-linux",
      color: "text-slate-800",
      bg: "bg-slate-200",
      desc: "Familiar dengan instalasi dan konfigurasi server dasar (Debian)",
    },
  ];

  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Skills & Workflow
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Yang biasa saya pakai</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${skill.bg}`}>
                <i className={`${skill.icon} ${skill.color} text-3xl transition-transform group-hover:scale-110`}></i>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{skill.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}