import mtcna from '../assets/fotomtcna.png';
import intro from '../assets/intro.png'
import inter from '../assets/inter.png'


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
                    className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row items-center gap-8 group mb-12"
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
                        </div>
                        <p className="text-md text-primary font-semibold mb-4">
                            MikroTik Certified Network Associate
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                           Sertifikasi resmi berskala internasional dari MikroTik yang memberikan pemahaman dasar mengenai konfigurasi jaringan, routing, switching, dan manajemen perangkat MikroTik. Sertifikasi ini menjadi bagian dari proses pengembangan kemampuan saya di bidang jaringan komputer.
                        </p>
                        <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Diterbitkan</p>
                                <p className="text-sm font-semibold text-slate-800">27 Feb 2026</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <i className="fas fa-smile-beam text-primary"></i> Fun Learning Certificates
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Kartu SoloLearn 1 */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div className="relative h-74 bg-slate-100 overflow-hidden">
                                <img
                                    src={intro}
                                    alt="Sertifikat JavaScript Basics"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-900 text-lg">JavaScript Basics</h4>
                            </div>
                        </div>

                        {/* Kartu SoloLearn 2 */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div className="relative h-74 bg-slate-100 overflow-hidden">
                                <img
                                    src={inter}
                                    alt="Sertifikat JavaScript Intermediate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-900 text-lg">JavaScript Intermediate</h4>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}