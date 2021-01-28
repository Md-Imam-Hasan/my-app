import React , {Component} from 'react';

class Card2 extends Component{
  render(){
    return(
      <div className="card">
        <h1>{this.props.name}</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
export default Card2;