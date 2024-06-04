import axios from "axios";
import React, { useEffect, useState } from "react";
import { Hero, HeroProps } from "./hero";

const apiUrl = "https://api.chucknorris.io/jokes/random";

const PageOne: React.FC = () => {
  const [dataState, setDataState] = useState<HeroProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setDataState(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`${error}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!dataState) {
    return null;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Hero {...dataState} />
    </div>
  );
};

export default PageOne;
