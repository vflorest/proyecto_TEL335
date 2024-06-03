import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RegisterObjectForm() {
  const [objectName, setObjectName] = useState('');
  const [foundPlace, setFoundPlace] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('objectName', objectName);
    formData.append('foundPlace', foundPlace);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const uploadResponse = await axios.post('localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const imageUrl = uploadResponse.data.url;
      const objectData = {
        objectName,
        foundPlace,
        date,
        description,
        imageUrl,
      };
      const response = await axios.post('localhost:5000/api/objects', objectData);
      console.log(response.data);
    } catch (error) {
      // Handle error
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
      <header className="bg-gray-light text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lost&Found</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="./admin" className="hover:underline" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="./admin" className="hover:underline" prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex-col min-h-screen bg-gray-50 space-y-4  w-1/2">
        <label className="block">
          Object Name:
          <input type="text" value={objectName} onChange={(e) => setObjectName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block">
          Found Place:
          <input type="text" value={foundPlace} onChange={(e) => setFoundPlace(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
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
  <footer className="bg-gray-900 text-white py-4 px-6">
                <div className="container mx-auto text-center">
                    <p> 2023 Lost&Found. All rights reserved.</p>
                </div>
            </footer>   
    </div>
    
   
  );  
}