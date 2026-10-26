import foto_project from '../assets/foto_project.png'
import Laporan_warga from '../assets/Laporan_warga.png'
import lms_project from '../assets/lms_project.png'

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12" data-aos="fade-up">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Portofolio
                    </p>
                    <h2 className="text-3xl font-bold text-slate-900">
                        Proyek yang Telah Saya Kerjakan
                    </h2>
                </div>

                {/* PROJECT 1 */}
                <div
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row mb-8"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">

                        <img
                            src={foto_project}
                            alt="Landing Page Sewa Kamera"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />

                    </div>

                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">

                        <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            Landing Page Sewa Kamera
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Landing page berkonversi tinggi untuk usaha rental fotografi.
                            Memudahkan calon pelanggan mengecek katalog harga, ketersediaan
                            unit, dan langsung menghubungi penyedia jasa. Dibangun dengan
                            antarmuka yang bersih, cepat, dan 100% responsif di semua perangkat.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                Tailwind CSS
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                React
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4">

                            <a
                                href="https://blekshoot-z.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-sm font-semibold bg-primary gap-3 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
                            >
                                Kunjungi
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>

                        </div>
                    </div>
                </div>


                {/* PROJECT 2 */}
                <div
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >

                    <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">

                        <img
                            src={Laporan_warga}
                            alt="Website Laporan Warga"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />

                    </div>

                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">

                        <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            Website Laporan Warga
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sistem manajemen pengaduan masyarakat berbasis web fullstack
                            dengan admin dashboard. Warga dapat menyampaikan laporan
                            secara digital, sementara admin mengelola dan memantau
                            status penanganan setiap kasus secara real-time dan terorganisir.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                Tailwind CSS
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                React JS
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                Node JS
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                Express
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                MySQL
                            </span>

                        </div>

                        <div className="flex flex-wrap gap-4">

                            <a
                                href="https://laporan-warga-frontend.vercel.app/laporan_warga/input_data"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-sm font-semibold bg-primary gap-3 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
                            >
                                Kunjungi
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>

                        </div>

                    </div>

                </div>


                {/* PROJECT 3 */}
                <div
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <div className="md:w-1/2 min-h-64 md:min-h-full bg-slate-100 relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center p-4 lg:p-6">

                        <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-md bg-white transition duration-500 group-hover:scale-[1.02]">
                            <img
                                src={lms_project}
                                alt="EduPortal LMS"
                                className="w-full h-auto object-contain block"
                            />
                        </div>

                    </div>

                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">

                        <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            EduPortal - Learning Management System
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Platform edukasi digital terpadu dengan sistem autentikasi
                            aman, manajemen materi pembelajaran, dan dashboard responsif
                            untuk guru serta siswa. Dirancang sebagai ekosistem
                            pembelajaran lengkap yang siap digunakan secara operasional.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                                Tailwind CSS
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                              Next Js
                            </span>

                            <span className="text-xs font-semibold bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-full">
                               Mysql
                            </span>

                        </div>

                        <div className="flex flex-wrap gap-4">

                            <a
                                href="https://lms-project-nine-sandy.vercel.app/auth/login"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-sm font-semibold bg-primary gap-3 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
                            >
                                Kunjungi
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}