import { DadosLoginProps } from '../../interfaces/DadosLoginProps';
import "../FormularioPagamento/DadosLogin.css";

function CustomerData({ name, endereco, telefone }: DadosLoginProps) {
    return (
       
            <div className="card-body-log">
                <strong>Nome: {name}</strong>
                <p>Telefone: {telefone}</p>
                <p>Endereço: {endereco}</p>
            </div>
        
    );
}

export default CustomerData;