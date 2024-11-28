import React, { useEffect, useState } from "react";
import tmdbApi from "../../../shared/api/tmdb";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    tmdbApi
      .get("/person/popular")
      .then((response) => setPeople(response.data.results))
      .catch((error) => console.error("error loading people", error));
  }, []);

  return (
    <div>
      <h1>Popular People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeoplePage;
