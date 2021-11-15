import CategoryItem from "./CategoryItem";

const Category = ({ title, data }) => {
  return (
    <section className="category">
      <h2>{title}</h2>
      <ul>
        {category.map((item, index) => (
          <CategoryItem
            key={index}
            item={item}
          />
        ))}
      </ul>
    </section>
  )
}

export default Category
