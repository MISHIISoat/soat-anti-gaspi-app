import { useMemo } from "react";
import { Button } from "../../../components";
import "./PageNumberAndSize.css";

type PageNumberAndSizeProps = {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    pageSize: number;
    setPageSize: React.Dispatch<React.SetStateAction<number>>
    maxNumberPage: number;
}

const PageNumberAndSize = ({
    maxNumberPage,
    pageNumber,
    setPageNumber,
    pageSize,
    setPageSize
}: PageNumberAndSizeProps) => {
    const labelPageNumber = useMemo(() => pageNumber + 1, [pageNumber]);

    return (<div className="page-number-size">
        <div>
            <label className="label-page-number">
                Page
                <input
                    type="number"
                    value={labelPageNumber}
                    onChange={e => setPageNumber(parseInt(e.target.value) - 1)}
                    min={1}
                    max={maxNumberPage}
                />
                jusqu'à {maxNumberPage}
            </label>
        </div>
        <div className="buttons-container">
            <Button className="previous-button" disabled={pageNumber <= 0} onClick={() => setPageNumber(curPage => curPage - 1)}>Précédent</Button>
            <Button className="next-button" disabled={pageNumber >= maxNumberPage - 1} onClick={() => setPageNumber(curPage => curPage + 1)}>Suivant</Button>
        </div>
        <div>
            <label className="label-page-number">
                Nombre d'annonces par page
                <input
                    type="number"
                    value={pageSize}
                    onChange={e => setPageSize(parseInt(e.target.value))}
                    min={1}
                    max={10}
                />
            </label>
        </div>
    </div>
    )
}

export default PageNumberAndSize;