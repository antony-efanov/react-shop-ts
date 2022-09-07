import { FC } from "react";
import { ICatalogProps } from "./types";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Catalog: FC<ICatalogProps> = ({ searchValue, setSearchValue }) => {
  const setSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="catalog">
      <h1 className="catalog__title">
        {searchValue ? `Пошук по запиту "${searchValue}"` : "Каталог товарів"}
      </h1>
      <div className="catalog__searchbox">
        {!searchValue && <SearchIcon className="catalog__searchbox--icon" />}
        <input
          onChange={setSearchInput}
          value={searchValue}
          placeholder="Пошук..."
          className="catalog__searchbox--field"
          type="search"
        />
      </div>
    </div>
  );
};

export default Catalog;
