export default function FAQItem({ question, answer }) {
  return (
    <details className="bg-white/10 border border-white/20 rounded p-4 text-white">
      <summary className="cursor-pointer font-semibold">{question}</summary>
      <p className="mt-2 text-sm text-gray-300">{answer}</p>
    </details>
  );
}
