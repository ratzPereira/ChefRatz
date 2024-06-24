import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper.jsx";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/categories/${category}`,
        );
        setItems(response.data);
      } catch (error) {
        setError(error || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryItems();
  }, [category]);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {category}
      </h1>
      <CategoryWrapper />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="bg-white md:max-w-screen-3xl mx-auto p-4 rounded relative flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="ml-4">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-neutral-300">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
