'use client';
import { useEffect, useState } from 'react';
import Button from '../app/components/Button';
import FeatureItem from '../app/components/FeatureItem';
import PricingCard from '../app/components/PricingCard';
import TestimonialCard from '../app/components/TestimonialCard';
import FAQItem from '../app/components/FAQItem';
import SectionWrapper from '../app/components/SectionWrapper';

export default function HomePage() {
  const [features, setFeatures] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/features').then(res => res.json()).then(setFeatures);
    fetch('http://localhost:5000/api/pricing').then(res => res.json()).then(setPricing);
    fetch('http://localhost:5000/api/testimonials').then(res => res.json()).then(setTestimonials);
    fetch('http://localhost:5000/api/faqs').then(res => res.json()).then(setFaqs);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactForm)
    });
    if (res.ok) {
      setSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      {/* HERO SECTION */}
      <SectionWrapper id="hero" className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] min-h-screen flex flex-col items-center justify-center text-center animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Supercharge Your Marketing with AI</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Transform your business with our powerful AI tools for digital marketing.
        </p>

        <div className="mt-10 animate-bounce">
          <a href="#features" aria-label="Scroll down">
            <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpJTIwYm90fGVufDB8fDB8fHww"
            alt="AI Bot"
            className="w-72 mt-12 animate-float"
          />
          <p className="mt-4 text-lg font-semibold text-white">AI Bot</p>
        </div>
      </SectionWrapper>

      {/* FEATURES SECTION */}
      <SectionWrapper id="features" className="bg-black animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f._id} className="glassmorphic p-5">
              <FeatureItem icon={f.icon} title={f.title} description={f.description} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* PRICING */}
      <SectionWrapper id="pricing" className="bg-[#111111] animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pricing.map(plan => (
            <div key={plan._id} className="glassmorphic p-5">
              <PricingCard tier={plan.tier} price={plan.price} features={plan.features} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper id="testimonials" className="bg-black animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
        {testimonials.length > 0 && (
          <div className="glassmorphic max-w-3xl mx-auto p-5">
            <TestimonialCard
              name={testimonials[currentTestimonial].name}
              role={testimonials[currentTestimonial].role}
              message={testimonials[currentTestimonial].message}
              photo={testimonials[currentTestimonial].photo}
            />
          </div>
        )}
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper id="faq" className="bg-[#111] max-w-4xl mx-auto animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <FAQItem key={faq._id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </SectionWrapper>

      {/* CONTACT */}
      <SectionWrapper id="contact" className="bg-black max-w-xl mx-auto animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        {submitted && <p className="text-green-500 text-center mb-4">Thanks! We'll be in touch.</p>}
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <input type="text" placeholder="Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full p-3 bg-[#1a1a1a] text-white rounded border border-gray-600" required />
          <input type="email" placeholder="Email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full p-3 bg-[#1a1a1a] text-white rounded border border-gray-600" required />
          <textarea placeholder="Message" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full p-3 bg-[#1a1a1a] text-white rounded border border-gray-600" rows={4} required />
          <Button type="submit" className="w-full glassmorphic p-5">Send</Button>
        </form>
      </SectionWrapper>

      {/* FOOTER */}
      <footer className="py-10 bg-[#0d0d0d] text-center text-gray-400 text-sm animate-fadeIn">
        <p>© 2025 ADmyBRAND AI Suite. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </main>
  );
}
