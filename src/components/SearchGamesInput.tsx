import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";


const SearchGamesInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const store = useGameQueryStore();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        store.setSearchText(ref.current?.value || "");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          variant="filled"
          borderRadius={20}
          placeholder="Search Games"
        />
      </InputGroup>
    </form>
  );
};

export default SearchGamesInput;
