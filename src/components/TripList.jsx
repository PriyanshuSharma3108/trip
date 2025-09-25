import { Link } from "react-router-dom";

function TripList({ trips, setTrips }) {
  const handleDelete = (id) => {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };

  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Destination</th>
          <th className="border p-2">Start Date</th>
          <th className="border p-2">End Date</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip) => (
          <tr key={trip.id}>
            <td className="border p-2">{trip.destination}</td>
            <td className="border p-2">{trip.startDate}</td>
            <td className="border p-2">{trip.endDate}</td>
            <td className="border p-2">${trip.price}</td>
            <td className="border p-2">{trip.status}</td>
            <td className="border p-2 space-x-2">
              <Link
                to={`/edit/${trip.id}`}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(trip.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TripList;
