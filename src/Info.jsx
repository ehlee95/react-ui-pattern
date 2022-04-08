function Info(props) {

  console.log(props.char)
  // deconstruct fields
  let { img, name, birthday, occupation, portrayed, appearance } = props.char;

  return (
    <div className="Info">
      <span className="helper"><img className="image" src={img} alt={name} /></span>
      <div className="Bio">
        <h2>
          <span>Name : </span>
          {name}
        </h2>
        <h2>
          <span>Birthday : </span>
          {birthday}
        </h2>
        <div>
          <h2>Occupation : </h2>
          <ul>
            {occupation.map((occ) => (
              <li>{occ}</li>
            ))}
          </ul>
        </div>
        <h2>
          <span>Portrayed by : </span>
          {portrayed}
        </h2>
        <div>
          <h2>Seasons : </h2>
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