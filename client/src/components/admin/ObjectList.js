

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function ObjectList(){

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [updatingItem, setUpdatingItem] = useState(null);
    const [deletingItem, setDeletingItem] = useState(null);


    useEffect(() => {
        const fetchItems = async () => {
            try {
              const result = await axios('http://localhost:5000/api/objects');
              setItems(result.data);
              setIsLoading(false);
              console.log(result.data);
            } catch (error) {
              console.error('Error fetching data: ', error);
              setIsLoading(false);
            }
    };
    fetchItems();
    }, []);

    const updateItem = async (id) => {
        setUpdatingItem(id);
        setUpdatingItem(null);
      };
    
      const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/objects/${id}`);
            setDeletingItem(null);
            setItems(items.filter(item => item.id !== id));
          } catch (error) {
            console.error('Error deleting item: ', error);
            setDeletingItem(null); 
          }
      };



      return (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            {isLoading ? (
              <div>Loading...</div>
            ) : items.length > 0 ? (
              <div className="p-6 sm:p-10 max-w-4xl mx-auto w-full">
                <h1 className="text-3xl font-bold mb-6">Registro de objetos</h1>
                {items.map((item) => (
                  <div className="grid gap-6" key={item.id}>
                    {/* Modificación del grid para incluir la imagen */}
                    <div className="flex justify-between items-center gap-4 border border-gray-200 rounded p-4">
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="font-medium">{item.objectName}</div>
                          <div>
                            <p>Encontrado en {item.foundPlace}</p>
                            <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <img src={item.imageUrl} alt={item.objectName} className="h-32 w-32 object-cover rounded-md" />
                      </div>
                      <div className="flex justify-end space-x-1">
                        <button onClick={() => updateItem(item.id)}>Actualizar</button>
                        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                      </div>
                  </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      );
}