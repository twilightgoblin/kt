import { useState } from 'react';
import GooeyNav from './GooeyNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center hidden md:flex">
        <div className="overflow-hidden rounded-lg">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleLinkClick}
              className="mobile-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;