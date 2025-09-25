import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import trips from "../data/trips";

function AddTrip() {
  const navigate = useNavigate();

  const handleAdd = (data) => {
    data.id = trips.length + 1;
    trips.push(data);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Trip</h2>
      <TripForm onSubmit={handleAdd} />
    </div>
  );
}

export default AddTrip;
