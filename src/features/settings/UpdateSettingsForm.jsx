import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';

import useSettings from './useSettings';
import useUpdateSetting from './useUpdateSetting';

function UpdateSettingsForm() {
  const { isLoading, settings: { maxBookingLength, maxGuestsPerBooking, breakfastPrice } = {} } = useSettings()
  const { isUpdating, updateSetting } = useUpdateSetting()

  if (isLoading) return <Spinner />

  function handleUpdate(e, field) {
    const { value } = e.target
    if (!value) return
    updateSetting({ [field]: value })
  }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input 
          id='min-nights'
          type='number' 
          defaultValue={maxBookingLength} 
          onBlur={e => handleUpdate(e, 'maxBookingLength')} 
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input 
          id='max-nights'
          type='number' 
          defaultValue={maxBookingLength} 
          onBlur={e => handleUpdate(e, 'maxBookingLength')} 
          disabled={isUpdating}
      />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input 
          id='max-guests'
          type='number' 
          defaultValue={maxGuestsPerBooking} 
          onBlur={e => handleUpdate(e, 'maxGuestsPerBooking')} 
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input 
          id='breakfast-price' 
          type='number' 
          defaultValue={breakfastPrice} 
          onBlur={e => handleUpdate(e, 'breakfastPrice')} 
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
