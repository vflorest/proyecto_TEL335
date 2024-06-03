
import  {Link} from 'react-router-dom'
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
              // Optionally set an error state here
              setIsLoading(false);
            }
    };
    fetchItems();
    }, []);

    const updateItem = async (id) => {
        setUpdatingItem(id);
        // Call your update endpoint here
        // After the update is done, set updatingItem back to null
        setUpdatingItem(null);
      };
    
      const deleteItem = async (id) => {
        try {
            // Call your delete endpoint here
            await axios.delete(`http://localhost:5000/api/objects/${id}`);
            // After the delete is done, set deletingItem back to null
            setDeletingItem(null);
            // Remove the deleted item from the items array
            setItems(items.filter(item => item.id !== id));
          } catch (error) {
            console.error('Error deleting item: ', error);
            // Optionally set an error state here
            setDeletingItem(null);
          }
      };



    return (
        <div div className="flex flex-col min-h-screen">
            <div className="flex-grow">
            <header className="bg-gray-light text-white py-4 px-0">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Lost&Found</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#" className="hover:underline" prefetch={false}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline" prefetch={false}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {isLoading ? (
            <div>Loading...</div>
            ) : items.length > 0 ? (
                <div className="p-6 sm:p-10 max-w-4xl mx-auto w-full">
                <h1 className="text-3xl font-bold mb-6">Registro de objetos</h1>
                {items.map((item) => (
                <div className="grid gap-6">
                    <div className="grid grid-cols-[100px_1fr_auto] items-center gap-4 border border-gray-200 rounded p-4 justify-between">
                    <div className="font-medium">{item.objectName}</div>
                    <div>
                        <p>Encontrado en {item.foundPlace}</p>
                        <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                    </div>
                    <div className="flex justify-end space-x-1 ">
                        <button onClick={() => updateItem(item.id)}>Actualizar</button>
                        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <div>No items to display</div>
            )}
            </div>
            <footer className="bg-gray-900 text-white py-4 px-6">
                <div className="container mx-auto text-center">
                    <p> 2023 Lost&Found. All rights reserved.</p>
                </div>
            </footer>   
        </div>
    )
}