import { ItensPedidoProps } from '../../interfaces/ItensPedidoProps';
import "../FormularioPagamento/DadosPedido.css";

function OrderData({ price, image, total, lanche }: ItensPedidoProps) {
    return (
            <div className="card-body-ped">
            <strong>{lanche}</strong>
                    <p>Preço.....................{price}</p>
                    <div className='imagem'>
                        <img src={image} className="product-card__image"/>
                    </div>
                    <strong>Total: R$ {total}</strong>
                
            </div>
    );
}

export default OrderData;