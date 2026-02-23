import { useState } from "react";

export default function PlanoSaudeForm({ idade, setIdade }) {
  const [checkPlano, setCheckPlano] = useState(false);

  function togglePlano() {
    if (checkPlano) {
      setIdade(undefined);
    } else {
      setIdade(36);
    }
    setCheckPlano(!checkPlano);
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3.5">
      <div className="flex items-center gap-1.5 mb-2.5">
        <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h2 className="text-sm font-bold text-gray-800">Plano de Saúde</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="plano_saude" className="block text-xs font-semibold text-gray-700 mb-1">
            Utiliza plano
          </label>
          <div className="flex items-center h-9">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id="plano_saude"
                type="checkbox"
                checked={checkPlano}
                onChange={togglePlano}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"></div>
              <span className="ml-2 text-xs font-medium text-gray-700">{checkPlano ? 'Sim' : 'Não'}</span>
            </label>
          </div>
        </div>

        {checkPlano && (
          <div className="animate-fade-in">
            <label htmlFor="idade" className="block text-xs font-semibold text-gray-700 mb-1">
              Idade
            </label>
            <input
              id="idade"
              name="idade"
              type="number"
              min={0}
              placeholder="36"
              className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-amber-500 bg-white"
              onChange={(event) => setIdade(event.target.value)}
              value={idade}
            />
          </div>
        )}
      </div>
    </div>
  );
}
