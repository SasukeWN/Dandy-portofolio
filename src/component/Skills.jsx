export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "fab fa-html5",
      color: "text-orange-600",
      bg: "bg-orange-50",
      desc: "Membangun struktur halaman web yang semantik dan SEO-friendly",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt",
      color: "text-blue-600",
      bg: "bg-blue-50",
      desc: "Mendesain tampilan web yang menarik dengan layout responsif dan animasi",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      desc: "Mengembangkan logika interaktif dan dinamis pada sisi klien maupun server",
    },
    {
      name: "React JS",
      icon: "fab fa-react",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      desc: "Membangun antarmuka web modern berbasis komponen yang cepat dan interaktif",
    },
    {
      name: "Next.js",
      icon: "fab fa-react",
      color: "text-slate-800",
      bg: "bg-slate-100",
      desc: "Mengembangkan aplikasi web fullstack dengan SSR, routing, dan performa optimal",
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "text-green-600",
      bg: "bg-green-50",
      desc: "Membangun layanan backend dan REST API untuk mengelola data aplikasi",
    },
    {
      name: "Express.js",
      icon: "devicon-express-original",
      color: "text-gray-800",
      bg: "bg-gray-100",
      desc: "Merancang arsitektur server dan endpoint API yang terstruktur dan aman",
    },
    {
      name: "Tailwind CSS",
      icon: "fas fa-paint-brush",
      color: "text-teal-500",
      bg: "bg-teal-50",
      desc: "Styling cepat dan konsisten dengan utility-first framework untuk UI yang presisi",
    },
    {
      name: "MySQL",
      icon: "fas fa-database",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      desc: "Merancang skema database relasional dan query yang efisien untuk kebutuhan aplikasi",
    },
    {
      name: "Git & GitHub",
      icon: "fab fa-github",
      color: "text-slate-800",
      bg: "bg-slate-200",
      desc: "Version control dan kolaborasi kode untuk manajemen proyek yang terorganisir",
    },
    {
      name: "MikroTik (MTCNA)",
      icon: "fas fa-network-wired",
      color: "text-rose-500",
      bg: "bg-rose-50",
      desc: "Konfigurasi jaringan, routing, dan manajemen perangkat bersertifikasi internasional",
    },
    {
      name: "Linux & Server",
      icon: "fab fa-linux",
      color: "text-slate-800",
      bg: "bg-slate-200",
      desc: "Instalasi, konfigurasi, dan manajemen server untuk deployment aplikasi yang stabil",
    },
  ];

  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Tech Stack
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Teknologi yang Saya Gunakan</h2>
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