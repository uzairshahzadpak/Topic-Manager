"use client";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function AddTopic() {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic || !description) {
      alert("Tittle And Description Are required.");
      return;

    }



    try {
      const res = await fetch('/api/topics', {
        method: "Post",
        headers: { "Content-type": "application/json" },

        body: JSON.stringify({
          title: topic,
          description: description
        })
      });
      if (res.ok) {
        router.push('/')
      } else {
        throw new Error("Failed to Create a topic ")
      }

    } catch (error) {
      console.log(error)

    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input className="border border-slate-500
  px-8 py-2 text-2xl sm:text-3xl"
        type="text"
        placeholder="Topic Title"
        value={topic} onChange={(e) => setTopic(e.target.value)} />

      <input className="border border-slate-500
  px-8 py-2 text-lg sm:text-xl"
        type="text"
        placeholder="Topic Description"
        value={description} onChange={(e) => setDescription(e.target.value)} />


      <button type="Submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit ">Add Topic</button>
    </form>


  )
}