const CategoryItem = ({ item }) => {
  const { label, imageUrl, isNew, progress } = item;

  return (
    <li>
      <div className={label.toLowerCase()}>
        <img src={imageUrl} alt={label} />

        {isNew &&
          <span className="new-badge">New!</span>
        }

        {progress &&
          <div className="amount-consumed">
            <progress min="0" max="100" value={progress}></progress>
          </div>
        }
      </div>
    </li>
  )
}

export default CategoryItem
