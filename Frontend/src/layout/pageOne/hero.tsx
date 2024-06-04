import React from "react";

export interface HeroProps {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export const Hero: React.FC<HeroProps> = ({
  categories,
  created_at,
  icon_url,
  updated_at,
  url,
  value,
}) => {
  return (
    <div>
      <img src={icon_url} alt="Hero" />
      <div>
        <h2>Chuck Norris Joke</h2>
        <p>{value}</p>
        <p>
          <strong>Categories:</strong> {categories.length ? categories.join(", ") : "None"}
        </p>
        <p>
          <strong>Created At:</strong> {new Date(created_at).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {new Date(updated_at).toLocaleString()}
        </p>
        <a href={url} target="_blank">
          View on API
        </a>
      </div>
    </div>
  );
};
