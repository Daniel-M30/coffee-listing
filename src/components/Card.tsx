import "../styles/components/card.css";

import star from "../assets/icons/Star.svg";
import starFill from "../assets/icons/Star_fill.svg";

export interface CardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}

export function Card({ popular, image, name, price, rating, votes, available }: CardProps) {
  return (
    <div className="card__container">
      <div className="card__image">
        {popular && <span>Popular</span>}
        <img src={image} alt="Coffee image" />
      </div>
      <div className="card__coffee-info">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="card__footer">
        <div className="card__rating">
          <img src={rating ? starFill : star} alt="Star icon" />
          {rating ? (
            <p>
              {Number(rating).toFixed(1)} <span>({votes} votes)</span>
            </p>
          ) : (
            <span>No ratings</span>
          )}
        </div>
        {!available && <p>Sold out</p>}
      </div>
    </div>
  );
}
