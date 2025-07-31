'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white/70 backdrop-blur-sm rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      {sent && <p className="text-green-600 mb-4 text-center">Message sent!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full p-2 border rounded" required />
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full p-2 border rounded" rows={4} required />
        <button type="submit" className="w-full bg-brand text-white py-2 rounded">Send</button>
      </form>
    </div>
  );
}
