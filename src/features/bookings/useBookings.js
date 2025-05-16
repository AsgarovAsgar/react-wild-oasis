import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();
  //FILTER
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all" 
    ? null 
    : { field: "totalPrice", value: 5000, method: "gte" };



  const { isLoading, data: bookings } = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getBookings({ filter })
  })

  return { isLoading, bookings }
}