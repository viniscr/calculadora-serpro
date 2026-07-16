import { Calculadora } from "./calc";
import { PlanoSaude } from "./plano-saude";
import { Serpros } from "./serpros";

export class PGCS {
  constructor() {
    this.niveis = Array.from({ length: 22 }, (x, i) => i + 101);
    this.degraus = ["A", "B"];
    this.gratificaoes = ["Classe I", "Classe II", "Classe III"];
    this.gfe = [
      0, 519.04, 562.65, 609.91, 661.15, 716.67, 776.90, 842.12, 912.87, 989.57, 1072.67, 
      1162.81, 1260.46, 1366.36, 1481.13, 1605.48, 1740.37, 1886.57, 2045.05, 2216.85, 2403.08, 
      2604.90, 2823.74, 3060.91, 3318.01, 3596.78, 3898.87, 4226.40, 4581.42, 4966.26, 5383.40, 
      5835.62, 6325.79, 6857.20, 7433.17, 8057.59, 8734.38, 9468.08, 10263.41, 11125.53, 12060.05
    ];

    this.gfc = [
      0, 4229.15, 4998.09, 5767.00, 7689.35, 8073.81, 8458.33, 8842.74, 10765.13, 11534.06, 
      12302.96, 15609.81, 14994.27, 15378.74, 18070.02, 20376.77
    ];

    this.calculadora = new Calculadora();
    this.planoSaude = new PlanoSaude();
    this.serpros = new Serpros();
  }

  calculate({
    nivel,
    classe,
    degrau,
    gfeIndex = 0,
    gfcIndex = 0,
    reajuste,
    idade,
    percentualSerpros,
    idadeSerpros,
    checkAlimentacao,
  }) {
    let base = this.calculadora.calcularBase(this.niveis[0], nivel, degrau);
    let gratificao = this.calculadora.calcularGratificacao(classe, base);
    let gfe = this.gfe[gfeIndex];
    let gfc = this.gfc[gfcIndex];
    let decontoPlanoSaude = 0;
    let descontoSerpros = 0.0;
    let alimentacao = 0;
    let deducaoAlimentacao = 0.0;

    //alimentacao
    if (checkAlimentacao) {
      alimentacao = this.calculadora.alimentacao;
      deducaoAlimentacao =
        this.calculadora.calcularDeducaoAlimentacao(alimentacao);
    }

    //Plano saude
    if (idade) {
      const dadosPlano = this.planoSaude.calculate({ idade, nivel });
      decontoPlanoSaude = dadosPlano.desconto;
    }

    //REAJUSTE
    if (reajuste) {
      base = this.calculadora.aplicarReajuste(base, reajuste);
      alimentacao = this.calculadora.aplicarReajuste(alimentacao, reajuste);
      deducaoAlimentacao =
        this.calculadora.calcularDeducaoAlimentacao(alimentacao);
      gfe = this.calculadora.aplicarReajuste(gfe, reajuste);
      gfc = this.calculadora.aplicarReajuste(gfc, reajuste);
      gratificao = this.calculadora.calcularGratificacao(classe, base);
    }

    //SERPROS
    if (idadeSerpros) {
      const salarioContribuicao = base + gratificao + gfe + gfc;
      const dadosSerpros = this.serpros.calculate({idadeSerpros, percentualSerpros, salarioContribuicao});
      descontoSerpros = dadosSerpros.desconto;
    }

    const gratificacaoPerc = this.calculadora.p_gratificacao[classe];
    const totalBruto = base + gratificao + gfe + gfc;

    const fgts = this.calculadora.calcularFGTS(totalBruto);

    //DEDUCOES
    const irpf = this.calculadora.calcularIRPF(totalBruto, descontoSerpros);
    const inss = this.calculadora.inss;
    const totalDeducoes = irpf+deducaoAlimentacao+inss+decontoPlanoSaude+descontoSerpros;

    const liquido =
      totalBruto -
      irpf -
      deducaoAlimentacao -
      inss -
      decontoPlanoSaude -
      descontoSerpros;

    return {
      remuneracao: {
        base: this._formatNumber(base),
        liquido: this._formatNumber(liquido),
        gratificao: this._formatNumber(gratificao),
        gratificacaoPerc: gratificacaoPerc * 100,
        gfe: this._formatNumber(gfe),
        gfeIndex: gfeIndex,
        gfc: this._formatNumber(gfc),
        gfcIndex: gfcIndex,
        resumo: this._formatNumber(totalBruto),
      },

      deducoes: {
        irpf: this._formatNumber(irpf),
        deducaoAlimentacao: this._formatNumber(deducaoAlimentacao),
        inss: this._formatNumber(inss),
        planoSaude: this._formatNumber(decontoPlanoSaude),
        serpros: this._formatNumber(descontoSerpros),
        resumo: this._formatNumber(totalDeducoes),
      },

      outros: {
        alimentacao: this._formatNumber(alimentacao),
        fgts: this._formatNumber(fgts),
        fgtsPerc: this.calculadora.p_fgts * 100,
      },

      totais: this._formatNumber(liquido + alimentacao),
    };
  }

  _formatNumber(value) {
    const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return value.toLocaleString("pt-BR", options);
  }
}
