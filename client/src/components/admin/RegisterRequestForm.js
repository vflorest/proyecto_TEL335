import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterObjectForm() {
  const [objectName, setObjectName] = useState('');
  const [lostPlace, setLostPlace] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const uploadResponse = await axios.post('http://localhost:5000/api/objects/uploadRequestImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const imageName= uploadResponse.data.filename;
      const requestData = {
        objectName,
        lostPlace,
        date,
        description,
        imageName,
      };
      const response = await axios.post('http://localhost:5000/api/objects', requestData);
      if(response.status === 200){ 
        alert("Objeto creado correctamente");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="bg-green-500 py-24 sm:py-32 ">
      <div className="flex-grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-4">Registrar solicitud</h1>
      <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex-col min-h-screen bg-gray-50 space-y-4 w-full">
        <label className="block">
          Object Name:
          <input type="text" value={objectName} onChange={(e) => setObjectName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          Found Place:
          <input type="text" value={lostPlace} onChange={(e) => setLostPlace(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          Image:
          <input type="file" onChange={handleImageChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md bg-gray-light">Submit</button>
      </form>
      </div>
  </div>
  </div>
  </div>
    
   
  );  
}