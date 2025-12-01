export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Cleaning Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning solutions tailored for homes and businesses in Armagh and surrounding areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Domestic Cleaning</h3>
            <p className="text-gray-600 mb-6">
              Regular house cleaning, deep cleaning, end of tenancy cleaning, and post-construction cleaning for residential properties.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Kitchen & bathroom cleaning
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bedroom & living areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Carpet & upholstery cleaning
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Cleaning</h3>
            <p className="text-gray-600 mb-6">
              Professional cleaning services for offices, retail spaces, schools, and healthcare facilities in Armagh.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Office & workspace cleaning
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Retail & showroom cleaning
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Window & glass cleaning
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Services</h3>
            <p className="text-gray-600 mb-6">
              Specialized cleaning solutions including carpet cleaning, pressure washing, and after-party cleaning.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Carpet & rug cleaning
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Pressure washing
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Event & party cleanup
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Cleaning Plan?</h2>
          <p className="text-xl mb-8">We tailor our services to meet your specific needs</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  )
}