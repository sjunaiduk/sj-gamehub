import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";


const SortOrder = () => {
  const sortOrders = [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-rating",
      label: "Rating",
    },
    {
      value: "-added",
      label: "Recently Added",
    },
    {
      value: "-created",
      label: "Recently Created",
    },
    {
      value: "-updated",
      label: "Recently Updated",
    },
    {
      value: "-metacritic",
      label: "Metacritic",
    },
  ];

  const store = useGameQueryStore();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {sortOrders.find((sortOrder) => sortOrder.value === store.gameQuery.sortOrder)
          ?.label || "Recently Added"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => {
              store.setSortOrder(sortOrder.value)
              
            }}
            key={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrder;
