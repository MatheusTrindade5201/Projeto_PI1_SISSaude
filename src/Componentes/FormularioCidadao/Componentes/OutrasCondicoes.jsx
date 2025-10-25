import { handleDataChange } from "../../../Helpers/handleDataChange";
import TextInput from "../../Inputs/TextInput";

function OutrasCondicoes({ formData, setFormData }) {
    return (
        <div className="section-wrapper">
            <h2>Outras condições de Saúde</h2>
            <div className="form-section-card">
                <div className="flex-container">
                    <div className="form-group flex-item-33">
                        <label>1 - Qual?</label>
                        <TextInput
                            value={formData._outras_condicoes_1 || ''}
                            onChange={(e) => handleDataChange(formData, setFormData, "_outras_condicoes_1", e.target.value)}
                            maxLength={60}
                        />
                    </div>
                    <div className="form-group flex-item-33">
                        <label>2 - Qual?</label>
                        <TextInput
                            value={formData._outras_condicoes_2 || ''}
                            onChange={(e) => handleDataChange(formData, setFormData, "_outras_condicoes_2", e.target.value)}
                            maxLength={60}
                        />
                    </div>
                    <div className="form-group flex-item-33">
                        <label>3 - Qual?</label>
                        <TextInput
                            value={formData._outras_condicoes_3 || ''}
                            onChange={(e) => handleDataChange(formData, setFormData, "_outras_condicoes_3", e.target.value)}
                            maxLength={60}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OutrasCondicoes;