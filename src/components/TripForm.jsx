import { useForm } from "react-hook-form";

function TripForm({ onSubmit, defaultValues }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Destination"
        {...register("destination", { required: "Destination is required" })}
        className="border p-2 w-full rounded"
      />
      {errors.destination && <p className="text-red-500">{errors.destination.message}</p>}

      <input
        type="date"
        {...register("startDate", { required: true })}
        className="border p-2 w-full rounded"
      />
      <input
        type="date"
        {...register("endDate", { required: true })}
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Price"
        {...register("price", { required: true, min: 1 })}
        className="border p-2 w-full rounded"
      />
      <select {...register("status", { required: true })} className="border p-2 w-full rounded">
        <option value="PLANNED">Planned</option>
        <option value="ONGOING">Ongoing</option>
        <option value="COMPLETED">Completed</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}

export default TripForm;
