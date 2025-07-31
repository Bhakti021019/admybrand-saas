export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
}
