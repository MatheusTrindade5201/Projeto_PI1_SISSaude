import { handleDataChange } from "../../../Helpers/handleDataChange";
import {
  abastecimentoAgua,
  acessoDomicilio,
  aguaConsumo,
  destinoLixo,
  formaEscoamento,
  localizacao,
  materialPredominante,
  posseTerra,
  situacaoMoradia,
  tipoDomicilio,
} from "../../../Utils/constants";
import SelectInput from "../../Inputs/SelectInput";
import "../../../styles/styleFormularioIndividuo.css";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import "../../../styles/styleCondMoradia.css";

function CondMoradia({ formData, setFormData }) {
  return (
    <div className="secao-form-container">
      <h3 className="titulos-secoes">Condições de Moradia</h3>
      <div className="form-container">
        <div className="cond-moradia-inputs">
          <SelectInput
            className="selects-linha"
            id="situacao-moradia"
            label="Situação de Moradia/Posse da Terra"
            items={situacaoMoradia}
            value={formData.situacao_moradia}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "situacao_moradia",
                e.target.value
              )
            }
          />
          <SelectInput
            className="selects-linha"
            id="abastecimento-agua"
            label="Abastecimento de água"
            items={abastecimentoAgua}
            value={formData.abastecimento_agua}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "abastecimento_agua",
                e.target.value
              )
            }
          />

          <SelectInput
            className="selects-linha"
            id="localizacao"
            label="Localização"
            items={localizacao}
            value={formData.localizacao}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "localizacao",
                e.target.value
              )
            }
          />
          <SelectInput
            className="selects-linha"
            id="agua-consumo"
            label="Água para consumo no domicílio"
            items={aguaConsumo}
            value={formData.agua_consumo}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "agua_consumo",
                e.target.value
              )
            }
          />

          <SelectInput
            className="selects-linha"
            id="tipo-domicilio"
            label="Tipo de Domicílio"
            items={tipoDomicilio}
            value={formData.tipo_domicilio}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "tipo_domicilio",
                e.target.value
              )
            }
          />
          <SelectInput
            className="selects-linha"
            id="destino-lixo"
            label="Destino do Lixo"
            items={destinoLixo}
            value={formData.destino_lixo}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "destino_lixo",
                e.target.value
              )
            }
          />

          <TextInput
            id="n-moradores"
            label="Moradores"
            value={formData.n_moradores}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "n_moradores",
                e.target.value
              )
            }
            className="selects-linha"
          />
          <TextInput
            id="n-comodos"
            label="Cômodos"
            value={formData.n_comodos}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "n_comodos",
                e.target.value
              )
            }
            className="selects-linha"
          />
          <SelectInput
            className="selects-linha"
            id="escoamento-banheiro"
            label="Forma de escoamento (do banheiro ou sanitário)"
            items={formaEscoamento}
            value={formData.escoamento_banheiro}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "escoamento_banheiro",
                e.target.value
              )
            }
          />

          <SelectInput
            className="selects-linha"
            id="tipo-acesso"
            label="Tipo de acesso ao domicílio"
            items={acessoDomicilio}
            value={formData.tipo_acesso}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "tipo_acesso",
                e.target.value
              )
            }
          />
          <SelectInput
            className="selects-linha"
            id="condicao-posse-terra"
            label="Condição de posse e uso da Terra (Somente área de produção Rural)"
            items={posseTerra}
            value={formData.condicao_posse_producao_rural}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "condicao_posse_producao_rural",
                e.target.value
              )
            }
          />

          <Checkbox
            id="energia-eletrica"
            label="Disponibilidade de Energia elétrica"
            checked={formData.energia_eletrica}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "energia_eletrica",
                e.target.checked
              )
            }
            className="selects-linha"
          />
          <SelectInput
            className="selects-linha"
            id="material-predominante"
            label="Material predominante (na construção das paredes externas do domicílio)"
            items={materialPredominante}
            value={formData.material_predominante}
            onChange={(e) =>
              handleDataChange(
                formData,
                setFormData,
                "material_predominante",
                e.target.value
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CondMoradia;
