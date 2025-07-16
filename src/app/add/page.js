"use client"; // only if in /app dir

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function AddPlayerForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Name: "",
    Played: "",
    Overs: "",
    Wickets: "",
    Runs: "",
    Extras: "",
    Scored: "",
  });


  // Auth Check
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        alert("You must be logged in to add a player.");
        router.push("/login");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customID = `${formData.Name.trim().replace(/\s+/g, "-")}-${formData.Played}`;
  
    const numericData = {
      name: formData.Name.trim(),
      played: parseInt(formData.Played),
      overs: parseFloat(formData.Overs),
      wickets: parseInt(formData.Wickets),
      runs: parseInt(formData.Runs),
      extras: parseInt(formData.Extras),
      scored: parseInt(formData.Scored),
    };

    try {
      const playerRef = doc(db, "players", customID);
      await setDoc(playerRef, numericData);
      alert("Player added!");
      setFormData({ Name: "", Played: "", Overs: "", Wickets: "", Runs: "", Extras: "", Scored: ""});
    } catch (error) {
      console.error(error);
      alert("Error adding player. Please try again.");
    } 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label className="block font-bold">{key}</label>
          <input
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full bg-yellow-50 border p-2 rounded"
          />
        </div>
      ))}
      <button className="bg-white text-black font-semibold hover:text-white hover:bg-purple-600 px-4 py-2 rounded" type="submit">
        Add Player
      </button>
    </form>
  );
}
