// app/bangalore/page.tsx

"use client";


import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaUserMd,
  FaRegNewspaper,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaClipboardCheck,
  FaSyringe,
  FaUserTie,
  FaHeadset,
} from "react-icons/fa";

////////////////////////////////////////////////////////////////////////////////
// Helper Component: CountUp (smoothly increments from 0 → `end`)
////////////////////////////////////////////////////////////////////////////////
interface CountUpProps {
  end: number;
  duration?: number; // in seconds
  suffix?: string;   // e.g. "+" if you want "4200+"
}
function CountUp({ end, duration = 2, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 frames/sec
    let rafId: number;

    function tick() {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

////////////////////////////////////////////////////////////////////////////////
// FAQ Data (same as Ahmedabad)
////////////////////////////////////////////////////////////////////////////////
const faqItems = [
  {
    question: "What is cancer cellular immunotherapy?",
    answer:
      "Immunosurveillance is the name of process for immune system mediated elimination of tumor cells when needed. However, under progressive tumor conditions immunosuppressive factors are released which hamper the immune system of body to fight cancer. Our cancer cellular immunotherapy treatment works by infusion of activated immune cells, developed under lab conditions, into the cancer patient. In this therapy, patient's own immune cells are collected from blood and go thorough our specialized process in the lab under sterile conditions and infused back into the patients. It is personalized and specifically generated against the patient's tumor-specific antigens.",
  },
  {
    question: "What are the effects and side effects (toxicities) of cancer cellular immunotherapy?",
    answer:
      "Side effects of immunotherapy can include fever, chills, fatigue, rash, diarrhea, and in rare cases more serious immune-related adverse events affecting organs such as lungs, liver, or intestines. Our team monitors every patient closely. For most patients, immunotherapy is well tolerated, and the benefits outweigh the minor side effects.",
  },
  {
    question: "At what stage of cancer or treatment the vaccine can be used or started?",
    answer:
      "Cancer cellular immunotherapy may be used at various stages depending on individual patient factors. In some cases, we start immunotherapy after initial surgical removal of tumor, in others as a stand-alone treatment if surgery is not an option. Your oncologist and our immunology specialists will determine the best timing based on your diagnosis, previous treatments, and overall health status.",
  },
];

////////////////////////////////////////////////////////////////////////////////
// Main Component: Bangalore Centre Page
////////////////////////////////////////////////////////////////////////////////
export default function BangaloreCentre() {
  // FAQ toggle state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Contact and Hours
  const phoneNumber = "+91-6366209990";
  const email = "contact@giostar.com";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ==================== Hero Banner ==================== */}
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <Image
          src="/bangalore-hero.jpg" // Replace with your actual Bangalore hero image
          alt="Giostar Hospital Bangalore"
          fill
          className="object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 w-full bg-green-500/90 py-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold text-center">
            Giostar Hospital Bangalore
          </h1>
        </motion.div>
      </section>

      {/* ============== Trusted by Thousands (Stats) ============== */}
      <section className="py-20 px-4 relative">
        <motion.div
          className="absolute inset-0 bg-[url('/world-map-dot.png')] bg-center bg-no-repeat bg-opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900"
          >
            Trusted by Thousands of <br className="md:hidden" /> PATIENTS!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
          >
            "Trusted by thousands, we prioritize your well-being with personalized care.
            Join our community and experience healthcare you can rely on."
          </motion.p>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Happy Patients (4,200+) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <FaUserFriends className="text-4xl text-green-500" />
              <div className="mt-2 text-3xl font-extrabold text-gray-900">
                <CountUp end={4200} duration={2} suffix="+" />
              </div>
              <div className="mt-1 text-gray-700">Happy Patients</div>
            </motion.div>
            {/* Certified Doctors (10+) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <FaUserMd className="text-4xl text-green-500" />
              <div className="mt-2 text-3xl font-extrabold text-gray-900">
                <CountUp end={10} duration={2} suffix="+" />
              </div>
              <div className="mt-1 text-gray-700">Certified Doctors</div>
            </motion.div>
            {/* Publications (241+) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <FaRegNewspaper className="text-4xl text-green-500" />
              <div className="mt-2 text-3xl font-extrabold text-gray-900">
                <CountUp end={241} duration={2} suffix="+" />
              </div>
              <div className="mt-1 text-gray-700">Publications</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Contact / Giostar Info / Opening Hours ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-green-500 text-white rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <hr className="border-white/40 mb-4" />
            <div className="flex items-center mb-3">
              <FaPhoneAlt className="text-xl mr-3" />
              <span>{phoneNumber}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-3" />
              <span>{email}</span>
            </div>
          </motion.div>

          {/* Giostar Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">GIOSTAR</h3>
            <p className="text-gray-600 mb-6">
              We are the first one in India who is leading in stem cell services and
              providing stem cell treatment at an affordable cost when compared to
              all others in world.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              <a href="/contact">Book Now</a>
            </button>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="bg-blue-500 text-white rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
            <hr className="border-white/40 mb-4" />
            <div className="flex items-center mb-3">
              <FaClock className="text-xl mr-3" />
              <span>Monday – Saturday: 9:30 AM – 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <FaClock className="text-xl mr-3" />
              <span>Sunday: Closed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Bangalore Centre Introduction (Text + Doctor Image) ====== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              GIOSTAR Bangalore – Stem Cell Therapy/Treatment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              GIOSTAR Bangalore Stem Cell Consultants, the group of highly specialized
              stem cell therapy researchers and doctors who always provides proper
              counseling of patients first and only then confirm about the possibilities
              of stem cell therapy for every particular patient. As we know{" "}
              <span className="font-semibold">stem cell therapy</span> is getting
              successive to treat many degenerative diseases and many clinical trial
              and case study proved that stem cell therapy is safest and non surgical
              treatment, providing opportunity for patients such as Diabetes, Spinal
              cord injury, Arthritis, Retinitis, COPD, Cerebral Palsy, Muscular
              Dystrophy, Liver Disease and so on for more degenerative diseases.
            </p>
          </motion.div>

          {/* Right: Doctor Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="w-full max-w-sm mx-auto"
          >
            <Image
              src="/bangalore-doctor.jpg" // Replace with your actual doctor image
              alt="Dr. Bangalore"
              width={400}
              height={600}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================ What We Offer (Service Cards) ================ */}
      <section className="py-16 bg-gray-50">
        <motion.div
          className="bg-green-500/10 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-green-500 uppercase tracking-wider mb-2">Service</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Offer
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Spinal Cord Injury */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-green-500/30"
          >
            <div className="h-48 w-full relative">
              <Image
                src="/services/spinal.jpg" // Replace with your actual image for Spinal Cord Injury
                alt="Spinal Cord Injury"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-500 mb-3 text-center">
                Spinal Cord Injury
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Spinal Cord Injury is a severe damage to the human spinal cord into three
                different segments of the neural tissue leading to the severe.
              </p>
              <div className="flex justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-shadow shadow-md">
                  Read more →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Anti-Aging Treatment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-green-500/30"
          >
            <div className="h-48 w-full relative">
              <Image
                src="/services/antiaging.jpg" // Replace with your actual image for Anti-Aging
                alt="Anti-Aging Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-500 mb-3 text-center">
                Anti-Aging Treatment
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                GIOSTAR scientists have developed the technology to differentiate Stem cells
                into neural cell, blood cells, skin cell and hair cells.
              </p>
              <div className="flex justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-shadow shadow-md">
                  Read more →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Erectile Dysfunction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-green-500/30"
          >
            <div className="h-48 w-full relative">
              <Image
                src="/services/erectile.jpg" // Replace with your actual image for Erectile Dysfunction
                alt="Erectile Dysfunction"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-500 mb-3 text-center">
                Erectile Dysfunction
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Erectile Dysfunction: Erectile Dysfunction, commonly referred as 'impotence', is
                the repeated inability to get or keep an erection.
              </p>
              <div className="flex justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-shadow shadow-md">
                  Read more →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-shadow"
          >
            <a href="/therapy">More Services</a>
          </motion.button>
        </div>
      </section>

      {/* ================= Gallery: GIOSTAR Hospital Bangalore ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            GIOSTAR Hospital Bangalore
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {[
              "/gallery/bangalore-1.jpg",
              "/gallery/bangalore-2.jpg",
              "/gallery/bangalore-3.jpg",
              "/gallery/bangalore-4.jpg",
              "/gallery/bangalore-5.jpg",
              "/gallery/bangalore-6.jpg",
              "/gallery/bangalore-7.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                className="relative w-full h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-blue-50 py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-green-500 uppercase tracking-wider mb-2">
                Testimonial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What They Say
              </h2>
            </div>
          </motion.div>

          <div className="mt-12 px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                name: "PRATICK",
                text: "Lupus made by life miserable and on finding about stem cell therapy provided by scientists of Giostar India took the treatment and now I am happily recovering.",
              },
              {
                name: "AMRIT",
                text: "Thank you Dr. Patel! I am over 2 month out from the stem cell treatment that you did in my knee and I am still pain free. It is really working for me and I hope not to have to see you for a long time.",
              },
              {
                name: "JAYSON",
                text: "My grandmother was suffering from Osteoarthritis for a long time. All the medicines we tried were in vain. That's when I came to know about GIOSTAR Stem cell therapy. The results proved to be astounding!",
              },
              {
                name: "MANO",
                text: "When my mom complained of chronic pain in her legs, I took her to GIOSTAR. The way the medical team took care of us was heartwarming. They made sure my mom back to her feet happily.",
              },
              {
                name: "Deepa Singh",
                text: "It has been an absolute blessing for me. I tried everything, and nothing worked as well as this. My stem cell therapy treatments started a while ago, but I gradually started seeing tremendous results. The GIOSTAR medical team and their advanced techniques are nothing less than awesome!",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg p-6 relative"
              >
                {/* Quote icon top-right */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-bl-full flex items-center justify-center">
                  <span className="text-white text-lg">&ldquo;</span>
                </div>

                <h4 className="font-bold text-gray-900 text-center mb-2">{t.name}</h4>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gold"
                      viewBox="0 0 20 20"
                      className="w-4 h-4 mx-0.5"
                    >
                      <path d="M9.049 2.927a1 1 0 01.902 0l1.286.643 1.427.714 1.578.789a1 1 0 01.555.883l.134 1.438.213 2.291a1 1 0 01-.315.811l-.998.998-.0.0-1.201 1.2a1 1 0 01-1.366.048l-1.011-.736-1.011.736a1 1 0 01-1.366-.048l-1.201-1.2-.998-.998a1 1 0 01-.315-.811l.213-2.291.134-1.438a1 1 0 01.555-.883l1.578-.789 1.427-.714 1.286-.643z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm text-center">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Address & Map Section (Bangalore) ======== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4">
          {/* Left: Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              GIOSTAR Hospital Bangalore
            </h3>
            <p className="text-lg text-gray-900 font-medium">Address:</p>
            <p className="text-gray-700">
              No. 714 – Modi Hospital Road,<br />
              Opp: State Bank of India (SBI),<br />
              Rajajinagar, 2nd Stage,<br />
              Bengaluru – 560086, Karnataka, India
            </p>
            <p className="text-gray-900">
              <span className="font-semibold">Mobile Number</span>: {phoneNumber}
            </p>
          </motion.div>

          {/* Right: Google Map with Bangalore Pin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Embed: lat=12.9721, lng=77.5936 (Giostar Hospital Bangalore) */}
            <iframe
              src="https://maps.google.com/maps?q=12.9721,77.5936&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Frequently Ask Questions
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.1 + idx * 0.05, ease: "easeOut" }}
                  className="bg-gray-50 rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left flex justify-between items-center px-6 py-4"
                  >
                    <span className="text-lg font-medium text-green-500">
                      {item.question}
                    </span>
                    <span className="text-2xl text-gray-400">
                      {isOpen ? "▴" : "▾"}
                    </span>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 overflow-hidden text-gray-700"
                  >
                    <p className="pb-4">{item.answer}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
