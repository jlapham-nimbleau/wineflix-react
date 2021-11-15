import CategoryItem from "./CategoryItem";

const Category = ({ category }) => {
  const { title, items } = category;

  return (
    <section className="category">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <CategoryItem
            key={`${index}-${item.id}`}
            item={item}
          />
        ))}
      </ul>
    </section>
  )
}

export default Category
