import React from 'react';

function Article({ date, title, image, text }) {
  return (
    <article>
      <div className="date">{date}</div>
      <h2>{title}</h2>
      <img src={image} alt="Fashion picture" />
      <p>{text}</p>
      <a href="#">Continues...</a>
    </article>
  );
}

export default Article;