import * as React from "react";
import Card from "@/components/Card/Card";

export interface Country {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

export interface IListCardProps {
  data: Country;
  key: string | number;
  onClick?: () => void;
}

export function ListCard({ data, key, onClick }: IListCardProps) {
  return (
    <Card image={data.flag} title={data.name} key={key} onClick={onClick}>
      <div>
        <div>
          <span className={"font-semibold"}>Population:</span> {data.population}
        </div>
        <div>
          <span className={"font-semibold"}>Region: </span>
          {data.region}
        </div>
        <div>
          <span className={"font-semibold"}>Capital: </span>
          {data.capital}
        </div>
      </div>
    </Card>
  );
}

export default ListCard;
