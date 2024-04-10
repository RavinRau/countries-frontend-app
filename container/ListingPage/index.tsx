"use client";

import { observer } from "mobx-react";
import * as React from "react";
import { useEffect } from "react";
import { listingPageStore } from "@/container/ListingPage/listingPageStore";
import { map } from "lodash";
import Card from "@/components/Card";
import { DataTable } from "@/components/Table";
import { columns } from "@/container/ListingPage/tableColumn";

export const ListingPage = observer(() => {
  useEffect(() => {
    listingPageStore.fetchData();
  }, []);

  return listingPageStore.isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <DataTable columns={columns} data={listingPageStore.countries} />
      <div className={"flex p-3 justify-center"} style={{ flexWrap: "wrap" }}>
        {map(listingPageStore.countries, (item) => {
          return (
            <Card image={item.flag} title={item.name} key={item.name}>
              <div>
                <div>
                  <span className={"font-semibold"}>Population:</span>{" "}
                  {item.population}
                </div>
                <div>
                  <span className={"font-semibold"}>Region: </span>
                  {item.region}
                </div>
                <div>
                  <span className={"font-semibold"}>Capital: </span>
                  {item.capital}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
});
