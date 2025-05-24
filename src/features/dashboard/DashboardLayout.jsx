import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoadingBookings } = useRecentBookings();
  const { stays, confirmedStays, isLoadingStays } = useRecentStays();    

  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  console.log(bookings);
  console.log(stays);
  console.log(confirmedStays);

  return <StyledDashboardLayout>
    <div>Statistics</div>
    <div>todays activity</div>
    <div>stay chart</div>
    <div>sales chart</div>
  </StyledDashboardLayout>;
}

export default DashboardLayout;
