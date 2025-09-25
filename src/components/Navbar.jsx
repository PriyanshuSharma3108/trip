import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Trip Manager</h1>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Trip</Link>
      </div>
    </nav>
  );
}

export default Navbar;
