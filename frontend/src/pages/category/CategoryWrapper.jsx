import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };

  return (
    <div>
      <Link to={href} className="rounded-full">
        <div
          className="uppercase px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <CategoryItem
        name="entrees"
        href="/categorries/entrees"
        backgroundColor="#f0f5c4"
        color="#59871f"
      />
      <CategoryItem
        name="breakfast"
        href="/categorries/breakfast"
        backgroundColor="#efedfa"
        color="#3c3a8f"
      />
      <CategoryItem
        name="lunch"
        href="/categorries/lunch"
        backgroundColor="#e5f7f3"
        color="#1f8787"
      />
      <CategoryItem
        name="desserts"
        href="/categorries/desserts"
        backgroundColor="#e8f5fa"
        color="#397a9e"
      />
      <CategoryItem
        name="sides"
        href="/categorries/sides"
        backgroundColor="#feefc9"
        color="#d16400"
      />
      <CategoryItem
        name="drinks"
        href="/categorries/drinks"
        backgroundColor="#ffeae3"
        color="#f0493e"
      />
    </div>
  );
}

function CategoryWrapper(props) {
  return (
    <div>
      <CategoryList />
    </div>
  );
}

export default CategoryWrapper;
