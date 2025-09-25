import { useParams, useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import trips from "../data/trips";

function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((t) => t.id === parseInt(id));

  const handleEdit = (data) => {
    const index = trips.findIndex((t) => t.id === parseInt(id));
    trips[index] = { ...data, id: parseInt(id) };
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Trip</h2>
      <TripForm onSubmit={handleEdit} defaultValues={trip} />
    </div>
  );
}

export default EditTrip;
