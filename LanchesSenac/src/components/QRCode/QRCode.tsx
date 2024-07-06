import { useEffect, useState } from "react";
import { QRPixCode } from "../../services/ClienteAsaas";
import { RequestQRCode } from "../../interfaces/RequestQRCode";
import React from "react";
import { Button } from "react-bootstrap";
import "./QRCode.css"

const QRCodeImage: React.FC<RequestQRCode> = ({value_, format, expirationSeconds}) => {
  const [qrCodeData, setQRCodeData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

const requestData: RequestQRCode = {
    value_: value_,
    format: format,
    expirationSeconds: expirationSeconds    
}
  let triggerCount: number = 0;
  useEffect(() => {
    if(triggerCount==0){
      triggerCount++;
      return;
      
    }else if(triggerCount ==1){
      QRPixCode(requestData)
      .then((response) => {
        console.log(response);
        setQRCodeData(response);
        setLoading(false);
        triggerCount++;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }
    
  }, [qrCodeData]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;
  const qrCodeImageDecoded = "data:image/png;base64," + qrCodeData.data.encodedImage;
 
  return (
    <>
      <div className="conteiner">
      <h1>Código QRCode para pagamento via pix</h1>
      <img src={qrCodeImageDecoded} alt="Base64 Image" />
      <Button type="button" className="btn-pag">Finalizar Pedido</Button>
    </div>
    </>
  );
};

export default QRCodeImage;
