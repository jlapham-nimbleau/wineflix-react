import "./App.css";
import { siteTitle, heroHeaderContent, heroContent, categories, headerControls, userDetails } from "./data";
import Category from "./components/Category";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Hero
        imageUrl={heroHeaderContent.imageUrl}
        imageLabel={heroHeaderContent.imageLabel}
        siteTitle={siteTitle}
        heroContent={heroContent}
        headerControls={headerControls}
        userDetails={userDetails}
      />
      <main>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
          />
        ))}
      </main>
    </div>
  )
}

export default App
