import CardHeader from "../card-header";
import CardItem from "../card-item";

export default function Resumo({ data }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border-t-2 border-blue-500 hover:shadow-xl transition-all">
      <CardHeader 
        title="Resumo" 
        subtitle="Valores a receber"
        icon={
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        }
      />
      
      <div className="mb-2 p-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
        <p className="text-[10px] text-blue-700 font-semibold mb-0.5">Total Líquido</p>
        <dd className="text-xl font-bold text-blue-600">
          {`R$ ${data.totais}`}
        </dd>
      </div>

      <div className="space-y-0.5">
        <CardItem
          title="Líquido:"
          value={`R$ ${data.remuneracao.liquido}`}
          colorClass="text-blue-600"
        />

        <CardItem
          title="Alimentação:"
          value={`R$ ${data.outros.alimentacao}`}
          colorClass="text-blue-600"
        />

        <CardItem
          title={`FGTS (${data.outros.fgtsPerc}%):`}
          value={`R$ ${data.outros.fgts}`}
          colorClass="text-blue-600"
        />
      </div>
    </div>
  );
}
