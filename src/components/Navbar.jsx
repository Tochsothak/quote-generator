import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 border-t-2 flex justify-around backdrop-filter backdrop-blur-sm z-50">
          <Link to="/" className="text-lg font-bold text-red-900">Quote Generator</Link>
          <Link to="/favorites" className="text-lg font-bold text-red-900">Favorites</Link>
        </nav>
      );
};

export default Navbar;
