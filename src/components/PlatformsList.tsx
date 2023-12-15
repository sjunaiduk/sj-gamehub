import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../models/Platform";

interface Props {
  selectedPlatform: number | null;
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformsList = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const curPlatform = data?.results.find(
    (platform) => platform.id == selectedPlatform
  );

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {curPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform, index) => {
          return (
            <MenuItem onClick={() => onSelectPlatform(platform)} key={index}>
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformsList;
