import { observer } from "mobx-react";
import * as React from "react";
import ThemeSwitcher from "@/components/Theme";
import Title from "@/components/Title";

export const PageHeader = observer(() => {
  return (
    <div
      className={
        "flex px-32 h-[5rem] items-center border-b shadow-sm justify-between"
      }
    >
        <Title title={'Countries Card List'}/>
      <ThemeSwitcher />
    </div>
  );
});
