import HeaderControls from "./HeaderControls";

const HeroContent = ({ content, headerControls }) => {
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
      <HeaderControls controls={headerControls} />
    </div>
  )
}

export default HeroContent
