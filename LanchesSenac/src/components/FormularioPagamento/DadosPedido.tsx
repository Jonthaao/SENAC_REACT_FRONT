import { ItensPedidoProps } from '../../interfaces/ItensPedidoProps';
import "../FormularioPagamento/DadosPedido.css";

function OrderData({ price, image, total, lanche, qtd }: ItensPedidoProps) {
    return (
            <div className="card-body-ped">
            <div className='imagem'>
                <img src={image} className="product-card__image" />
            </div>
            <div className='dado-produto'>
                <p>Produto: {lanche}</p>
                <p></p>
                <p>Quantidade: {qtd}</p>
                <p></p>
                <p>Preço: R${price}</p>
                <p>Total: R${total}</p>
                <p></p>
            </div>
            </div>
    );
}

export default OrderData;