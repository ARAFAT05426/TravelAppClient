const BlogSection = () => {
  const blogArticles = [
    {
      id: 1,
      imageUrl: "https://source.unsplash.com/200x200/?travel?1",
      category: "Travel",
      title: "Adventures Around the Globe",
      date: "June 1, 2020",
      views: "2.1K views",
    },
    {
      id: 2,
      imageUrl: "https://source.unsplash.com/200x200/?travel?2",
      category: "Travel",
      title: "Discover Hidden Gems",
      date: "June 2, 2020",
      views: "2.2K views",
    },
    {
      id: 3,
      imageUrl: "https://source.unsplash.com/200x200/?travel?3",
      category: "Travel",
      title: "Exploring Cultural Wonders",
      date: "June 3, 2020",
      views: "2.3K views",
    },
    {
      id: 4,
      imageUrl: "https://source.unsplash.com/200x200/?travel?4",
      category: "Travel",
      title: "Journey into Nature's Beauty",
      date: "June 4, 2020",
      views: "2.4K views",
    },
  ];

  return (
    <section className="py-6 sm:py-12 text-gray-800">
      <div className="container px-4 mx-auto space-y-8">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold">Travel Blogs</h2>
          <p className="font-serif text-sm text-gray-600">
            Explore our latest blog posts for travel inspiration
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogArticles.map((article) => (
            <article key={article.id} className="rounded-lg overflow-hidden shadow-lg bg-card_bg border border-nav_bg">
              <a href="#" aria-label="Read more">
                <img alt="" className="object-cover w-full h-64" src={article.imageUrl} />
              </a>
              <div className="p-6">
                <a
                  href="#"
                  aria-label="Read more"
                  className="inline-block text-xs tracking-wider uppercase font-medium text-white/80 hover:text-hover_bg"
                >
                  {article.category}
                </a>
                <h3 className="mt-2 text-lg font-semibold leading-tight">
                  {article.title}
                </h3>
                <div className="flex justify-between mt-4 text-xs text-gray-600">
                  <span>{article.date}</span>
                  <span>{article.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
