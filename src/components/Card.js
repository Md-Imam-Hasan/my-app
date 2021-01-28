const date = new Date();
const currentYear=date.getFullYear();
const dateName=date.getDate();
const monthName=date.getMonth();

function Card(props){
  const {title,desc} = props;
  return <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-details">{desc}</p>
            <p className="card-footer">{dateName+"/"+monthName+"/"+currentYear}</p>
          </div>
}

export default Card;