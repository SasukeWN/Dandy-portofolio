import mtcna from '../assets/fotomtcna.png';


export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">

                <div className="mb-12 text-center" data-aos="fade-up">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Pencapaian
                    </p>
                    <h2 className="text-3xl font-bold text-slate-900">
                        Lisensi & Sertifikasi
                    </h2>
                </div>

               
                <div
                    className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row items-center gap-8 group"
                    data-aos="fade-up"
                >
                    <div className="w-full md:w-1/3 relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">

                        <img
                            src={mtcna}
                            alt="Sertifikat MTCNA Dandy Ghaisan Vidyanto"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                        />


                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-slate-900">MTCNA</h3>
                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                                Internasional
                            </span>
                        </div>
                        <p className="text-md text-primary font-semibold mb-4">
                            MikroTik Certified Network Associate
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            Sertifikasi resmi berskala internasional dari MikroTik yang memvalidasi
                            kemampuan konfigurasi jaringan, routing, switching, firewall,
                            dan manajemen perangkat MikroTik, yang turut memperkuat kemampuan logika teknis dan pemecahan masalah.
                        </p>
                        <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Diterbitkan</p>
                                <p className="text-sm font-semibold text-slate-800">27 Feb 2026</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Penerbit</p>
                                <p className="text-sm font-semibold text-slate-800">MikroTik Latvia</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}