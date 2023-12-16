import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { formatDate } from '@/lib/formatDate';

export default function SearchBookings({ bookings, setSearchResults }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchValue(inputValue);

    const filteredBookings = bookings.filter((booking) => {
      const bookingName = booking.name.toLowerCase();
      const formattedDate = formatDate(booking.dateOfRequirement).toLowerCase();

      return bookingName.includes(inputValue) || formattedDate.includes(inputValue);
    });

    setSearchResults(filteredBookings);
  };

  return (
    <TextField
      label="Find a booking by name or date"
      value={searchValue}
      onChange={handleSearchChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}
