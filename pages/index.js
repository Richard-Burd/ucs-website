import SpecializedSiteNavbar from '../components/specializedSiteNavbar'

export default function Home() {
  return (
    <>
    <SpecializedSiteNavbar />
    <div className={"bg-gray-100 pl-12 bpg-arial-font text-gray-700"}>
      <br></br>
      <div className={"flex justify-between"} id="homepage-desktop-format">
        <img className={"max-h-40 pt-2 pr-10 opacity-75"} src="/images/ucs-logo.png" alt="UCS-Logo"/>
        <p className={"text-2xl pt-16 pl-16 pr-8 mb-8"}>Founded in 2014, Urban Cruise Ship presents environmental solutions.</p>
      </div>

      <div id="homepage-mobile-n-tablet-format">
        <img className={"max-h-40 pt-2 pr-10 opacity-75"} src="/images/ucs-logo.png" alt="UCS-Logo"/>
        <p className={"text-2xl pt-12 mb-8"}>Founded in 2014, Urban Cruise Ship presents environmental solutions.</p>
      </div>

      <div className={"flex justify-between"}>
        <span className={"text-2xl sm:text-5xl pt-12"}>Our specialized sites:</span>
      </div>
    </div>

    <div className={"gap-2 justify-center grid lg:grid-cols-3 md:grid-cols-2 bg-gray-100 p-10"}>
      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/energy" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>energy production, distribution, and consumption</span>
        <img className={"transform hover:scale-110 transition duration-300"} src="images/homepage-icons/energy.svg" alt="icon that is a link to the matter site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/foodwater" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>matter, food, water, and other consumables</span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/matter.svg" alt="icon that is a link to the matter site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/habitat" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>habitat, perspective and perception </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/habitat.svg" alt="icon that is a link to the habitat site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/cities" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>cities, sustainable design principles </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/cities.svg" alt="icon that is a link to the cities site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/waste" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>waste, zero waste methodology vs. scams </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/waste.svg" alt="icon that is a link to the waste site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/oceans" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>oceans, health, resources, and energy </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/oceans.svg" alt="icon that is a link to the oceans site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/space" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>space, human vs. robotic ventures </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/space.svg" alt="icon that is a link to the cities site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/internalization" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>costs, internalized vs. subsidized </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/costs.svg" alt="icon that is a link to the waste site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="/topic/history/endeavors" target="_blank" rel="noreferrer">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>history, past and future progress</span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/history.svg" alt="icon that is a link to the oceans site"/>
      </a>
    </div>
    </>
  )
}
