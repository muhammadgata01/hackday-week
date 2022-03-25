import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="py-8">
      <div className="flex-between">
        <Link to={'/'} className="flex">
          <div className="flex-center gap-4">
            <div className="flex-center h-10 w-10 rounded-md bg-dark-500">
              E
            </div>
            Epictetus
          </div>
        </Link>
        <div className="flex-center gap-8">
          <Link to="/" className="hover:underline">
            Discover
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
