export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Infinicore Technologies</h1>
      <p className="text-lg text-gray-300">We provide cutting-edge software and hardware solutions.</p>
      <a 
        href="/about"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
      >
        Learn More
      </a>
    </div>
  );
}
