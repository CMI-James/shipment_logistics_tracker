// src/UserPage.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserPage = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [cargo, setCargo] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const q = query(collection(db, 'cargos'), where('code', '==', trackingCode));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setCargo(querySnapshot.docs[0].data());
      } else {
        toast.error('Code not found');
        setCargo(null);
      }
    } catch (error) {
      toast.error('Error fetching cargo: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Track Your Cargo</h2>
      <form onSubmit={handleSearch}>
        <label>
          Tracking Code:
          <input
            type="text"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {cargo && (
        <div>
          <h3>Cargo Details</h3>
          <p><strong>Receiver Name:</strong> {cargo.receiverName}</p>
          <p><strong>Receiver Phone:</strong> {cargo.receiverPhone}</p>
          <p><strong>Location History:</strong></p>
          {cargo.locations.map((location, index) => (
            <div key={index}>{location}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPage;
