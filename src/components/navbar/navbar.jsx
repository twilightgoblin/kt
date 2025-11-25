import { useState, useEffect } from 'react';
import GooeyNav from './GooeyNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const items = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Curricular", href: "#curricular" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            initialActiveIndex={activeSection}
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
              className={`mobile-nav-link ${activeSection === index ? 'active' : ''}`}
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