import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 py-20 px-4 text-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">Imperium.dev</h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-gray-700">Empowering your ideas with cutting-edge web, mobile, and GenAI solutions.</p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Let's Build Together</a>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-600">Imperium.dev is a modern digital agency specializing in full-stack web, mobile, and GenAI development. We help startups and enterprises turn ideas into scalable products, fast.</p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-indigo-100 to-white hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">WebApp Development</h3>
            <p className="text-gray-600">Robust, scalable, and beautiful web applications tailored to your business needs.</p>
          </div>
          <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-purple-100 to-white hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p className="text-gray-600">Cross-platform mobile apps with seamless user experiences and modern design.</p>
          </div>
          <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-pink-100 to-white hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">GenAI Development</h3>
            <p className="text-gray-600">Integrate next-gen AI into your products with custom GenAI solutions.</p>
          </div>
          <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-blue-100 to-white hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">MVP Development</h3>
            <p className="text-gray-600">Rapid prototyping and MVP launches to validate your ideas quickly.</p>
          </div>
        </div>
      </section>

      {/* Clients Section (Placeholder) */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold">Logo</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold">Logo</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold">Logo</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold">Logo</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-6">Ready to start your project or have questions? Reach out and let's make something amazing together.</p>
        <a href="mailto:hello@imperium.dev" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-100 mt-auto">
        © {new Date().getFullYear()} Imperium.dev. All rights reserved.
      </footer>
    </div>
  );
}
