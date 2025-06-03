// File: app/therapy/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  // ──────────── Newly added three sections ────────────
  {
    title: "Spinal Muscular Atrophy",
    desc: "Spinal Muscular Atrophy (SMA) is a neuromuscular disease characterized by degeneration of the anterior horn cells in the spinal cord, leading to progressive muscle weakness and atrophy.",
    img: "/services/spinal1.jpg",
  },
  {
    title: "Myasthenia Gravis",
    desc: "Myasthenia Gravis: Myasthenia Gravis can be defined as the chronic autoimmune condition, affecting skeletal muscles of the body.",
    img: "/services/myasthenia.jpg",
  },
  {
    title: "Skin Burns",
    desc: "Skin Burns: Burn injury has been reported to be an important cause of morbidity and mortality in many countries. Stem cell therapy can help regenerate damaged skin tissue.",
    img: "/services/skin-burns.jpg",
  },
  // ──────────── Original services list ────────────
  {
    title: "Diabetes (Type 1)",
    desc: "Diabetes (Type 1): Type 1 diabetes also known as insulin dependent diabetes or juvenile diabetes, when the pancreatic ability to produce insulin is compromised.",
    img: "/services/diabetes-type1.jpg",
  },
  {
    title: "Diabetes (Type 2)",
    desc: "Diabetes (Type 2): Diabetes is the disease affecting the metabolism of glucose to a great extent. The glucose is required to fuel our body's cells.",
    img: "/services/diabetes2.jpg",
  },
  {
    title: "Liver Diseases",
    desc: "Liver Disease: The liver is the second largest organ of the body, about the size of a football, lying just below your lungs. Stem cell therapy can help regenerate damaged liver tissue.",
    img: "/services/liver.jpg",
  },
  {
    title: "Alzheimer's",
    desc: "Alzheimer's disease is the most commonly observed neurodegenerative disorder, associated with memory loss and cognitive decline.",
    img: "/services/alzheimers.jpg",
  },
  {
    title: "Arthritis",
    desc: "Arthritis is a condition causing joint pain, swelling, and stiffness, making movement difficult and affecting daily activities.",
    img: "/services/arthritis.jpg",
  },
  {
    title: "Spinal Cord Injuries",
    desc: "Spinal Cord Injuries: Spinal Cord Injury is severe damage to the human spinal cord into three different segments of the neural tissue leading to profound loss of function.",
    img: "/services/spinal.jpg",
  },
  {
    title: "Anti‑Aging Treatment",
    desc: "Anti‑Aging: Stem cells have the potential to regenerate all kinds of cells of the body. Stem cell treatment for anti‑aging focuses on revitalizing skin and organ function.",
    img: "/services/antiaging.jpg",
  },
  {
    title: "COPD",
    desc: "COPD: COPD can be extended as Chronic Obstructive Pulmonary Disease, commonly used for a group of lung problems that cause breathing difficulties.",
    img: "/services/copd.jpg",
  },
  {
    title: "Sickle Cell Anemia",
    desc: "Sickle Cell Anemia: Sickle cell anemia is considered to be an inborn error leading to blood disorder, affecting more than 30 million people worldwide.",
    img: "/services/sicklecell.jpg",
  },
  {
    title: "Leukemia",
    desc: "Leukemia: Leukemia is a cancer of the blood or bone marrow and is characterized by an abnormal proliferation (production by malignant transformation) of white blood cells.",
    img: "/services/leukemia.jpg",
  },
  {
    title: "Lymphoma",
    desc: "Lymphoma: Lymphoma can be categorized as cancer of lymphoid system and is broadly divided into two main categories, Hodgkin and non‑Hodgkin.",
    img: "/services/lymphoma.jpg",
  },
  {
    title: "Thalassemia",
    desc: "Thalassemia: Like Sickle cell anaemia, thalassemia is also a condition; that is being inherited from the parents, making an inborn error affecting the hemoglobin synthesis.",
    img: "/services/thalassemia.jpg",
  },
  {
    title: "Lupus",
    desc: "Lupus: Lupus is one of the types of autoimmune disorder, wherein body's own immune system attack the tissues causing chronic inflammation.",
    img: "/services/lupus.jpg",
  },
  {
    title: "Multiple Sclerosis",
    desc: "Multiple Sclerosis: Multiple sclerosis, also called disseminated sclerosis, is known to be the most fickle neurodegenerative disease; characterized by immune‑mediated inflammation of myelin sheath.",
    img: "/services/multiplesclerosis.jpg",
  },
  {
    title: "Amyotrophic Lateral Sclerosis",
    desc: "Amyotrophic Lateral Sclerosis: The literal meaning of the disease is the wastage of the voluntary muscles due to lack of nourishment resulting in respiratory failure.",
    img: "/services/als1.jpg",
  },
  {
    title: "Crohn's Disease",
    desc: "Crohn's: Crohn's disease is one of the two forms of chronic inflammatory bowel disorder. Crohn's disease causes swelling in the digestive tract.",
    img: "/services/crohns.jpg",
  },
  {
    title: "Vasculitis",
    desc: "Vasculitis: Vasculitis is a common autoimmune condition with the inflammation of the blood vessels; including small vessels, medium vessels, and large arteries.",
    img: "/services/vasculitis.jpg",
  },
  {
    title: "Scleroderma",
    desc: "Scleroderma: Scleroderma can be grouped into an autoimmune disease of the connective tissue: 'systemic sclerosis' and 'localized scleroderma.'",
    img: "/services/scleroderma.jpg",
  },
  {
    title: "Stroke",
    desc: "Stroke: Similar to a heart attack, the Stroke is characterized by blood flow to the brain being stopped due to a clot or ruptured vessel causing brain damage.",
    img: "/services/stroke.jpg",
  },
  {
    title: "Cancer",
    desc: "Cancer: Cancer is a class of disease characterized by uncontrolled division of cells leading to formation of tumor mass. Stem cell immunotherapy can be used as adjuvant treatment.",
    img: "/services/cancer.jpg",
  },
  {
    title: "Chronic Pain",
    desc: "Chronic Pain: Chronic pain syndrome is a common problem affecting almost 40‑50 % people above age 50. Stem cell therapy aims to reduce inflammation and regenerate nerve tissue.",
    img: "/services/chronicpain.jpg",
  },
  {
    title: "Muscular Dystrophy",
    desc: "Muscular Dystrophy: Muscular Dystrophy can be classified as the disease with inborn genetic manipulation, which damages and weakens the muscles progressively.",
    img: "/services/musculardystrophy.jpg",
  },
  {
    title: "Cardiovascular Disease",
    desc: "Cardiovascular Disease: Cardiovascular diseases come under a range of diseases affecting the heart. It involves blockages, strokes, heart failure, etc.",
    img: "/services/cardiovascular.jpg",
  },
  {
    title: "Parkinson's",
    desc: "Parkinson's: Parkinson's disease is a chronic, progressive movement disorder associated with the abnormal functioning of the central nervous system, leading to tremors and rigidity.",
    img: "/services/parkinsons.jpg",
  },
  {
    title: "Erectile Dysfunction",
    desc: "Erectile Dysfunction: Erectile dysfunction, commonly referred as 'impotence,' is the repeated inability to get or keep an erection for sexual performance.",
    img: "/services/erectile.jpg",
  },
  {
    title: "Failed Back Surgery Syndrome",
    desc: "Failed Back Surgery Syndrome: Post-laminectomy or post-laminotomy syndromes cause persistent backache despite various therapies using either drugs or reoperation.",
    img: "/services/failedback.jpg",
  },
  {
    title: "Neuropathy",
    desc: "Neuropathy: Neuropathy is a common term assigned to general malfunctioning of neurons. It is prolonged injury or disease triggered nerve damage.",
    img: "/services/neuropathy.jpg",
  },
  {
    title: "Paralysis",
    desc: "Paralysis: Paralysis can be accompanied by sensory and/or motor nerve damage, leading to the loss of muscle functions. Stem cell therapy aims to regenerate damaged nerve cells.",
    img: "/services/paralysis.jpg",
  },
];

export default function TherapyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ===================== HERO SECTION ===================== */}
      <section className="bg-gradient-to-r from-green-400 to-green-300 py-16 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: "Stem Cell Therapy" Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Stem Cell Therapy
          </h1>
          <p className="text-lg text-white/90">
            Cell therapy is the only procedure in the world that has proven to be
            safe and highly effective in decreasing the speed of the aging
            process that at the same time provides a great help to recover your
            health, vitality, physical power and young appearance.
          </p>
          <div className="h-1 w-24 bg-white/40 rounded mt-6"></div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white relative"
        >
          <Image
            src="/about-hero-doctors.jpg"
            alt="Doctors"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ============= SERVICES GRID ============= */}
      <section className="py-16 px-4 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-center text-gray-900 mb-8"
        >
          What We Offer
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-center text-gray-700 mb-4">
                  {service.desc}
                </p>
                <div className="flex justify-center">
                  <button className="bg-green-500 text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
