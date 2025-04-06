import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const CreateTrip = () => {
  const [address, setAddress] = useState(null);

  const handleSelect = async (value) => {
    setAddress(value);
  };

  return (
    <>
      <div>
        <div>
          <h2>Tell us your travel preferences 🏕️🌴</h2>
          <p>
            Just provide some basic information, and our trip planner will
            generate a customized itinerary based on your preferences.
          </p>
        </div>
        <div>
          <h2>What is destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              address,
              onChange: setAddress,
            }}
            onSelect={handleSelect}
          />
          {address && <div>Selected Address: {address.label}</div>}
        </div>
      </div>
    </>
  );
};

export default CreateTrip;