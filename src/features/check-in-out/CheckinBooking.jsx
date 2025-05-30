import { useState, useEffect } from "react";
import styled from "styled-components";

import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/useBooking";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./useCheckin";
import useSettings from "../settings/useSettings";

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const {checkin, isCheckingIn} = useCheckin();
  const {booking, isLoading} = useBooking();
  const {settings, isLoading: isLoadingSettings} = useSettings();
  const [confirmPaid, setConfirmPaid] = useState(false);
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const [addBreakfast, setAddBreakfast] = useState(false);

  if(isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice = settings?.breakfastPrice * numGuests * numNights;
  const displayTotalPrice = !addBreakfast ? formatCurrency(totalPrice) : `${formatCurrency(totalPrice + optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`;

  function handleCheckin() {
    if(!confirmPaid) return;
    if(addBreakfast) {
      checkin({bookingId, breakfast: {
        hasBreakfast: true,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: totalPrice + optionalBreakfastPrice,
      }});
    } else {
      checkin({bookingId, breakfast: {}});
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox 
            id="breakfast" 
            checked={addBreakfast} 
            onChange={() => {
              setAddBreakfast((add) => !add)
              setConfirmPaid(false);
            }} 
          >
            Want to add a breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox 
          id="confirm" 
          checked={confirmPaid} 
          onChange={() => setConfirmPaid((confirm) => !confirm)} 
          disabled={booking.isPaid || isCheckingIn}
        >
          I confirm that {guests.fullName} has paid the total amount of {displayTotalPrice}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
