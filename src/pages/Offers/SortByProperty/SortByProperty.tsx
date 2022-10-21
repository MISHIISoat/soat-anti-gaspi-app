import { DropDown } from "../../../components";

type SortByPropertyProps = {
    isLoading: boolean;
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>
}

const SortByProperty = ({ isLoading, sortBy, setSortBy }: SortByPropertyProps) => {
    return (
        <div className="sort-by-filter">
            <div>Filtrer par :</div>
            <DropDown
                disabled={isLoading}
                className="drop-down"
                value={sortBy}
                onChange={(e) => {
                    setSortBy(e.target.value);
                }}
                items={[
                    {
                        label: "Titre",
                        value: "title",
                    },
                    {
                        label: "Identifiant",
                        value: "offerId",
                    },
                    {
                        label: "Date d'expiration",
                        value: "expirationDate",
                    },
                ]}
            />
        </div>
    )
}

export default SortByProperty;