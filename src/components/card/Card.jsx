import Button from "../button/Button";
import cardStyle from "./card.module.css";

const Card = ({img, btnName, dil}) => {
  return (
    <div>
        <h1 className={cardStyle["tittle"]}>{dil}</h1>
        <img className={cardStyle["images"]} src={img} alt="resim" />
        
        <Button btnName={btnName} />
    </div>
  )
}

export default Card