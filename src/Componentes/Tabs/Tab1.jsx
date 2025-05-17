import React from "react";
import { handleDataChange } from "../../Helpers/handleDataChange";
import "../../styles/stylePags.css";
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
  UFs,
} from "../../Utils/constants";
import SelectInput from "../SelectInput";

function Tab1({ formData, setFormData }) {
  return (
    <div className="background">
      <div style={{ display: "flex" }}>
        <div style={{ width: "55%" }}>
          <EndLocaldepermanencia
            formData={formData}
            setFormData={setFormData}
          />
          <div>
            <div className="boxesPag1">
              <Telefonecontato formData={formData} setFormData={setFormData} />
              {/* <Familias formData={formData} setFormData={setFormData} /> */}
            </div>
            <div>
              <AnimaisDomicilio formData={formData} setFormData={setFormData} />
            </div>
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <CondMoradia formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
}

function EndLocaldepermanencia({ formData, setFormData }) {
  return (
    <div id="End_Localdepermanencia">
      <p className="titulosSecoes">Endereço/Local de Permanência</p>
      <br />
      <div className="bloco">
        <div id="linha1" className="linha">
          <div>
            <label>CEP</label>
            <input
              value={formData.cep}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "cep",
                  event.target.value
                )
              }
              id="CEP"
              className="campo_preenchimento CEP"
              type="text"
              placeholder="00000-000"
            />
          </div>
          <div>
            <label>Município</label>
            <input
              value={formData.municipio}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "municipio",
                  event.target.value
                )
              }
              id="Municipio"
              className="campo_preenchimento Municipio"
              type="text"
              placeholder="Guarulhos"
            />
          </div>
          <div>
            <label>UF</label>

            <SelectInput
              className="campo_preenchimento UF"
              value={formData.uf}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "uf",
                  event.target.value
                )
              }
              items={UFs}
            />
          </div>
          <div>
            <label>Tipo imóvel</label>
            <input
              value={formData.tipo_imovel}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "tipo_imovel",
                  event.target.value
                )
              }
              id="tipo_imovel"
              className="campo_preenchimento Tipo_imovel"
              type="text"
              placeholder="00"
            />
          </div>
        </div>
        
        <div id="linha2" className="linha">
          <div>
            <label>Bairro</label>
            <input
              value={formData.bairro}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "bairro",
                  event.target.value
                )
              }
              id="Bairro"
              className="campo_preenchimento Bairro"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Tipo de Logradouro</label>
            <input
              value={formData.tipo_logradouro}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "tipo_logradouro",
                  event.target.value
                )
              }
              id="Logradouro"
              className="campo_preenchimento Tipo_logradouro"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Nome do Logradouro</label>
            <input
              value={formData.nome_logradouro}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "nome_logradouro",
                  event.target.value
                )
              }
              id="nome_logradouro"
              className="campo_preenchimento Nome_logradouro"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Microárea</label>
            <input
              value={formData.microarea}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "microarea",
                  event.target.value
                )
              }
              id="microarea"
              className="campo_preenchimento Microarea"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        
        <div id="linha3" className="linha">
          <div>
            <label>Número</label>
            <input
              value={formData.numero}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "numero",
                  event.target.value
                )
              }
              id="numero"
              className="campo_preenchimento Numero"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label className="pto_ref">Ponto de Referência</label>
            <input
              value={formData.pto_referencia}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "pto_referencia",
                  event.target.value
                )
              }
              id="pto_ref"
              className="campo_preenchimento PtoRef"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Telefonecontato({ formData, setFormData }) {
  return (
    <div id="Telefone para contato">
      <h3 className="titulosSecoes">Telefones para contato</h3>
      <br />
      <div id="linha1" className="linha_bloco">
        <div>
          <label>Residencial</label>
          <input
            value={formData.telefone_residencia}
            onChange={(event) =>
              handleDataChange(
                formData,
                setFormData,
                "telefone_residencia",
                event.target.value
              )
            }
            id="telefone_residencia"
            className="campo_preenchimento Residencial"
            type="text"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div>
          <label className="contato">Contato</label>
          <input
            value={formData.telefone_contato}
            onChange={(event) =>
              handleDataChange(
                formData,
                setFormData,
                "telefone_contato",
                event.target.value
              )
            }
            id="telefone_contato"
            className="campo_preenchimento"
            type="text"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
    </div>
  );
}

