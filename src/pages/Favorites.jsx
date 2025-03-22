import { useSelector, useDispatch } from "react-redux";
import {removeFavorite } from "../store/quoteSlice";
import Button from "../components/Button";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.quote);

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Saved Quotes</h2>
      <FavoritesList favorites={favorites} onRemove={(id) => dispatch(removeFavorite(id))} />
    </div>
  );
};

export default Favorites;
