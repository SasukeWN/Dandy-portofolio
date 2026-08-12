import serti from '../assets/pkl_serti.png'
export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div
                    className="text-center mb-14"
                    data-aos="fade-up"
                >
                    <span className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                        Experience
                    </span>

                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                        Pengalaman
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Pengalaman yang saya dapatkan selama menjalani
                        Praktik Kerja Lapangan.
                    </p>
                </div>

                {/* Experience Card */}
                <div
                    data-aos="fade-up"
                    className="max-w-full mx-auto"
                >
                    <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">

                        {/* Image */}
                        <div className="h-72 md:h-full bg-gray-100 overflow-hidden">
                            <img
                                src= {serti}
                                alt="Pengalaman PKL di PT Telkom Akses"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10 flex flex-col justify-center">

                            {/* Badge */}
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                                    2025
                                </span>

                                <span className="text-sm text-gray-500">
                                    PKL / Internship
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Operation Helpdesk
                            </h3>

                            <p className="mt-2 text-lg font-medium text-gray-600">
                                PT Telkom Infrastruktur Indonesia
                            </p>

                            {/* Description */}
                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Selama menjalani Praktik Kerja Lapangan,
                                saya mendapatkan pengalaman dalam lingkungan
                                kerja profesional, khususnya pada bidang
                                operasional dan helpdesk. Saya terlibat dalam
                                proses monitoring, pengecekan laporan, serta
                                menggunakan beberapa tools internal untuk
                                mendukung pekerjaan sehari-hari.
                            </p>

                            {/* Detail */}
                            <div className="mt-8 grid grid-cols-2 gap-4">

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-400">
                                        Periode
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        Juli - Desember 2025
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-400">
                                        Divisi
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        Assurance
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}