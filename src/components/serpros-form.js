import { useState } from "react";

export default function SerprosForm({ percentualSerpros, setPercentualSerpros, idadeSerpros, setIdadeSerpros }) {
  const [checkSerpros, setCheckSerpros] = useState(false);

  function toggle() {
    if (checkSerpros) {
      setPercentualSerpros(undefined);
      setIdadeSerpros(undefined);
    } else {
      setPercentualSerpros(15);
      setIdadeSerpros(27);
    }
    setCheckSerpros(!checkSerpros);
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3.5">
      <div className="flex items-center gap-1.5 mb-2.5">
        <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 className="text-sm font-bold text-gray-800">Serpros PS-II</h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label htmlFor="serpros" className="block text-xs font-semibold text-gray-700 mb-1">
            Utiliza Serpros
          </label>
          <div className="flex items-center h-9">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id="serpros"
                type="checkbox"
                checked={checkSerpros}
                onChange={toggle}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-600"></div>
              <span className="ml-2 text-xs font-medium text-gray-700">{checkSerpros ? 'Sim' : 'Não'}</span>
            </label>
          </div>
        </div>

        {checkSerpros && (
          <>
            <div className="animate-fade-in">
              <label htmlFor="percentual" className="block text-xs font-semibold text-gray-700 mb-1">
                Contrib. Var. (%)
              </label>
              <input
                id="percentual"
                name="percentual"
                type="number"
                min={0}
                max={15}
                placeholder="15"
                className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-cyan-500 bg-white"
                onChange={(event) => setPercentualSerpros(Number(event.target.value))}
                value={percentualSerpros}
              />
            </div>
            <div className="animate-fade-in">
              <label htmlFor="idadeAdesao" className="block text-xs font-semibold text-gray-700 mb-1">
                Idade Adesão
              </label>
              <input
                id="idadeAdesao"
                name="idadeAdesao"
                type="number"
                min={18}
                max={65}
                placeholder="27"
                className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-cyan-500 bg-white"
                onChange={(event) => setIdadeSerpros(Number(event.target.value))}
                value={idadeSerpros}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
