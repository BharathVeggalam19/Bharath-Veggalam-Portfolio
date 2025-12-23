export default function Navbar() {
  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-6xl
        rounded-3xl
        bg-black/20 backdrop-blur-md
        text-white
        px-10 py-4
        flex justify-between items-center
        border border-white/10
        z-50
      "
    >
      {/* Left: Name */}
      <div className="text-2xl font-bold tracking-wide">
        <span className="text-blue-400">Bharath</span> Veggalam
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex space-x-8 text-lg text-gray-300">
        <a href="#home" className="text-blue-400 relative">
          Home
          <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-400 rounded"></span>
        </a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

      {/* Right: Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="
          px-5 py-2 rounded-full
          bg-blue-500 text-white text-sm font-medium
          hover:bg-blue-400 transition
        "
      >
        Resume
      </a>
    </nav>
  );
}
