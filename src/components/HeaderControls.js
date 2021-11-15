import HeaderControl from "./HeaderControl"

const HeaderControls = ({ controls }) => {
  return (
    <ul className="controls">
      {controls.map((control, index) => (
        <HeaderControl
          key={`${index}-${control.text}`}
          className={control.className}
          text={control.text}
          iconImg={control.iconImg}
        />
      ))}
    </ul>
  )
}

export default HeaderControls
