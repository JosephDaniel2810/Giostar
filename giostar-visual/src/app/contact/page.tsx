// File: app/contact/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClipboardList,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // → Replace with your real form‑submission logic
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ===================== HERO SECTION ===================== */}
      <section className="bg-gradient-to-r from-green-400 to-green-300 py-16 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: “Contact Us” Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/90">
            If you would like to know more about Giostar—how to get involved in our
            activities, extra information on membership, or if you are looking to
            collaborate—please reach out using the form below or by calling us
            directly.
          </p>
          <div className="h-1 w-24 bg-white/40 rounded mt-6"></div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white relative"
        >
          <Image
            src="/about-hero-doctors.jpg" // ← stays in public/contacts/hero-doctors.jpg
            alt="Doctors"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* =============== BRANCHES: Ahmedabad + Bangalore =============== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* -------- Ahmedabad Card -------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mt-6">
              Ahmedabad
            </h2>

            {/* Image Container */}
            <div className="relative w-full h-64 mt-4">
              <Image
                src="/ahmedabad.jpg" // ← public/ahmedabad.jpg
                alt="GIOSTAR Hospital Ahmedabad"
                fill
                className="object-cover"
              />
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-48 overflow-hidden mt-4">
              <iframe
                src="https://maps.google.com/maps?q=23.0225,72.5714&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahmedabad Map"
              ></iframe>
            </div>

            <div className="px-6 py-4 text-center">
              <p className="text-base text-gray-800 font-medium">
                <FaMapMarkerAlt className="inline-block text-green-500 mr-2" />
                11‑12 Garden View Corporate House, Opp: Auda Garden, Bodakdev,
                Ahmedabad, Gujarat 380054
              </p>
              <p className="mt-2 text-base text-gray-800 font-medium">
                <FaPhoneAlt className="inline-block text-green-500 mr-2" />
                +91‑7043008890
              </p>
            </div>
          </motion.div>

          {/* -------- Bangalore Card -------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mt-6">
              Bangalore
            </h2>

            {/* Image Container */}
            <div className="relative w-full h-64 mt-4">
              <Image
                src="/bangalore.jpg" // ← public/bangalore.jpg
                alt="GIOSTAR Hospital Bangalore"
                fill
                className="object-cover"
              />
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-48 overflow-hidden mt-4">
              <iframe
                src="https://maps.google.com/maps?q=12.9721,77.5936&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bangalore Map"
              ></iframe>
            </div>

            <div className="px-6 py-4 text-center">
              <p className="text-base text-gray-800 font-medium">
                <FaMapMarkerAlt className="inline-block text-green-500 mr-2" />
                No.​ 714‑Modi Hospital Road, Opp: State Bank of India (SBI),
                Rajajinagar, 2nd Stage, Bengaluru – 560086, Karnataka
              </p>
              <p className="mt-2 text-base text-gray-800 font-medium">
                <FaPhoneAlt className="inline-block text-green-500 mr-2" />
                +91‑6366209990
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== “We’re Happy To Help You” & Call‑Back Form ===== */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              We’re Happy To Help You
            </h3>
            <p className="text-gray-700">
              Individual patients, medical institutions, and hospitals may use
              the form on the right for further inquiries. You may also provide
              your email & contact number and we will get back to you as soon
              as possible. For a quick booking, email us at{" "}
              <a
                href="mailto:contact@giostar.com"
                className="text-green-500 underline"
              >
                contact@giostar.com
              </a>
              .
            </p>
            <div className="flex items-start space-x-4">
              <FaClipboardList className="text-2xl text-green-500 mt-1" />
              <div>
                <span className="font-semibold">Book Consultation</span>
                <p className="text-gray-700">contact@giostar.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-2xl text-green-500 mt-1" />
              <div>
                <span className="font-semibold">Locations</span>
                <p className="text-gray-700">
                  We are present across the country; you may not be physically
                  at every centre, but in the smiles of millions whose lives we’ve
                  touched.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Call‑Back Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Give a Call Back
            </h3>
            <p className="text-gray-700 mb-6">
              Just tell us about yourself and we’ll figure out the best option
              for you. Don’t like filling up forms? Mail us at{" "}
              <a
                href="mailto:contact@giostar.com"
                className="text-green-500 underline"
              >
                contact@giostar.com
              </a>
              .
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+91‑XXXX‑XXXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-medium mb-1"
                >
                  City/State/Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g. Bengaluru, Karnataka"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="How can we help you?"
                />
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="mt-4">
                <div className="bg-gray-100 border border-gray-300 text-gray-600 rounded-lg px-4 py-3 text-center">
                  {/* Replace this with your real reCAPTCHA widget */}
                  <span>reCAPTCHA widget goes here</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-medium py-3 rounded-full hover:bg-green-600 transition-shadow shadow-md"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
