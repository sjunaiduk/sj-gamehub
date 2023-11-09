import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrderValue: string;
}
const SortOrder = ({ onSelectSortOrder, sortOrderValue }: Props) => {
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

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {sortOrders.find((sortOrder) => sortOrder.value === sortOrderValue)
          ?.label || "Recently Added"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder.value)}
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
