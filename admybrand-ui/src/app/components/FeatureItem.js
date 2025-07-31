import Card from './Card';

export default function FeatureItem({ icon, title, description }) {
  return (
    <Card className="text-center text-white">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </Card>
  );
}
