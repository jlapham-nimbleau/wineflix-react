import HeaderControl from "./HeaderControl"

const HeaderControls = ({ controls }) => {
  return (
    <ul className="controls">
      {controls.map((item, index) => (
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
