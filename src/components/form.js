"use client";

import { PGCS } from "@/service/pgcs";
import { useEffect, useState } from "react";
import PlanoSaudeForm from "./plano-saude-form";
import SerprosForm from "./serpros-form";

const pgcs = new PGCS();

export default function CalcForm({ setData }) {
  const [nivel, setNivel] = useState(101);
  const [degrau, setDegrau] = useState("A");
  const [classe, setClasse] = useState("Classe I");
  const [gfeIndex, setGfeIndex] = useState(0);
  const [gfcIndex, setGfcIndex] = useState(0);
  const [checkAlimentacao, setChekAlimentacao] = useState(true);
  const [idade, setIdade] = useState(undefined);
  const [percentualSerpros, setPercentualSerpros] = useState(undefined);
  const [idadeSerpros, setIdadeSerpros] = useState(undefined);
  const [reajuste, setReajuste] = useState("");

  useEffect(() => {
    const result = pgcs.calculate({
      nivel, degrau, classe, reajuste, gfeIndex, gfcIndex,
      idade, percentualSerpros, idadeSerpros, checkAlimentacao,
    });
    setData(result);
  }, [nivel, degrau, classe, setData, reajuste, gfeIndex, gfcIndex, idade, percentualSerpros, idadeSerpros, checkAlimentacao]);

  return (
    <form className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4 slide-in">
      <div className="space-y-4">
        {/* Header */}
        <div className="pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SERPRO - PGCS (8h)
              </h2>
              <p className="text-xs text-gray-600">Simulador de salário</p>
            </div>
          </div>
        </div>

        {/* Carreira */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3.5">
          <div className="flex items-center gap-1.5 mb-2.5">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-sm font-bold text-gray-800">Carreira</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="nivel" className="block text-xs font-semibold text-gray-700 mb-1">Nível</label>
              <select id="nivel" className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 bg-white" onChange={(e) => setNivel(e.target.value)} value={nivel}>
                {pgcs.niveis.map((value, index) => <option key={index}>{value}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="degrau" className="block text-xs font-semibold text-gray-700 mb-1">Degrau</label>
              <select id="degrau" className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 bg-white" onChange={(e) => setDegrau(e.target.value)} value={degrau}>
                {pgcs.degraus.map((value, index) => <option key={index}>{value}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="classe" className="block text-xs font-semibold text-gray-700 mb-1">Gratificação</label>
              <select id="classe" className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 bg-white" onChange={(e) => setClasse(e.target.value)} value={classe}>
                {pgcs.gratificaoes.map((value, index) => <option key={index}>{value}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Extras */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3.5">
          <div className="flex items-center gap-1.5 mb-2.5">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 className="text-sm font-bold text-gray-800">Extras</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="gfe" className="block text-xs font-semibold text-gray-700 mb-1">GFE</label>
              <select id="gfe" className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-purple-500 bg-white" onChange={(e) => setGfeIndex(e.target.value)} value={gfeIndex}>
                {pgcs.gfe.map((value, index) => <option key={index}>{index}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="gfc" className="block text-xs font-semibold text-gray-700 mb-1">GFC</label>
              <select id="gfc" className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-purple-500 bg-white" onChange={(e) => setGfcIndex(e.target.value)} value={gfcIndex}>
                {pgcs.gfc.map((value, index) => <option key={index}>{index}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Alimentação</label>
              <div className="flex items-center h-9">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input id="alimentacao" type="checkbox" checked={checkAlimentacao} onChange={() => setChekAlimentacao(!checkAlimentacao)} className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                  <span className="ml-2 text-xs font-medium text-gray-700">{checkAlimentacao ? 'Sim' : 'Não'}</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <PlanoSaudeForm idade={idade} setIdade={setIdade} />
        <SerprosForm percentualSerpros={percentualSerpros} setPercentualSerpros={setPercentualSerpros} idadeSerpros={idadeSerpros} setIdadeSerpros={setIdadeSerpros} />

        {/* Simulação */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-3.5">
          <div className="flex items-center gap-1.5 mb-2.5">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 className="text-sm font-bold text-gray-800">Simulação</h3>
          </div>
          <div>
            <label htmlFor="reajuste" className="block text-xs font-semibold text-gray-700 mb-1">Reajuste (%)</label>
            <input id="reajuste" type="number" min={0} placeholder="0" className="block w-full rounded text-sm py-2 px-2.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 bg-white" onChange={(e) => setReajuste(Number(e.target.value))} value={reajuste} />
          </div>
        </div>
      </div>
    </form>
  );
}
