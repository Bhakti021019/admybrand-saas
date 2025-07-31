import Card from './Card';

export default function TestimonialCard({ name, photo, message, role }) {
  return (
    <Card>
      <p className="italic text-white">"{message}"</p>
      <div className="flex items-center gap-4 mt-4">
        <img src={photo} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </Card>
  );
}
