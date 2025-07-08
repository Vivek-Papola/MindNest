import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem('tokenUser');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenUser');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const handleDelete = () => setShowDeleteModal(true);

  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:8000/delete-user/${user}`, { method: 'DELETE' });
      localStorage.removeItem('token');
      localStorage.removeItem('tokenUser');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const closeModal = () => setShowDeleteModal(false);

  return (
    <div className="bg-white w-full z-50 shadow-lg">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Desktop Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MindNest</span>
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/logo.png"
                alt="MindNest Logo"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to={`/${user}/mood`} className="text-sm font-semibold text-gray-900">Mood Tracker</Link>
            <Link to={`/${user}/therapist`} className="text-sm font-semibold text-gray-900">AI Therapist</Link>
            <Link to={`/${user}/quiz`} className="text-sm font-semibold text-gray-900">Quiz</Link>
            <Link to={`/${user}/anonymoussharing`} className="text-sm font-semibold text-gray-900">Anonymous Sharing</Link>
            <Link to="/aboutus" className="text-sm font-semibold text-gray-900">About Us</Link>
          </div>

          {/* Right Side Login/Profile */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              <div className="relative ml-3">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                    alt="Profile"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg py-1 z-10">
                    <Link to={`/${user}/profile`} className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700">Sign out</button>
                    <button onClick={handleDelete} className="block w-full text-left px-4 py-2 text-sm text-gray-700">Delete Profile</button>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Login <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-white px-6 py-6">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">MindNest</span>
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/logo.png"
                    alt="MindNest Logo"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={toggleMobileMenu}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-2">
                <Link to={`/${user}/mood`} className="block text-base font-semibold text-gray-900">Mood Tracker</Link>
                <Link to={`/${user}/therapist`} className="block text-base font-semibold text-gray-900">AI Therapist</Link>
                <Link to={`/${user}/quiz`} className="block text-base font-semibold text-gray-900">Quiz</Link>
                <Link to={`/${user}/anonymoussharing`} className="block text-base font-semibold text-gray-900">Anonymous Sharing</Link>
                <Link to="/aboutus" className="block text-base font-semibold text-gray-900">About Us</Link>

                {isLoggedIn && (
                  <>
                    <Link to={`/${user}/profile`} className="block text-base font-semibold text-gray-900">Your Profile</Link>
                    <button onClick={handleLogout} className="block w-full text-left text-base text-gray-900">Sign out</button>
                    <button onClick={handleDelete} className="block w-full text-left text-base text-gray-900">Delete Profile</button>
                  </>
                )}

                {!isLoggedIn && (
                  <a href="/login" className="block text-base font-semibold text-gray-900">
                    Login <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="bg-white rounded-lg p-6 shadow-xl z-50">
              <h3 className="text-lg font-medium text-gray-900">Delete Profile</h3>
              <p className="mt-2 text-sm text-gray-500">Are you sure you want to delete your profile? This action cannot be undone.</p>
              <div className="mt-4 flex justify-end gap-3">
                <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Cancel</button>
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
