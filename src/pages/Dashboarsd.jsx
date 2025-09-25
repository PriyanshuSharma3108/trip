import { useState } from "react";
import tripsData from "../data/trips";
import TripList from "../components/TripList";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";

function Dashboard() {
  const [trips, setTrips] = useState(tripsData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const tripsPerPage = 5;

  // Filtering
  const filteredTrips = trips.filter(
    (trip) =>
      trip.destination.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? trip.status === statusFilter : true)
  );

  // Pagination
  const indexOfLast = page * tripsPerPage;
  const indexOfFirst = indexOfLast - tripsPerPage;
  const currentTrips = filteredTrips.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <TripList trips={currentTrips} setTrips={setTrips} />
      <Pagination
        totalTrips={filteredTrips.length}
        tripsPerPage={tripsPerPage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default Dashboard;
