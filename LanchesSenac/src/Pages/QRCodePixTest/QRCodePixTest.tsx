import QRCodeImage from "../../components/QRCode/QRCode";

const QRCodePage = () => {
    return (
      <>
        <QRCodeImage value_= {80} 
          format= 'IMAGE' 
          expirationSeconds= {3600}
          />
      </>
    );
  };
  export default QRCodePage;
  