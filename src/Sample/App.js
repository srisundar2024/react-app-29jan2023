import React, { useState } from 'react';
import './style.css';
import './alert.js';

const App = () => {
  const [tourists, setTourists] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleSave = async (name, email, location) => {
    try {
      // Perform API call to create a tourist entity
      // Use the provided API endpoint and pass the necessary parameters in the request body
      const response = await fetch('http://restapi.adequateshop.com/api/Tourist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourist_name: name,
          tourist_email: email,
          tourist_location: location,
        }),
      });

      const data = await response.json();

      // Check if the API call was successful
      if (response.ok) {
        setTourists(prevTourists => [...prevTourists, data]);
        closeDialog();
        cuteToast({ type: 'success', title: 'Success', message: 'Tourist created successfully' });
      } else {
        // Handle error response from the API
        cuteToast({ type: 'error', title: 'Error', message: data.Message });
      }
    } catch (error) {
      console.error('Error creating tourist:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={openDialog}>Add Tourist</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile Picture</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {tourists.map(tourist => (
            <tr key={tourist.id}>
              <td>{tourist.tourist_name}</td>
              <td>{tourist.tourist_email}</td>
              <td><img src={tourist.tourist_profilepicture} alt="Profile" /></td>
              <td>{tourist.tourist_location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDialog && (
        <TouristDialog onSave={handleSave} onClose={closeDialog} />
      )}
    </div>
  );
};

const TouristDialog = ({ onSave, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = () => {
    onSave(name, email, location);
  };

  return (
    <div className="dialog">
      <h2>Add Tourist</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Location:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default App;
