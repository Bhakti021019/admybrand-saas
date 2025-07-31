export default function Modal({ show, onClose, children }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded shadow-xl max-w-lg w-full">
        {children}
        <button onClick={onClose} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
}
