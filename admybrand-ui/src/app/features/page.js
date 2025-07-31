'use client';
import { useEffect, useState } from 'react';

export default function FeaturesPage() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/features')
      .then(res => res.json())
      .then(data => setFeatures(data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-6">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map(f => (
          <div key={f._id} className="bg-white/70 p-6 rounded shadow">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
