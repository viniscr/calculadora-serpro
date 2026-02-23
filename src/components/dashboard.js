"use client";

import Deducoes from "./dashboard/deducoes";
import Remuneracao from "./dashboard/remuneracao";
import Resumo from "./dashboard/resumo";

export default function Dashboard({ data }) {
  return (
    <div className="fade-in h-full">
      <div className="flex flex-col gap-2 h-full overflow-y-auto xl:pr-2 scrollbar-thin">
        <Resumo data={data} />
        <Remuneracao remuneracao={data.remuneracao} />
        <Deducoes deducoes={data.deducoes} />
      </div>
    </div>
  );
}
