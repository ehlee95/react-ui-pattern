function Button(props) {
  return (

    <div className="Buttons">
      <div className="Button" onClick={() => props.setCurrent(0)}>
        <p>
          <span className="B W">W</span>alter
        </p>
        <p className="bad">
          <span className="B W">W</span>hite
          </p>
        </div>
      
      <div className="Button" onClick={() => props.setCurrent(1)}>
        <p>
          <span className="B G">G</span>us
        </p>
        <p className="bad">
          <span className="B Fr">Fr</span>ing
          </p>
      </div>
      
      <div className="Button" onClick={() => props.setCurrent(2)}>
        <p>
          <span className="B G">H</span>ank
        </p>
        <p className="bad">
          <span className="B Sc">Sc</span>hrader
          </p>
      </div>
    </div>
  )
}

export default Button;