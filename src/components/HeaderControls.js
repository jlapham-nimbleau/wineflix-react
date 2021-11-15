import HeaderControl from "./HeaderControl"

const HeaderControls = ({ data }) => {
  return (
    <ul className="controls">
      {data.map((item, index) => (
        <HeaderControl
          key={index}
          className={item.className}
          text={item.text}
          iconImg={item.iconImg}
        />
      ))}
    </ul>
  )
}

export default HeaderControls
