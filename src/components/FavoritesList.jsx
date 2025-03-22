import Button from "./Button";

const FavoritesList = ({ favorites, onRemove }) => {
  return (
    <div className="p-4">
      {favorites.length === 0 ? (
        <p className="text-gray-300">No saved advice yet.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((quote) => (
            <li key={quote.id} className="p-4 border rounded-lg bg-white/20 backdrop-blur-md flex-col justify-between items-center ">
              <p className="text-lg text-white p-4">"{quote.advice}"</p>
              <Button text="Remove" onClick={() => onRemove(quote.id)} color="bg-red-500" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
