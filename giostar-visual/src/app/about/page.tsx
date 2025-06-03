"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const hospitalBranches = [
  {
    name: "AHMEDABAD",
    img: "/hospital-ahmedabad.jpg",
    address:
      "GIOSTAR Hospital Ahmedabad, Add: 11-12 Garden View Corporate House, Opp: Auda Garden, B/h: Armada, off Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054 India +91-7043008890",
  },
  {
    name: "BANGALORE",
    img: "/hospital-bangalore.jpg",
    address:
      "No: 714-Modi Hospital Road Opp: State Bank of India (SBI) Rajajinagar, 2nd Stage, Bengaluru-560 086 Karnataka. India +91-6366209990 (India)",
  },
];

const hospitalImages = [
  "/hospital-usa-1.jpg",
  "/hospital-usa-2.jpg",
  "/hospital-usa-3.jpg",
];

const videos = [
  "cwDtDmhjlJI",
  "J1bNoDTUItw",
  "Vu_88ELXKYQ",
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section (UPDATED to match your screenshot) */}
      <section className="bg-primary-green py-20 px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text Block */}
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            About Giostar India
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/90">
            GLOBAL INSTITUTE OF STEM CELL THERAPY AND RESEARCH
          </h2>
          {/* Wavy line SVG */}
          <svg
            width="120"
            height="24"
            viewBox="0 0 120 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
          >
            <path
              d="M0 12 Q15 0 30 12 T60 12 T90 12 T120 12"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Right Image (Bottom‐Only Semicircle) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-60 h-60 md:w-72 md:h-72 overflow-hidden rounded-b-full"
        >
          <Image
            src="/about-hero-doctors.jpg"
            alt="Doctors"
            width={288}
            height={288}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* About Description Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          GIOSTAR INDIA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-lg text-gray-700"
        >
          GIOSTAR advanced Stem Cell science will be used to treat qualified patients on
          needed. <br />
          <br />
          <span className="font-bold text-gray-900">GIOSTAR India</span> has an ability to
          treat several devastating Immunological diseases and Blood related diseases.
          These include Diabetes Type I and Type II, Lupus, Multiple Sclerosis, Crohn's
          disease, Vasculitis, Scleroderma, Myasthenia Gravis, Sickle Cell Anemia,
          Leukemia, Lymphoma, Thalassemia and developing the therapies for Alzheimer's,
          Anti-Aging Treatments, Parkinson's disease, Cancer, Heart and Retinal
          Degeneration, Amyotrophic Lateral Sclerosis, Neuropathy, Osteoarthritis,
          Paralysis, Strokes, Spinal Cord Injuries, Skin Burns and Spinal Muscular
          Atrophy (SMA).<br />
          <br />
          GIOSTAR India is in process of opening Institutes of Regenerative Medicine and
          Dedicated Stem Cell Treatment hospitals/centers in Asia, Middle East, Africa,
          North and South America and Europe. The proposed facilities will be developed
          with the international support from public and private sectors grants and
          investments to provide stem cell based therapy for those suffering from
          degenerative or genetic diseases.
        </motion.p>
        <div className="flex flex-wrap gap-6 justify-center">
          {hospitalImages.map((img, i) => (
            <motion.div
              key={img}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 + i * 0.1, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-lg w-60 h-40 bg-gray-100"
            >
              <Image
                src={img}
                alt={`Hospital ${i + 1}`}
                width={240}
                height={160}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 gap-6">
            {hospitalBranches.map((branch, i) => (
              <motion.div
                key={branch.name}
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 + i * 0.1, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-4"
              >
                <Image
                  src={branch.img}
                  alt={branch.name}
                  width={120}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 mb-1">{branch.name}</div>
                  <div className="text-sm text-gray-700">{branch.address}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center bg-black text-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Visit Our Branch</h3>
            <p className="mb-6 text-gray-200">
              We are present all across the country; may not be physically but in the
              smiles of millions of lives that we have touched
            </p>
            <a href="/contact" className="underline font-semibold">
              Contact Us →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Vision & Videos Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-4 text-gray-700"
        >
          Our Vision
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center mb-4 text-gray-900"
        >
          GIOSTAR India
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-center text-lg text-gray-700"
        >
          The GIOSTAR team includes international leaders in the field of adult stem cell,
          embryonic stem (ES) cells and Induced Pluripotent Stem (IPS) cells research and
          technologies. The GIOSTAR team is the first in demonstrating the significance of
          ES cell use for the development of therapies for several degenerative diseases
          related to tissue and organs. The publications of these therapies have been
          thoroughly investigated and documented by many noted journals of medicine.
          GIOSTAR is leading the most advanced research in the field of ES cells and IPS
          cells to develop new therapies for future clinical use.<br />
          <br />
          GIOSTAR advanced Stem Cell science will be used to treat qualified patients on
          needed basis.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {videos.map((vid, i) => (
            <motion.div
              key={vid}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 + i * 0.1, ease: "easeOut" }}
              className="rounded-xl overflow-hidden shadow-lg w-full md:w-1/3 aspect-video bg-black"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${vid}`}
                title={`About Video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
