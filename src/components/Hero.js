import HeroContent from "./HeroContent";
import Navbar from "./Navbar";
import Image from "./Image";

const Hero = ({ imageUrl, imageLabel, siteTitle, navbarLinks, heroContent, headerControls, userDetails }) => {
  return (
    <header className="hero">
      <Image
        className="hero-image"
        url={imageUrl}
        label={imageLabel}
      />
      <Navbar
        title={siteTitle}
        navbarLinks={navbarLinks}
        userDetails={userDetails}
      />
      <HeroContent
        content={heroContent}
        headerControls={headerControls}
      />
    </header>
  )
}

export default Hero
