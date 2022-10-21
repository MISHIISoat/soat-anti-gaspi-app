import { useCallback, useEffect, useState } from "react";
import OffersService from "../../services/OffersService";
import { Offer } from "../../services/models/offer/Offer";
import OfferList from "./OfferList";
import "./index.css"
import SortByProperty from "./SortByProperty/SortByProperty";
import PageNumberAndSize from "./PageNumberAndSize/PageNumberAndSize";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("desc");
  const [maxNumberPage, setMaxNumberPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const getAllOffers = useCallback(() => {
    OffersService.getAllOffers({
      pageNumber,
      pageSize,
      sortBy,
      sortOrder,
    }).then((response) => {
      setOffers(response.elements);
      setMaxNumberPage(response.pageCount);
      setIsLoading(false);
    });
  }, [sortBy, pageNumber, pageSize]);

  useEffect(() => {
    getAllOffers();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    getAllOffers();
  }, [sortBy, pageNumber, pageSize]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      {offers && (
        <>
          {offers.length > 0 &&
            <SortByProperty isLoading={isLoading} setSortBy={setSortBy} sortBy={sortBy} />
          }
          <OfferList offers={offers} />
          {
            offers.length > 0 &&
            <PageNumberAndSize
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              pageSize={pageSize}
              setPageSize={setPageSize}
              maxNumberPage={maxNumberPage}
            />
          }
        </>
      )}
    </div>
  );
};

export default Offers;
