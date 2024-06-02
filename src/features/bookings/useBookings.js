import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : // : {
        //     field: "totalPrice",
        //     value: 5000,
        //     methodName: "gte",
        //   };
        {
          field: "status",
          value: filteredValue,
        };

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryFn: () => getBookings(filter, sortBy),
    queryKey: ["bookings", filter, sortBy],
  });

  return { isLoading, bookings, error };
}
