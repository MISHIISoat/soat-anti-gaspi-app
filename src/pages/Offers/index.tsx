import { useCallback, useEffect, useState } from "react";
import OffersService from "../../services/OffersService";
import { Offer } from "../../services/models/offer/Offer";
import OfferList from "./OfferList";
import { DropDown } from "../../components";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("desc");

  const [isLoading, setIsLoading] = useState(true);

  const getAllOffers = useCallback(() => {
    OffersService.getAllOffers({
      pageNumber,
      pageSize,
      sortBy,
      sortOrder,
    }).then((response) => {
      setOffers(response.elements);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getAllOffers();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    getAllOffers();
  }, [sortBy]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      {offers && (
        <>
          <div>
            <div>Filtrer par :</div>
            <DropDown
              disabled={isLoading}
              className=".sort-by-filter"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              items={[
                {
                  label: "title",
                  value: "title",
                },
                {
                  label: "offer id",
                  value: "offerId",
                },
                {
                  label: "expirationDate",
                  value: "expirationDate",
                },
              ]}
            />
          </div>
          <OfferList offers={offers} />
        </>
      )}
    </div>
  );
};

export default Offers;
