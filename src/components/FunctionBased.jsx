         import React, { useEffect, useState } from 'react';

const NewsHeadlines = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=b5649206a317409e894f4157aa4532e5'
        );
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          console.error('Error fetching news:', data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2 className="my-4 text-center api">Top US Headlines</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-60">
              {article.urlToImage && (
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              )}
              <div className="card-body-2 api">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description || 'No description available.'}</p>
              </div>
              <div className="card-footer">
                <a
                  href={article.url}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"                 
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHeadlines;
   