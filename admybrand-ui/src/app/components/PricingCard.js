import Card from './Card';

export default function PricingCard({ tier, price, features = [], mostPopular = false }) {
  return (
    <Card className={`w-72 ${mostPopular ? 'border-purple-500' : ''}`}>
      <h3 className="text-2xl font-bold text-white">{tier}</h3>
      <p className="text-3xl text-purple-400 font-bold mt-2">${price}</p>
      <ul className="my-4 text-gray-300 text-sm space-y-2">
        {features.map((f, idx) => <li key={idx}>✔ {f}</li>)}
      </ul>
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Choose Plan</button>
    </Card>
  );
}
