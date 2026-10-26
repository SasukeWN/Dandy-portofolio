export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div
                className="max-w-4xl mx-auto px-6"
                data-aos="fade-up"
            >
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    Tentang Saya
                </h2>
                <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                    Mengenal lebih dekat siapa yang akan mengerjakan proyek Anda.
                </p>

                <div className="space-y-6 text-lg leading-8 text-gray-600">
                    <p>
                        Saya <strong>Dandy Ghaisan Vidyanto</strong>, seorang
                        Web Developer yang fokus membangun tampilan website dan antarmuka web
                        menggunakan teknologi modern seperti{" "}
                        <strong>React, Next.js, Node.js, dan Tailwind CSS</strong>.
                        Didukung latar belakang Teknik Komputer &amp; Jaringan
                        serta sertifikasi <strong>MTCNA</strong>, hal ini melatih
                        daya analisis dan pemecahan masalah saya dalam membangun
                        aplikasi web yang fungsional dan rapi.
                    </p>

                    <p>
                        Dalam setiap proyek, saya berusaha menerapkan alur kerja
                        yang rapi: memahami kebutuhan website yang ingin dibuat,
                        membangun tampilan dan fiturnya dengan teliti, serta
                        memastikan website berjalan lancar sebelum digunakan.
                        Saya juga memanfaatkan <strong>AI tools</strong> untuk
                        membantu riset dan mempercepat proses pengerjaan.
                    </p>
                </div>

                {/* Nilai Kualitas Hasil Kerja */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="text-center p-6 rounded-2xl border border-slate-100 bg-slate-50">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                            <i className="fas fa-mobile-alt text-2xl text-primary"></i>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">Desain Responsif</h4>
                        <p className="text-sm text-slate-600">Tampilan website otomatis menyesuaikan dengan rapi di layar smartphone, tablet, maupun laptop.</p>
                    </div>

                    <div className="text-center p-6 rounded-2xl border border-slate-100 bg-slate-50">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                            <i className="fas fa-bolt text-2xl text-primary"></i>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">Cepat &amp; Ringan</h4>
                        <p className="text-sm text-slate-600">Dibangun dengan teknologi modern agar website cepat dibuka dan tidak membebani pengunjung.</p>
                    </div>

                    <div className="text-center p-6 rounded-2xl border border-slate-100 bg-slate-50">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                            <i className="fas fa-code text-2xl text-primary"></i>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">Kode Rapi &amp; Terstruktur</h4>
                        <p className="text-sm text-slate-600">Struktur kode bersih dan modular sehingga mudah dirawat dan dikembangkan ke depannya.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}