import QRCodeImage from "../../components/QRCode/QRCode";
import OrderData from "../../components/FormularioPagamento/DadosPedido";
import CustomerData from "../../components/FormularioPagamento/DadosLogin";
import "./Checkout.css"
import { Accordion } from "react-bootstrap";

const Pagamento = () => {
  return (
    <>

      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="title">Meus dados</Accordion.Header>
          <Accordion.Body className="body">
            <CustomerData
              name="Amanda Marcos"
              endereco="Avenida Expedicionário José Pedro Coelho, 1826 
                          - Complemento: APTO 301"
              telefone="(48) 98805-1651" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="title">Itens do pedido</Accordion.Header>
          <Accordion.Body className="body">
            <OrderData
              lanche="X-tudo"
              price="15,90"
              total={15.95}
              qtd={1}
              image="https://pocket.devrocket.com.br/uploads/cardapios/imagens/8-7a3bb6679b0c059a81092110952acd9921dc0677.png" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="title">Pagamento</Accordion.Header>
          <Accordion.Body className="body">
            <QRCodeImage value_={80}
              format='IMAGE'
              expirationSeconds={3600}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  )
}

export default Pagamento;
