import React, { useEffect } from "react";
import axios from "axios";
import CategoryWrapper from "../category/CategoryWrapper.jsx";
import Card from "../../components/Card.jsx";

const Recepies = () => {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const getLatestItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/all-items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching latest recipes: ", error);
      }
    };
    getLatestItems();
  }, []);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl text-center">
        Our recipes...
      </h1>
      <CategoryWrapper />

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Recepies;
