import './IconSwitch.css'


const IconSwitch = ({ list, onSwitch }) => {
  return (


    <div className="store_menu">
      <div className="store_header">
        <button className="store_btn material-icons"
          onClick={onSwitch}>
          {list}
        </button>
      </div>
    </div>
  )
}

export default IconSwitch