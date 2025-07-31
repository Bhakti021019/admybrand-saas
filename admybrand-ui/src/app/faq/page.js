'use client';
import { useEffect, useState } from 'react';

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={faq._id} className="bg-white p-4 rounded shadow">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left font-semibold"
            >
              {faq.question}
            </button>
            {openIndex === idx && <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
