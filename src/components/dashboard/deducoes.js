import CardHeader from "../card-header";
import CardItem from "../card-item";

export default function Deducoes({ deducoes }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border-t-2 border-red-500 hover:shadow-xl transition-all">
      <CardHeader 
        title="Deduções" 
        subtitle="Detalhes das deduções"
        icon={
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        }
      />
      
      <div className="mb-2 p-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
        <p className="text-[10px] text-red-700 font-semibold mb-0.5">Total</p>
        <dd className="text-xl font-bold text-red-600">
          {`R$ ${deducoes.resumo}`}
        </dd>
      </div>

      <div className="space-y-0.5">
        <CardItem
          title="IRPF:"
          value={`R$ ${deducoes.irpf}`}
          colorClass="text-red-600"
        />

        <CardItem
          title="Alimentação:"
          value={`R$ ${deducoes.deducaoAlimentacao}`}
          colorClass="text-red-600"
        />

        <CardItem
          title="INSS:"
          value={`R$ ${deducoes.inss}`}
          colorClass="text-red-600"
        />

        <CardItem
          title="Plano Saúde:"
          value={`R$ ${deducoes.planoSaude}`}
          colorClass="text-red-600"
        />

        <CardItem
          title="Serpros:"
          value={`R$ ${deducoes.serpros}`}
          colorClass="text-red-600"
        />
      </div>
    </div>
  );
}
