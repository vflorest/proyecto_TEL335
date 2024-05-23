import * as React from "react";

export default function Home(){
    return(
        <div className="flex justify-center items-center min-h-screen bg-violet-500 ">
            <div className="flex-1 max-w-5xl p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full">
                    <button className="bg-white hover:bg-gray-200  font-bold py-4 px-6 rounded-lg w-full border border-white">Registrar objeto perdido</button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-6 rounded-lg w-full border border-white">Lista de objetos perdidos</button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-6 rounded-lg w-full border border-white">Lista de solicitudes</button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-6 rounded-lg w-full border border-white">Solicitud de objeto perdido</button>
                </div>
            </div>
        </div>
    )


}



