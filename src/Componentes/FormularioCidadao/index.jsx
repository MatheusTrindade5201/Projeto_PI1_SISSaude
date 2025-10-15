import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { useUpsertCidadao } from "../../Hooks/useUpsertCidadao";
import IdentificacaoUsuario from "./Componentes/IdentificacaoUsuario";
import InformacoesSociodemograficas from "./Componentes/InformacoesSociodemograficas";
import CondicoesSaude from "./Componentes/CondicoesSaude";
import OutrasCondicoes from "./Componentes/OutrasCondicoes";
import SituacaoDeRua from "./Componentes/SituacaoDeRua";
import "../../styles/styleFormularioCidadao.css";

const defaultCidadaoDataScheme = {
    cns_cidadao: "", responsavel_familiar: false, cns_responsavel_familiar: "", microarea: "", fa: false,
    nome_completo: "", nome_social: "", data_nascimento: "", sexo: "", raca_cor: "", etnia: "", nis_pis_pasep: "",
    nacionalidade: "Brasileira", pais_nascimento: "Brasil", uf_nascimento: "", cidade_nascimento: "", data_naturalizacao: "", portaria_naturalizacao: "", data_entrada_brasil: "",
    celular: "", email: "", nome_completo_mae: "", nome_completo_pai: "",
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