import { PaymentProps } from "../../interfaces/PaymentProps";
import "../FormularioPagamento/DadosPagamento.css";

function PaymentsData({ qrcode }: PaymentProps) {
    return (

            <div className="card-body-pag">
                <p>Opção Pix</p>
                <div className='imagem'>
                    <img src={qrcode} className="qrcode" />
                </div>
                <button type="button" className="btn-pag">Finalizar Pedido</button>
            </div>

    );
}

export default PaymentsData;
