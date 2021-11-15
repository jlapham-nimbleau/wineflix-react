import HeaderControl from "./HeaderControl"

const HeaderControls = ({ controls }) => {
  return (
    <ul className="controls">
      {controls.map((item, index) => (
        <HeaderControl
          key={`${index}-${item.text}`}
          className={item.className}
          text={item.text}
          iconImg={item.iconImg}
        />
      ))}
    </ul>
  )
}

export default HeaderControls
