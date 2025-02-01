import { Button } from "../components/Button";
import { Card, CardProps } from "../components/Card";
import { useSelectedButtonContext } from "../hooks/useSelectedButton";
import { useQuery } from "@tanstack/react-query";
import "../styles/pages/home.css";

import lineVector from "../assets/icons/vector.svg";
import backgroundSm from "../assets/images/bg-cafe-sm.jpg";
import backgroundLg from "../assets/images/bg-cafe-lg.jpg";

export function Home() {
  const { selectedButton } = useSelectedButtonContext();

  const { data } = useQuery({
    queryKey: ["coffeeData"],
    queryFn: (): Promise<CardProps[]> =>
      fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      ).then((res) => res.json()),
  });

  return (
    <div className="home__container">
      <div className="home__bg-image">
        <picture>
          <source media="(max-width: 720px)" srcSet={backgroundSm} />
          <img src={backgroundLg} alt="Coffee image" />
        </picture>
      </div>
      <div className="home__content">
        <div className="home__header">
          <div className="home__text">
            <h1>Our Collection</h1>
            <h4>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
              expertly roasted in small batches and shipped fresh weekly.
            </h4>
            <img src={lineVector} alt="Line background" />
          </div>
          <div className="home__buttons">
            <Button id="allProducts" label="All Products" />
            <Button id="availableNow" label="Available Now" />
          </div>
        </div>
        <div className="home__cards">
          {data?.length &&
            data
              .filter((item) => selectedButton === "allProducts" || item.available)
              .map((item) => <Card key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}
