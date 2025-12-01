import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              ArmaghClean
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}