export const UFs = [
    "SP", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
    "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ",
    "RN", "RS", "RO", "RR", "SC", "SE", "TO",
];


export const situacaoMoradia = [
    "Próprio", "Financiado", "Alugado", "Arrendado", "Cedido",
    "Ocupado", "Situação de rua", "Outra",
];
export const abastecimentoAgua = [
    "Rede Encanada até o domicilio", "Poço/Nascente no domicilio",
    "Cisterna", "Carro Pipa", "Outro",
];
export const localizacao = ["Urbana", "Rural"];
export const aguaConsumo = [
    "Filtrada", "Fervida", "Clorada", "Mineral", "Sem Tratamento",
];
export const tipoDomicilio = ["Casa", "Apartamento", "Cômodo", "Outro"];
export const destinoLixo = ["Coletado", "Queimado/Enterrado", "Céu Aberto", "Outro"];
export const formaEscoamento = [
    "Rede Coletora de Esgoto ou Pluvial", "Fossa Séptica", "Fossa Rudimentar",
    "Direto para um Rio, Lago ou Mar", "Céu Aberto", "Outra Forma",
];
export const acessoDomicilio = ["Pavimento", "Chão Batido", "Fluvial", "Outro"];
export const posseTerra = [
    "Proprietário", "Parceiro(a)/Meeiro(a)", "Assentado(a)", "Posseiro",
    "Arrendatário(a)", "Comodatário(a)", "Beneficiário(a) do Banco da Terra",
    "Não se aplica",
];
export const materialPredominante = [
    "Alvenaria/Tijolo - Com revestimento", "Alvenaria/Tijolo - Sem revestimento",
    "Taipa - Com revestimento", "Taipa - Sem revestimento",
    "Outros - Madeira Aparelhada", "Outros - Palha",
    "Outros - Material Aproveitado", "Outros - Outro Material",
];

export const sexoOpcoes = ["Masculino", "Feminino", "Ignorado"];
export const racaCorOpcoes = ["Branca", "Preta", "Parda", "Amarela", "Indígena", "Sem informação"];
export const etniaOpcoes = ["Indígena", "Não indígena"];
export const nacionalidadeOpcoes = ["Brasileira", "Naturalizado", "Estrangeiro"];
export const paisNascimentoOpcoes = ["Brasil", "Outro"];

export const relacaoParentescoOpcoes = [
    "Cônjuge/Companheiro(a)", "Filho(a)", "Enteado(a)", "Neto(a)/Bisneto(a)",
    "Pai/Mãe", "Sogro(a)", "Irmão/Irmã", "Genro/Nora", "Outro parente",
    "Não parente", "Responsável",
];

export const escolaridadeOpcoes = [
    "Sem escolaridade", "Creche", "Pré-escola", "Fundamental I (1-5)",
    "Fundamental II (6-9)", "Médio", "Superior", "Pós-graduação",
    "Analfabeto",
    "Alfabetizado",
    "Não sabe / Não respondeu",
];

export const situacaoMercadoTrabalhoOpcoes = [
    "Empregador", "Assalariado com carteira", "Assalariado sem carteira",
    "Autônomo com previdência", "Autônomo sem previdência",
    "Trabalhador não remunerado", "Doméstico com carteira", "Doméstico sem carteira",
    "Aposentado/Pensionista", "Desempregado", "Estudante", "Dona(o) de casa",
    "Outro", "Não sabe / Não respondeu",
];

export const orientacaoSexualOpcoes = [
    "Heterossexual", "Homossexual (Gay/Lésbica)", "Bissexual", "Outra",
    "Não sabe", "Recusou informar",
];

export const identidadeGeneroOpcoes = [
    "Mulher Transexual", "Homem Transexual", "Travesti", "Outro",
    "Não sabe", "Recusou informar",
];

export const deficienciaOpcoes = [
    "Não",
    "Auditiva", "Visual", "Intelectual/Cognitiva", "Física", "Outra",
];

export const pesoOpcoes = ["Abaixo do peso", "Peso adequado", "Acima do peso"]; // Campo não existe na API

export const doencaCardiacaOpcoes = [
    "Não tem",
    "Insuficiência cardíaca", "Outra", "Não sabe",
];

export const problemasRenaisOpcoes = [ // API espera lista 'doencas_renais'
    "Não tem", // Opção para indicar ausência
    "Insuficiência renal", "Outro", "Não sabe",
];

export const doencaRespiratoriaOpcoes = [
    "Não tem", // Opção para indicar ausência
    "Asma", "DPOC/Enfisema", "Outra", "Não sabe",
];

export const refeicoesOpcoes = ["Uma", "Duas", "Três", "Mais de três"];

export const tempoRuaOpcoes = [
    "<6 meses",
    "6-12 meses",
    "1-5 anos",
    ">5 anos",
    "Não sabe"
];
