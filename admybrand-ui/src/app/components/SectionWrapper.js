'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function SectionWrapper({ children, id, className }) {
  return (
    <motion.section
      id={id}
      className={`px-6 py-16 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
