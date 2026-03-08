"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #1B2D5A 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-tight"
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : { y: 60 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.1,
              }}
            >
              พร้อมให้บริการ
              <br />
              <span className="text-brand-blue">ทุกงานพิมพ์ของคุณ</span>
            </motion.h2>
          </div>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-brand-navy/70 font-body max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.4, 0.25, 1],
              delay: 0.2,
            }}
          >
            แวะมาหาเราได้เลย หรือโทรสอบถามรายละเอียดและราคาก่อนได้
          </motion.p>

          <motion.div
            className="h-[2px] w-12 bg-brand-navy mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          />

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
              hidden: {},
            }}
          >
            <Link href="https://maps.app.goo.gl/bH3i5Actz1NyyPD7A" target="_blank" rel="noopener noreferrer">
              <motion.span
                className="group inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:shadow-brand-navy/20 active:scale-95 cursor-pointer"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 24 },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="w-5 h-5" />
                แผนที่ร้าน
              </motion.span>
            </Link>
            <motion.a
              href="tel:0621891755"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-brand-navy font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:shadow-xl active:scale-95 border-2 border-brand-navy/10"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 24 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              โทรเลย
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
