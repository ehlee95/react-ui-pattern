function Info(props) {

  let characters = props.char;

  // deconstruct fields
  let { img, name, birthday, occupation, portrayed, appearance } = characters[1];

  return (
    <div className="Info">
      <span className="helper"><img className="image" src={img} alt={name} /></span>
      <div className="Bio">
        <h3>
          <span>Name : </span>
          {name}
        </h3>
        <h3>
          <span>Birthday : </span>
          {birthday}
        </h3>
        <div>
          <span><b>Occupation : </b></span>
          <ul>
            {occupation.map((occ) => (
              <li>{occ}</li>
            ))}
          </ul>
        </div>
        <h3>
          <span>Portrayed by : </span>
          {portrayed}
        </h3>
        <div>
          <span><b>Seasons : </b></span>
          <ul>
            {appearance.map((season) => (
              <li>{season}</li>
            ))}
          </ul>
        </div>
      </div>
  </div>
  )
}

export default Info;