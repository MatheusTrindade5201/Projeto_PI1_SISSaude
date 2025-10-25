import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { useUpsertCidadao } from "../../Hooks/useUpsertCidadao";
import IdentificacaoUsuario from "./Componentes/IdentificacaoUsuario";
import InformacoesSociodemograficas from "./Componentes/InformacoesSociodemograficas";
import CondicoesSaude from "./Componentes/CondicoesSaude";
import OutrasCondicoes from "./Componentes/OutrasCondicoes";
import SituacaoDeRua from "./Componentes/SituacaoDeRua";
import "../../styles/styleFormularioCidadao.css";

export const defaultCidadaoDataScheme = {
    cns: "",
    cpf: "",
    domicilio: "",
    nome: "",
    nome_social: "",
    data_nascimento: "",
    sexo: "",
    raca_cor: "",
    etnia: "",
    nome_mae: "",
    nome_pai: "", // API espera null se vazio
    nacionalidade: "Brasileira",
    pais: "Brasil",
    data_naturalizacao: "",
    naturalizacao_portaria: "", // API espera null se vazio
    municipio_nascimento: "",
    uf_nascimento: "",
    entrada_brasil_data: "",
    celular: "",
    email: "",
    relacao_responsavel: "", // API espera null se vazio
    ocupacao: "", // API espera null se vazio
    frequenta_escola_creche: false,
    escolaridade: "", // API espera null se vazio
    situacao_mercado_trabalho: "", // API espera null se vazio
    frequenta_cuidador: false,
    participa_grupo_comunitario: false,
    plano_saude: false,
    membro_povo_comunidade_tradicional: false,
    orientacao_sexual: "",
    identidade_genero: "", // API espera null se vazio 
    motivo_saida: "", // API espera null se vazio
    data_saida: "",
    numero_declaracao_obito: "", // API espera null se vazio
    gestante: false,
    maternidade_referencia: "",
    fumante: false,
    uso_alcool: false,
    uso_drogas: false,
    hipertensao: false,
    diabetes: false,
    avc_derrame: false,
    infarto: false,
    doenca_cardiaca: false,
    problemas_renais: false,
    hanseniase: false,
    doenca_respiratoria: false,
    tuberculose: false,
    cancer: false,
    internacao_recente: false,
    internacao_motivo: "", // API espera null se vazio
    diagnostico_problema_mental: false,
    acamado: false,
    domiciliado: false,
    praticas_ingestivas_complementares: false,
    _doenca_cardiaca_tipo: "",
    _problemas_renais_tipo: "",
    _doenca_respiratoria_tipo: "",
    _tipo_deficiencia: "",
    _outras_condicoes_1: "",
    _outras_condicoes_2: "",
    _outras_condicoes_3: "",
    _em_situacao_de_rua: false,
    _tempo_situacao_rua: "",
    _acompanhado_por_instituicao: false,
    _nome_instituicao: "",
    _recebe_beneficio: false,
    _possui_referencia_familiar: false,
    _refeicoes_ao_dia: "",
    _origem_alimentacao_restaurante_popular: false,
    _origem_alimentacao_doacao_grupo_religioso: false,
    _origem_alimentacao_doacao_restaurante: false,
    _origem_alimentacao_doacao_popular: false,
    _origem_alimentacao_outros: false,
    _visita_familiar: false,
    _grau_parentesco_visita: "",
    _acesso_higiene_banho: false,
    _acesso_higiene_sanitario: false,
    _acesso_higiene_bucal: false,
    _acesso_higiene_outros: false,
};

function FormularioCidadaoWrapper({ cidadao }) {
    const cidadaoID = cidadao?.id;
    const [cidadaoFormData, setCidadaoFormData] = useState(cidadao || defaultCidadaoDataScheme);
    const { submitForm, isLoading } = useUpsertCidadao(cidadaoID);

    return (
        <div className="formulario-wrapper">
            <IdentificacaoUsuario formData={cidadaoFormData} setFormData={setCidadaoFormData} />
            <InformacoesSociodemograficas formData={cidadaoFormData} setFormData={setCidadaoFormData} />
            <CondicoesSaude formData={cidadaoFormData} setFormData={setCidadaoFormData} />
            <OutrasCondicoes formData={cidadaoFormData} setFormData={setCidadaoFormData} />
            <SituacaoDeRua formData={cidadaoFormData} setFormData={setCidadaoFormData} />

            <div className="form-actions">
                <button className="btn-salvar" onClick={() => submitForm(cidadaoFormData)} disabled={isLoading}>
                    Salvar
                </button>
            </div>
        </div>
    );
}

export default FormularioCidadaoWrapper;