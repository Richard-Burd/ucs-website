export default function Navbar() {
    return (
      <>
      <div className="h-10 fixed top-0 inset-x-0 z-10 varela-round-font" id="navbar">
        <nav className="bg-gray-300">
          <div className="max-w-5xl mx-auto bg-gray-400 pr-2">
            <div className="flex justify-between text-lg">
              <div className="flex space-x-4">
              
                <div>
                  <a href="/" className="flex items-center py-4 px-4 text-gray-900 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-900 focus:text-gray-100">
                    <span className="font-bold">Home</span>
                  </a>
                </div>
                
                <div className="flex hidden md:flex items-center space-x-1 text-gray-900">
                  <a href="/about" className="py-4 px-3 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-900 focus:text-gray-100 transition duration-500">About</a>
                  <a href="/standards" className="py-4 px-3 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-900 focus:text-gray-100 transition duration-500">Standards</a>
                  <a href="/crew" className="py-4 px-3 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-900 focus:text-gray-100 transition duration-500">Crew</a>
                  <a href="/activities" className="py-4 px-3 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-900 focus:text-gray-100 transition duration-500">Activities</a>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-1">
                <a href="mailto:michael@urbancruiseship.org" className="py-4 px-3 hover:bg-gray-900 hover:text-gray-100 focus:bg-gray-900 focus:text-gray-100 transition duration-300">Contact</a>
              </div>

              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </nav>

        <div className="mobile-menu hidden md:hidden divide-y divide-gray-300 border-b-2 border-gray-300" id="mobile-dropdown">
          <a href="/about" className="bg-gray-200 block  focus:bg-gray-900 focus:text-gray-100 py-2 px-4 text-sm hover:bg-gray-900 hover:text-gray-100">About</a>
          <a href="/ucs-standards" className="bg-gray-200 block focus:bg-gray-900 focus:text-gray-100  py-2 px-4 text-sm hover:bg-gray-900 hover:text-gray-100">Standards</a>
          <a href="/ucs-crew" className="bg-gray-200 block focus:bg-gray-900 focus:text-gray-100 py-2 px-4 text-sm hover:bg-gray-900 hover:text-gray-100">Crew</a>
          <a href="/ucs-activities" className="bg-gray-200 block focus:bg-gray-900 focus:text-gray-100 py-2 px-4 text-sm hover:bg-gray-900 hover:text-gray-100">Activities</a>
          <a href="mailto: michael@urbancruiseship.org" className="bg-gray-200 block focus:bg-gray-900 focus:text-gray-100 py-2 px-4 text-sm hover:bg-gray-900 hover:text-gray-100">Contact</a>
        </div>
      </div>
      <script type="text/javascript" src="/scripts/navbarScript.js"></script>
      </>
    )
  }