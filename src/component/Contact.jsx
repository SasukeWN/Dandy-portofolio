import { useEffect, useState } from "react";
import { X, Mail, Phone } from "lucide-react";

export default function Contact({ isOpen, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setShow(false);
            return;
        }

        const frame = requestAnimationFrame(() => {
            setShow(true);
        });

        return () => cancelAnimationFrame(frame);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${show
                ? "bg-black/50 backdrop-blur-md opacity-100"
                : "bg-black/0 backdrop-blur-0 opacity-0"
                }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 ease-out`}
            >
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
                >
                    <X size={22} />
                </button>

                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                        <Phone className="text-blue-600" size={34} />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800">
                        Contact Saya
                    </h2>
                </div>

                {/* Contact */}
                <div className="mt-8 space-y-4">
                    <a
                        href="https://wa.me/6285770347428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-50 hover:shadow-lg"
                    >
                        <div className="rounded-xl bg-green-500 p-3 text-white">
                            <Phone size={22} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                            <p className="text-sm text-gray-500">
                                +62 857-7034-7428
                            </p>
                        </div>
                    </a>

                    <a
                        href="mailto:dandyghaisanv@gmail.com"
                        className="group flex items-center gap-4 rounded-2xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg"
                    >
                        <div className="rounded-xl bg-blue-500 p-3 text-white">
                            <Mail size={22} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">Email</h3>
                            <p className="text-sm text-gray-500">
                                dandyghaisanv@gmail.com
                            </p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}