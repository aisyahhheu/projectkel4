import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={handleNavClick}
              aria-label="Homepage"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm select-none">
                  S
                </span>
              </div>
              <span className="text-2xl font-bold text-gray-900 select-none">
                Sumtread
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigation.map(({ name, href }) => {
                const isActive = location.pathname === href;
                return (
                  <Link
                    key={name}
                    to={href}
                    onClick={handleNavClick}
                    className={`px-3 py-2 text-sm font-medium select-none transition-colors cursor-pointer ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>

            {/* Login icon desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                aria-label="Login"
                className="text-gray-600 hover:text-blue-600 cursor-pointer p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-2"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navigation.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                onClick={handleNavClick}
                role="menuitem"
                className={`block px-3 py-2 text-base font-medium rounded-md cursor-pointer transition-colors ${
                  location.pathname === href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {name}
              </Link>
            ))}

            {/* Login button mobile */}
            <button
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
              aria-label="Login"
              role="menuitem"
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
            >
              Login
            </button>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
        {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-2xl font-bold">Sumtread</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Sumtread adalah brand sepatu terpercaya yang menghadirkan koleksi sepatu berkualitas tinggi untuk dewasa
                dan anak-anak dengan desain modern dan kenyamanan maksimal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@sumtread.com</li>
                <li>Phone: +62 123 456 789</li>
                <li>Address: Palembang, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sumtread. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
