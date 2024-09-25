'use client';

import { useRouter } from "next/navigation";
import React from "react";

function NewPage() {

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault()
    
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">Título de la tarea</label>
        <input
          type="text"
          id="title"
          placeholder="Título"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />
        <label htmlFor="description" className="font-bold text-sm">Descripción de la tarea</label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
