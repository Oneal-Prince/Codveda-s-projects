function Navbar() {
  return (
    <nav className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Nova
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-brand-primary">
            Features
          </a>

          <a href="#about" className="hover:text-brand-primary">
            About
          </a>

          <a href="#contact" className="hover:text-brand-primary">
            Contact
          </a>
        </div>

        <button className="bg-brand-primary px-5 py-2 rounded-lg font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto text-center">

        <span className="inline-block mb-5 px-4 py-2 rounded-full bg-indigo-100 text-brand-primary font-medium text-sm">
          Build better. Move faster.
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark max-w-4xl mx-auto">
          Build powerful digital experiences with Nova
        </h1>

        <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
          A modern platform designed to help teams create,
          manage, and scale their digital products.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-7 py-3 rounded-lg bg-brand-primary text-white font-semibold">
            Get Started
          </button>

          <button className="px-7 py-3 rounded-lg border border-gray-300 font-semibold">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <article className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-brand-primary text-xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-brand-dark">
        {title}
      </h3>

      <p className="mt-3 text-brand-muted leading-relaxed">
        {description}
      </p>
    </article>
  );
}

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Create fast and efficient digital experiences.",
    },
    {
      icon: "🎨",
      title: "Flexible Design",
      description: "Customize your interface with a consistent design system.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Build reliable applications with security in mind.",
    },
  ];

  return (
    <section id="features" className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Everything you need
          </h2>

          <p className="mt-4 text-brand-muted">
            Powerful features designed for modern digital teams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "Integrations" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="px-6 py-16 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold">
              {stat.number}
            </p>

            <p className="mt-2 text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h2 className="text-xl font-bold">
            Nova
          </h2>

          <p className="mt-2 text-gray-400">
            Building better digital experiences.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy
          </a>

          <a href="#" className="text-gray-300 hover:text-white">
            Terms
          </a>

          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;