'use client';
import { useEffect, useState } from 'react';

export default function PricingPage() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pricing')
      .then(res => res.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Pricing</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map(plan => (
          <div key={plan._id} className={`p-6 rounded shadow-md ${plan.mostPopular ? 'bg-brand text-white' : 'bg-white text-black'}`}>
            <h3 className="text-2xl font-bold">{plan.tier}</h3>
            <p className="text-3xl font-bold mt-2">${plan.price}</p>
            <ul className="my-4 space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
            <button className="mt-4 w-full py-2 rounded bg-white text-brand font-bold hover:bg-gray-100">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}