function AnimaisDomicilio({ formData, setFormData }) {
  return (
    <div id="Animais no domicílio">
      <div>
        <p className="titulosSecoes">Animais no domicílio</p>
        <button
          onClick={() =>
            setFormData({
              ...formData,
              animais: [...formData.animais, { animal: "", quantidade: 0 }],
            })
          }
        >
          Adicionar +
        </button>
      </div>
      <div id="linha1" className="linha_bloco Animais">
        {React.Children.toArray(
          formData.animais.map((animal, index) => (
            <div>
              <label>Animal</label>
              <input
                id={`animal-${index}`}
                className="campo_preenchimento Num_moradores"
                placeholder="Ex: Cachorro"
                value={animal.animal}
                onChange={(event) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    event.target.value,
                    index,
                    "animal"
                  )
                }
              />
              <label>Quantidade</label>
              <input
                id={`animal-quantidade-${index}`}
                className="campo_preenchimento Num_moradores"
                placeholder="Nº"
                value={animal.quantidade}
                onChange={(event) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    event.target.value,
                    index,
                    "quantidade"
                  )
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* function Familias({ formData, setFormData }) {
  return (
    <div id="Familias">
      <h3 className="titulosSecoes">Famílias</h3>
      <br />
      <div id="linha1" className="linha_bloco_familias">
        <div className="box">
          <label>Nº Prontuário familiar</label>
          <input
            id="email"
            className="campo_preenchimento Prontuario_familiar"
            type="text"
            placeholder=""
          />

          <label>Data Nasc.</label>
          <p className="fonte_pequena">(do responsável)</p>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <label>CNS do Responsável</label>
          <input
            id="email"
            className="campo_preenchimento CNS_responsavel"
            type="text"
            placeholder=""
          />

          <label>Membros</label>
          <p className="fonte_pequena">(da Família)</p>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <label>Renda Familiar(sm)</label>
          <input
            id="email"
            className="campo_preenchimento Renda_familiar"
            type="text"
            placeholder=""
          />

          <label>Reside desde</label>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder="mm/aaaa"
          />
        </div>
      </div>
    </div>
  );
} */

function CondMoradia({ formData, setFormData }) {
  return (
    <div>
      <div id="Condições de Moradia" className="bloco">
        <p className="titulosSecoes">Condições de Moradia</p>
        <div id="linha1" className="linha">
          <div>
            <label>Situação de Moradia/Posse da Terra</label>
            <SelectInput
              items={situacaoMoradia}
              value={formData.situacao_moradia}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "situacao_moradia",
                  event.target.value
                )
              }
            />
          </div>
          <div>
            <label>Abastecimento de água</label>
            <SelectInput
              items={abastecimentoAgua}
              value={formData.abastecimento_agua}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "abastecimento_agua",
                  event.target.value
                )
              }
            />
          </div>
        </div>
        <div id="linha2" className="linha">
          <div>
            <label>Localização</label>
            <SelectInput
              items={localizacao}
              value={formData.localizacao}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "localizacao",
                  event.target.value
                )
              }
            />
          </div>
          <div>
            <label>Água para consumo no domicílio</label>
            <SelectInput
              items={aguaConsumo}
              value={formData.agua_consumo}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "agua_consumo",
                  event.target.value
                )
              }
            />
          </div>
        </div>
        <div id="linha3" className="linha">
          <div>
            <label>Tipo de Domicílio</label>
            <SelectInput
              items={tipoDomicilio}
              value={formData.tipo_domicilio}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "tipo_domicilio",
                  event.target.value
                )
              }
            />
          </div>
          <div>
            <label>Destino do Lixo</label>
            <SelectInput
              items={destinoLixo}
              value={formData.destino_lixo}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "destino_lixo",
                  event.target.value
                )
              }
            />
          </div>
        </div>
        <div id="linha4" className="linha">
          <div className="moradores_comodos">
            <input
              name="browser"
              id="browser"
              className="campo_preenchimento Num_moradores"
              placeholder="Nº"
              value={formData.n_moradores}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "n_moradores",
                  event.target.value
                )
              }
            />
            <label>Moradores</label>
          </div>
          <div className="moradores_comodos">
            <input
              name="browser"
              id="browser"
              className="campo_preenchimento"
              placeholder="Nº"
              value={formData.n_comodos}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "n_comodos",
                  event.target.value
                )
              }
            />
            <label>Cômodos</label>
          </div>
          <div>
            <label>Forma de escoamento</label>
            <p className="fonte_pequena">(do banheiro ou sanitário)</p>
            <SelectInput
              items={formaEscoamento}
              value={formData.escoamento_banheiro}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "escoamento_banheiro",
                  event.target.value
                )
              }
            />
          </div>
        </div>
        <div id="linha5" className="linha">
          <div>
            <label className="acesso_domicilio">
              Tipo de acesso ao domicílio
            </label>
            <SelectInput
              items={acessoDomicilio}
              value={formData.tipo_acesso}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "tipo_acesso",
                  event.target.value
                )
              }
            />
          </div>
          <div>
            <label>Condição de posse e uso da Terra</label>
            <p className="fonte_pequena">(Somente área de produção Rural)</p>
            <SelectInput
              items={posseTerra}
              value={formData.condicao_posse_producao_rural}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "condicao_posse_producao_rural",
                  event.target.value
                )
              }
            />
          </div>
        </div>
        <div id="linha6" className="linha">
          <div className="moradores_comodos Energia">
            <input
              type="checkbox"
              id="browser"
              className="campo_preenchimento FA"
              value={formData.energia_eletrica}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "energia_eletrica",
                  event.target.value
                )
              }
            />
            <label className="energia_eletrica">
              Disponibilidade de Energia elétrica
            </label>
          </div>
          <div>
            <label>Material predominante</label>
            <p className="fonte_pequena">
              (na construção das paredes externas do domicílio)
            </p>
            <SelectInput
              items={materialPredominante}
              value={formData.material_predominante}
              onChange={(event) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "material_predominante",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tab1;
