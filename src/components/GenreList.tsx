import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  //   const data = [
  //     { name: "Action", genre: "Action" },
  //     { name: "Adventure", genre: "Adventure" },
  //     { name: "RPG", genre: "Role-playing" },
  //     { name: "FPS", genre: "First-person shooter" },
  //     { name: "Simulation", genre: "Simulation" },
  //     // Add more genres as needed
  //   ];
  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
