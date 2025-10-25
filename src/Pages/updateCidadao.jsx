import { useEffect, useState } from "react";
import FormularioCidadaoWrapper from "../Componentes/FormularioCidadao/index.jsx";
import { useGetCidadaos } from "../Hooks/useGetCidadaos";
import { useParams } from "react-router-dom";
import { defaultCidadaoDataScheme } from "../Componentes/FormularioCidadao/index.jsx";

function transformApiDataToFormData(apiData) {
    if (!apiData) return null;
    const formData = { ...defaultCidadaoDataScheme };
    for (const key in apiData) {
        if (formData.hasOwnProperty(key) && key !== 'condicao_rua') {
            if (typeof defaultCidadaoDataScheme[key] === 'boolean') {
                formData[key] = !!apiData[key];
            }
            else if (apiData[key] && ['data_nascimento', 'data_naturalizacao', 'entrada_brasil_data', 'data_saida'].includes(key)) {
                try {
                    formData[key] = new Date(apiData[key]).toISOString().split('T')[0];
                } catch (e) {
                    console.error("Erro ao formatar data:", key, apiData[key]);
                    formData[key] = "";
                }
            }
            else if (key === 'sexo') {
                if (apiData[key] === 'M') formData[key] = 'Masculino';
                else if (apiData[key] === 'F') formData[key] = 'Feminino';
                else formData[key] = 'Ignorado';
            }
            else {
                formData[key] = apiData[key] ?? "";
            }
        }
    }

    formData._outras_condicoes_1 = apiData.condicoes?.[0] || "";
    formData._outras_condicoes_2 = apiData.condicoes?.[1] || "";
    formData._outras_condicoes_3 = apiData.condicoes?.[2] || "";
    formData._tipo_deficiencia = apiData.deficiencias?.[0] || "Não";
    formData._tem_deficiencia = !!(apiData.deficiencias && apiData.deficiencias.length > 0 && apiData.deficiencias[0] !== "Não");
    formData._doenca_cardiaca_tipo = apiData.doencas_cardiacas?.[0] || "Não tem";
    formData._problemas_renais_tipo = apiData.doencas_renais?.[0] || "Não tem";
    formData.problemas_renais = !!(apiData.doencas_renais && apiData.doencas_renais.length > 0 && apiData.doencas_renais[0] !== "Não tem");
    formData._doenca_respiratoria_tipo = apiData.doencas_respiratorias?.[0] || "Não tem";
    if (apiData.condicao_rua) {
        formData._em_situacao_de_rua = true;
        formData._tempo_situacao_rua = apiData.condicao_rua.tempo || "";
        formData._recebe_beneficio = !!apiData.condicao_rua.recebe_beneficio;
        formData._possui_referencia_familiar = !!apiData.condicao_rua.referencia_familiar;
        if (apiData.condicao_rua.refeicoes_dia === 1) formData._refeicoes_ao_dia = "Uma";
        else if (apiData.condicao_rua.refeicoes_dia === 2) formData._refeicoes_ao_dia = "Duas";
        else if (apiData.condicao_rua.refeicoes_dia === 3) formData._refeicoes_ao_dia = "Três";
        else if (apiData.condicao_rua.refeicoes_dia && apiData.condicao_rua.refeicoes_dia > 3) formData._refeicoes_ao_dia = "Mais de três";
        else formData._refeicoes_ao_dia = "";
        formData._visita_familiar = !!apiData.condicao_rua.visita_familiar;
        formData._grau_parentesco_visita = apiData.condicao_rua.graus_parentesco_familiar || "";
        formData._acompanhado_por_instituicao = !!apiData.condicao_rua.instituicao_apoio;
        formData._nome_instituicao = apiData.condicao_rua.instituicao_apoio || "";
        const origens = apiData.condicao_rua.origem_alimentacao || [];
        formData._origem_alimentacao_restaurante_popular = origens.includes("Restaurante Popular");
        formData._origem_alimentacao_doacao_grupo_religioso = origens.includes("Doação Grupo Religioso");
        formData._origem_alimentacao_doacao_restaurante = origens.includes("Doação Restaurante");
        formData._origem_alimentacao_doacao_popular = origens.includes("Doação Popular");
        formData._origem_alimentacao_outros = origens.includes("Outras");
        const acessos = apiData.condicao_rua.acesso_higiene || [];
        formData._acesso_higiene_banho = acessos.includes("Banho");
        formData._acesso_higiene_sanitario = acessos.includes("Acesso ao sanitário");
        formData._acesso_higiene_bucal = acessos.includes("Higiene Bucal");
        formData._acesso_higiene_outros = acessos.includes("Outras");
    } else {
        formData._em_situacao_de_rua = false;
    }
    formData._deseja_informar_orientacao_sexual = !!formData.orientacao_sexual;
    formData._deseja_informar_identidade_genero = !!formData.identidade_genero;
    return formData;
}


function UpdateCidadao() {
    const { id } = useParams();
    const { fetchCidadaoById, loading, cidadao } = useGetCidadaos();
    const [transformedData, setTransformedData] = useState(null);

    // useEffect para buscar os dados da API
    useEffect(() => {
        if (id) {
            console.log("Buscando cidadão com ID:", id);
            fetchCidadaoById(id);
        }
    }, [id]);

    useEffect(() => {
        if (cidadao) {
            console.log("Dados recebidos da API, iniciando transformação...");
            setTransformedData(transformApiDataToFormData(cidadao));
        } else if (!loading && id) {
            console.log("Cidadão não encontrado ou erro ao buscar, limpando formulário.");
            setTransformedData(null); // Garante limpar se a busca falhar
        }
    }, [cidadao, loading, id]);


    return (
        <>
            {loading && <div className="loader">Carregando dados do cidadão...</div>}
            {!loading && (
                !transformedData ? (
                    <div className="loader">{cidadao === null ? "Nenhum cidadão encontrado com este ID." : "Aguardando dados..."}</div>
                ) : (
                    <div>
                        <FormularioCidadaoWrapper cidadao={transformedData} />
                    </div>
                )
            )}
        </>
    );
}

export default UpdateCidadao;