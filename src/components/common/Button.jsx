export default function Button({ children }) {
  return (
    <button className="bg-teal-700 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}
