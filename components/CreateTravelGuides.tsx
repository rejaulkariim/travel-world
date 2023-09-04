"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useState } from "react";

const CreateTravelGuides = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    imageUrl: "",
  });

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/travel-guides", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      // Check if the response is successful
      if (response.status === 201) {
        alert("data posted");
      } else {
        // Handle errors if necessary
      }
    } catch (error) {
      console.error("Error creating travel guide:", error);
      // Handle errors if necessary
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Dialog>
      <DialogTrigger>Create a Travel Guide</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a Travel Guide</DialogTitle>
          <DialogDescription>
            <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="subtitle"
                  >
                    Subtitle:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="imageUrl"
                  >
                    Image URL:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:bg-blue-600"
                    type="submit"
                  >
                    Create Travel Guide
                  </button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTravelGuides;
