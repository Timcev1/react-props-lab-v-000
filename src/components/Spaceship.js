// Code The Spaceship Component Here
export default class Spaceship extends React.Component {
  render(){
    const {name, hasRockets, colors}= this.props;
    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        <p>Ship Info:</p>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
 };

export default Spaceship
