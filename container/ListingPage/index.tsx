import { observer } from "mobx-react";
import * as React from "react";
import { useEffect } from "react";
import { listingPageStore } from "@/container/ListingPage/listingPageStore";
import { map } from "lodash";
import Card from "@/components/Card/Card";
import { DataTable } from "@/components/Table";
import { columns } from "@/container/ListingPage/tableColumn";
import ListCard from "@/components/Card/ListCard";
import {PageHeader} from "@/container/PageHeader";

export const ListingPage = observer(() => {
  useEffect(() => {
    listingPageStore.fetchData();
  }, []);

  return (
      <div>
          <PageHeader/>
          <div>
              <div className={"flex p-3 mx-10 justify-center"} style={{ flexWrap: "wrap" }}>
                  {map(listingPageStore.countries, (item, index) => (
                      <ListCard data={item} key={index}  />
                  ))}
              </div>
              {/*<DataTable columns={columns} data={listingPageStore.countries} />*/}
          </div>
      </div>
  );
});
