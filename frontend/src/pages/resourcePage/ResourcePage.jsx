import React from "react";

const ResourcePage = () => {
  const blogData = [
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 1, 2020",
      views: "2.1K views",
      imgSrc: "https://picsum.photos/200",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 2, 2020",
      views: "2.2K views",
      imgSrc: "https://picsum.photos/200",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 3, 2020",
      views: "2.3K views",
      imgSrc: "https://picsum.photos/200",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 4, 2020",
      views: "2.4K views",
      imgSrc: "https://picsum.photos/200",
      category: "Convenire",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl text-center">
        Resources...
      </h1>
      <article className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold"> lorem ipsum</h2>
            <p className="text-sm mb-16">lomrem ipsum lorem</p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <article
                key={index}
                className="flex flex-col border rounded-md mt-8"
              >
                <a rel="noopener noreferrer" href="#" aria-label={blog.title}>
                  <img
                    alt="/"
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={blog.imgSrc}
                  />
                </a>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <div className="flex justify-between mt-4">
                    <p className="text-sm">{blog.date}</p>
                    <p className="text-sm">{blog.views}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ResourcePage;
