// File: app/therapy/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-teal-400 to-teal-600 text-white overflow-hidden">
        {/* Left‐side text container */}
        <div className="max-w-4xl mx-auto px-6 md:px-20 py-20 relative z-10">
          <motion.h1
            className="text-5xl font-bold mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Disclaimer
          </motion.h1>

          <motion.p
            className="uppercase tracking-widest mb-6 text-sm"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            GLOBAL INSTITUTE OF STEM CELL THERAPY AND RESEARCH
          </motion.p>

          {/* The wavy/underline graphic (just a simple white line with opacity) */}
          <motion.div
            className="w-32 h-1 bg-white opacity-50 mb-10"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          />
        </div>

        {/* Right‐side circular image */}
        <div className="absolute bottom-0 right-0 opacity-20">
          <motion.div
            className="relative w-72 h-72 rounded-full overflow-hidden bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
          >
            {/* 
              Replace “/images/microscope.jpg” with wherever you store your image.
              Make sure the parent DIV is “relative” so that Image with fill can position correctly.
            */}
            <Image
              src="/microscope.jpg"
              alt="Microscope"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Anyone who accesses this web site, before following any of the guidance or making any decisions or reaching any conclusions from the web site should first consult their own physician.
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            The information on our webpage may not be the most recent version. Information provided at the webpage is general and written in a way to easily understandable by a layman. Therefore, we make no warranties or guarantees about the technical accuracy, completeness, or adequacy of the information contained on this site. If you have any question or wish to get more correct/updated version please call our office. We may have more current or accurate information.
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed italic font-semibold"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            “Regenerative medicine has been called the “next evolution of medical treatments,” by the U.S. Department of Health and Human Services. “With its potential to heal, this new field of science is expected to revolutionize health care.”
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            All stem cell research carried out by GIOSTAR researchers and scientists has followed strict scientific and ethical guidelines directed by National Institute of Health, USA and approved by National Institute of Health, USA. All publications/research in the field of stem cell is done at the most prestigious Universities of USA and are peer reviewed and available at “PubMed” a web page managed by National Institute of health, USA.
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            GIOSTAR also works in accordance with the guidelines of International Society of Stem Cell Research (ISSCR) and International Society for Cellular Therapy (ISCT). Our stem cell therapy procedures are in accordance with FDA regulations CFR21 Part 1271 (1271.15.b). Stem cell transplants or bone marrow transplants are regular clinical practice in United States and many other countries for more than 25 years. Stem cell transplants or Bone marrow transplants are being used to treat patients with hematological disorders such as sickle cell anemia, thalassemia, leukemia and lymphomas etc. GIOSTAR also follows the ethical guidelines in accordance with the World Medical Association’s WMA Declaration of Helsinki – Ethical Principles for Medical Research Involving Human Subjects — “In the treatment of a patient, where proven interventions do not exist or have been ineffective, the physician, may use an unproven intervention if in the physician’s judgment it offers hope of saving life, re-establishing health or alleviating suffering.”
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            Any and all opinions and/or statements offered on this website are for the information and education purpose only. GIOSTAR and its affiliate centers are offering certain investigational treatments using adipose / bone marrow which uses patients own cells which is called autologous transplant. The centers only provide surgical procedures and centers are not involved in the use or manufacture of any investigational drugs.
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Other than hematological disorders, this website does not claim that any applications using cells offer to cure, treat or prevent any medical condition and it is not evaluated or approved by USA FDA. This website does not offer any medical advice. It is critically important for any patient to do his or her own research to reach an informed decision. It is completely voluntary decision by any and all patients to participate in some of our patient funded clinical studies at various locations around the world.
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            The testimonials, statements, and opinions presented on this website are applicable to the individuals depicted. Results may vary and may not be representative of the experience of others. The testimonials are representative of patient experience but the exact results and experience will be unique and individual to each patient.
          </motion.p>

          <motion.p
            className="text-gray-800 leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Moreover, each country has its own country specific stem cell regulations depending on its need. Each location of GIOSTAR is an autonomous body and operates independently of each other. For India, GIOSTAR follows guidelines set up by Government of India. Furthermore, GIOSTAR is working with the Government of India and several states of India, developing stem cell research and transplant program for the large populous of millions in India suffering from genetic and hematological diseases.
          </motion.p>

          <motion.p
            className="text-gray-900 font-bold leading-relaxed"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Creating positive and significant impact for human race is our primary goal. From research to treatment is our purpose.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
