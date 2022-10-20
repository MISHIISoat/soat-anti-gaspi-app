import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, Button } from "../../../../components";
import { Offer } from "../../../../services/models/offer";
import "./index.css";

type OfferItemProps = {
  offer: Offer;
};

const OfferItem = ({ offer }: OfferItemProps) => {
  const navigate = useNavigate();

  const navigateToOfferPage = (offerId: string) => {
    navigate(`/contact/${offerId}`);
  };

  return (
    <>
      <Card data-testid="offer-item">
        <CardHeader>{offer.title}</CardHeader>
        <CardBody className="offer-item-body">
          <div>{offer.description}</div>
          <div>
            <div>{offer.address.city}</div>
            <div>{offer.address.zipcode}</div>
          </div>

          <div className="availability-date-section">
            <div>
              Disponible jusqu'au
              <span> {offer.expirationDate?.toLocaleDateString()} </span>
            </div>
          </div>

          <div>
            <Button onClick={() => navigateToOfferPage(offer.offerId)}>
              Contacter
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default OfferItem;
