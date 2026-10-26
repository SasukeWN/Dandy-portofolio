export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-16 text-slate-400">
      <div className="mx-auto max-w-6xl text-center">

        {/* CTA Section */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Punya Proyek atau Ide Digital?
          </h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Mari diskusikan kebutuhan website Anda. Konsultasi awal gratis, tanpa komitmen.
          </p>
          <a
            href="https://wa.me/6285770347428?text=Halo%20Dandy%2C%20saya%20tertarik%20untuk%20diskusi%20proyek%20website."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:-translate-y-1"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            Hubungi via WhatsApp
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm">
            © 2026 Dandy Ghaisan Vidyanto
          </p>
        </div>
      </div>
    </footer>
  );
}