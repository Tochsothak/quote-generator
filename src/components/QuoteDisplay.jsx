import { useSelector, useDispatch } from "react-redux";
import {fetchQuote, addFavorite, clearSaveMessage} from "../store/quoteSlice";
import { useEffect } from "react";
import Button from "../components/Button";

const QuoteDisplay = () => {
    const dispatch = useDispatch();
    const { currentQuote, loading, error , saveMessage} = useSelector((state) => state.quote);

    // Clear success message after 3 seconds
    useEffect (() => {
        if (saveMessage){
            const timer = setTimeout(() => {
                dispatch(clearSaveMessage());
            }, 3000);
            return () => clearTimeout(timer); 
        }
    })

    return (
        <div className="text-center p-4">
          <Button onClick={() => dispatch(fetchQuote())} text={"Generate Quote"} className={"bg-green-500"}/>
    
          {loading &&  <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-10 w-10 border-5 border-blue-500 border-dotted"></div>
        </div>}
          {error && <p className="text-red-500 mt-4">{error}</p>}

          { saveMessage && (
            <p className="text-green-500 mt-4 bg-green p-2 rounded">{saveMessage}</p>
          )}
          
          {currentQuote && !error &&(
            <div className="mt-4 p-4 backdrop-filter backdrop-blur-lg border rounded-lg">
              <p className="text-lg font-semibold text-black p-4">{currentQuote.advice}</p>
            
              <Button onClick={() => dispatch(addFavorite(currentQuote))} text={"Add to Favorite"} />
            </div>
          )}
        </div>
      );
}

export default QuoteDisplay;