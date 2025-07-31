'use client';
import { useEffect, useState } from 'react';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map(t => (
          <div key={t._id} className="bg-white/70 p-6 rounded shadow">
            <p className="italic mb-2">"{t.message}"</p>
            <div className="flex items-center gap-4">
              <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
