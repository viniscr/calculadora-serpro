"use client";

import { useState } from "react";
import Dashboard from "./dashboard";
import CalcForm from "./form";
import Link from "next/link";

export default function Calculator() {
  const [data, setData] = useState(null);

  return (
    <div className="fade-in">
      <Link
        href={"https://github.com/tacsio/calculadora-serpro"}
        className="github_banner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        View on GitHub
      </Link>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Coluna Esquerda - Parâmetros */}
        <div className="xl:h-[calc(100vh-8rem)] xl:overflow-y-auto xl:pr-2 scrollbar-thin">
          <CalcForm setData={setData} />
        </div>

        {/* Coluna Direita - Resultados */}
        <div className="xl:sticky xl:top-4 xl:h-[calc(100vh-8rem)]">
          {data ? (
            <Dashboard data={data} />
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Resultados aparecerão aqui</h3>
                <p className="text-gray-500">Configure os parâmetros ao lado para visualizar os cálculos</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
