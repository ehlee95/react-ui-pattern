function Info(props) {

  // deconstruct fields
  let { img, name, birthday, occupation, portrayed, appearance } = props.char;

  return (
    <div className="Info">
      <img className="image" src={img} alt={name} />
      <div>
        <h3>
          <span>Name : </span>
          {name}
        </h3>
        <h3>
          <span>Birthday : </span>
          {birthday}
        </h3>
        <div>
          <span>Occupation : </span>
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
          <span>Seasons : </span>
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