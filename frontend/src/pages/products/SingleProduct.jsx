import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();

  const extractTotalCookTime = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };

  let prepTime = extractTotalCookTime(item?.more.prep_time);
  let cookTime = extractTotalCookTime(item?.more.cook_time);

  const totalTime = prepTime + cookTime;

  // Função para dividir a string de instruções pelos números
  const splitInstructions = (instructions) => {
    return instructions.split(/(?:[0-9]+\. )/).filter(Boolean);
  };

  const instructions = splitInstructions(item?.instructions);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              alt=""
              className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
            />
          </picture>
          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>
            {/*item tags array*/}
            <div className="flex flex-wrap mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary text-secondary text-sm px-2 py-1 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h2 className="text-xl font-semibold ml-2">Preparation Time</h2>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-300">
                <li className="pl-3">
                  <p>
                    <span>Total:</span>
                    <span> {totalTime + " minutes"}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Preparation:</span>
                    <span> {item?.more.prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cooking:</span>
                    <span> {item?.more.cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>

            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Ingredients</h3>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-blue-300 marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span> {ingredient?.name}</span>
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/*instructions*/}
            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Instructions</h3>
              <ol className="list-decimal mt-3 ml-8 text-lg marker:text-green-300 marker:align-inside">
                {instructions.map((instruction, index) => (
                  <li key={index} className="pl-4 mt-2">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
