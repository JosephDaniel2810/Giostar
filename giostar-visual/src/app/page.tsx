// app/page.tsx  (or wherever your "Home" component lives)

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

////////////////////////////////////////////////////////////////////////////////
// Helper Component: CountUp (smoothly increments from 0 → `end`)
////////////////////////////////////////////////////////////////////////////////
interface CountUpProps {
  end: number;
  duration?: number; // in seconds
  suffix?: string;   // e.g. "+" if you want "20000+"
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
// Main Component: Home Page
////////////////////////////////////////////////////////////////////////////////
export default function Home() {
  // Stats data
  const stats = [
    { label: "Doctors", value: 10, suffix: "+", color: "bg-green-400" },
    { label: "Patients treated", value: 20000, suffix: "+", color: "bg-teal-500" },
    { label: "Hospitals in India", value: 3, suffix: "+", color: "bg-green-400" },
    { label: "Years", value: 20, suffix: "+", color: "bg-teal-500" },
  ];

  // Services data
  const services = [
    {
      title: "ALS",
      desc: "Amyotrophic Lateral Sclerosis gradually takes away a person's ability to move, speak, eat, and eventually breathe.",
      img: "/als.jpg",
      // assume /public/als.jpg is 220×160 (or similar) aspect ratio
    },
    {
      title: "Arthritis",
      desc: "It causes joint pain, inflammation, and reduced function. It can affect people of any age, including children.",
      img: "/arthritis.jpg",
    },
    {
      title: "Paralysis",
      desc: "Paralysis can be accompanied by sensory and/or motor nerve damage, leading to the loss of muscle functions.",
      img: "/paralysis.jpg",
    },
  ];

  // Blogs data
  const blogs = [
    {
      title: "Power of Stem Cells",
      desc: "Stem cells are special cells in the body that can develop into different types of cells. Powerful enough to fix damaged tissues and organs.",
      img: "/blog1.jpg",
      color: "bg-teal-500",
      // assume /public/blog1.jpg is 220×120 or similar
    },
    {
      title: "Diabetes: Stem Cells Offering Healthy Promises",
      desc: "Saraswat A, Srivastava A. J Stem Cell Res Ther. 2018 May, 4(3):46-47. Editorial Diabetes is a chronic …",
      img: "/blog2.jpg",
      color: "bg-teal-500",
    },
    {
      title: "Role Of Cell Based Approaches In Cancer Immunotherapy",
      desc: "Mahmood A, Srivastava A, Srivastava S, Pandya H, Neel Khokhani, Divyang Patel, Rangnath Mishra. J Stem Cell …",
      img: "/blog3.jpg",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center py-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-teal-500 rounded-2xl shadow-lg w-48 h-72 flex items-end justify-center overflow-hidden"
          >
            <Image
              src="/doctor1.png"
              alt="Doctor 1"
              width={180}
              height={260}
              className="object-cover"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-2 text-green-500">GIOSTAR INDIA</h1>
            <h2 className="text-lg font-semibold mb-4">Stem Cell Research Institute &amp; Hospitals</h2>
            <p className="mb-4">
              Regenerative medicine has been called the "next evolution of medical treatments," by
              the U.S. Department of Health and Human Services. "With its potential to heal, this
              new field of science is expected to revolutionize health care."
            </p>
            <hr className="my-4 border-green-500/30" />
            <p>
              Global Institute of Stem Cell Therapy and Research (GIOSTAR), headquartered in San
              Diego, California (U.S.A.), was formed with the vision to provide stem cell based
              therapy to aid those suffering from degenerative or genetic diseases around the world.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                href="/about"
                className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-500 hover:text-white transition-shadow shadow-md"
              >
                About Us
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="bg-teal-500 rounded-2xl shadow-lg w-48 h-72 flex items-end justify-center overflow-hidden"
          >
            <Image
              src="/doctor2.png"
              alt="Doctor 2"
              width={180}
              height={260}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex justify-center gap-4 py-6 bg-green-500/10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col items-center justify-center px-8 py-4 rounded-lg text-white font-bold text-lg shadow-md ${stat.color}`}
          >
            <span className="text-2xl">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
            </span>
            <span className="text-sm font-medium mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </section>

      {/* Services Section */}
      <section id="therapy" className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-green-500">Services</h2>
        <p className="text-center mb-8">
          GIOSTAR India's mission is to administer the safest and most effective stem cell therapies
          and to deliver the highest quality care through its hospitals.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center transition-transform duration-200 ease-in-out"
            >
              {/* Direct Image with explicit width/height and object-contain */}
              <Image
                src={service.img}
                alt={service.title}
                width={220}
                height={160}
                className="rounded-lg mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-500">{service.title}</h3>
              <p className="text-center mb-4">{service.desc}</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-500 transition-shadow shadow-md">
                Read more →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a href="/therapy" className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-500 transition-shadow shadow-md">
            More Services
          </a>
        </div>
      </section>

      {/* Video Section */}
      <section className="flex justify-center py-8">
        <div className="w-full max-w-2xl relative rounded-xl overflow-hidden shadow-lg h-0 pb-[28.125%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/YuILwK5OibY"
            title="GIOSTAR in ZEE TV - Tomorrow's World"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Help & Schedule Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-12 py-12 px-4 bg-gray-100">
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-2xl font-bold mb-2 text-green-500">HOW CAN WE HELP YOU?</h2>
          <p className="mb-4">
            Giostar India offers the best stem cell therapy treatment at its hospitals. We are
            pioneers of regenerative therapies.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-500 transition-shadow shadow-md">
            <a href="/about">Learn More</a>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image src="/logo.png" alt="GIOSTAR Logo" width={140} height={140} className="mb-2" />
          <h3 className="text-lg font-bold text-green-500 mb-2">HOSPITAL SCHEDULE</h3>
          <ul className="text-left space-y-1">
            <li>
              <span className="font-semibold">Ahmedabad:</span>{" "}
              <span className="ml-2">09:30 am – 06:00 pm (Mon–Sat)</span>
            </li>
            <li>
              <span className="font-semibold">Bangalore:</span>{" "}
              <span className="ml-2">09:30 am – 06:00 pm (Mon–Sat)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-500">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex-1 transition-transform duration-200 ease-in-out"
          >
            <p>
              Thank you Dr. Patel! I am over 2 month out from the stem cell treatment that you did
              in my knee and I am still pain free. It is really working for me and I hope not to
              have to see you for a long time.
            </p>
            <div className="mt-4 font-bold text-green-500">AMRIT</div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex-1 transition-transform duration-200 ease-in-out"
          >
            <p>
              Lupus made life miserable and on finding about stem cell therapy provided by
              scientists of Giostar India took the treatment and now I am happily recovering.
            </p>
            <div className="mt-4 font-bold text-green-500">PRATICK</div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex-1 transition-transform duration-200 ease-in-out"
          >
            <p>
              My grandmother was suffering from Osteoarthritis for a long time. All the medicines
              we tried were in vain. That's when I came to know about GIOSTAR Stem cell therapy.
              The results proved to be astounding!
            </p>
            <div className="mt-4 font-bold text-green-500">JAYSON</div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-500">From Our Blogs</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.06 }}
              className={`rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center transition-transform duration-200 ease-in-out ${
                i % 2 === 0 ? "bg-teal-500 text-white" : "bg-gray-100 text-green-500"
              }`}
            >
              {/* Direct Image with explicit width/height and object-contain */}
              <Image
                src={blog.img}
                alt={blog.title}
                width={220}
                height={120}
                className="rounded-lg mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-center mb-4">{blog.desc}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-teal-500 transition-shadow shadow-md">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
