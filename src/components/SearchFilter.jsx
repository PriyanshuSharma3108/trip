function SearchFilter({ search, setSearch, statusFilter, setStatusFilter }) {
  return (
    <div className="flex justify-between mb-4">
      <input
        type="text"
        placeholder="Search by destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-1/2"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All</option>
        <option value="PLANNED">Planned</option>
        <option value="ONGOING">Ongoing</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  );
}

export default SearchFilter;
