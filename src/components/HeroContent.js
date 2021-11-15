import HeaderControls from "./HeaderControls";

const HeroContent = ({ content, headerControlsData }) => {
  const { title, imageUrl, subtitle, description } = content;

  return (
    <div className="hero-content">
      <h2>
        <img alt={title} src={imageUrl} />
      </h2>
      <h3>{subtitle}</h3>
      <p>
        {description}
      </p>
      <HeaderControls controls={headerControlsData} />
    </div>
  )
}

export default HeroContent
