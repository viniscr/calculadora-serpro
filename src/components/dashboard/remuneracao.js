import CardHeader from "../card-header";
import CardItem from "../card-item";

export default function Remuneracao({ remuneracao }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border-t-2 border-emerald-500 hover:shadow-xl transition-all">
      <CardHeader 
        title="Remuneração" 
        subtitle="Detalhes da remuneração"
        icon={
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      
      <div className="mb-2 p-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
        <p className="text-[10px] text-emerald-700 font-semibold mb-0.5">Total</p>
        <dd className="text-xl font-bold text-emerald-600">
          {`R$ ${remuneracao.resumo}`}
        </dd>
      </div>

      <div className="space-y-0.5">
        <CardItem
          title="Vencimento Base:"
          value={`R$ ${remuneracao.base}`}
          colorClass="text-emerald-600"
        />

        <CardItem
          title={`Gratificação (${remuneracao.gratificacaoPerc}%):`}
          value={`R$ ${remuneracao.gratificao}`}
          colorClass="text-emerald-600"
        />

        <CardItem
          title={`GFE (${remuneracao.gfeIndex}):`}
          value={`R$ ${remuneracao.gfe}`}
          colorClass="text-emerald-600"
        />

        <CardItem
          title={`GFC (${remuneracao.gfcIndex}):`}
          value={`R$ ${remuneracao.gfc}`}
          colorClass="text-emerald-600"
        />
      </div>
    </div>
  );
}
