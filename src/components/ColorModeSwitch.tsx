import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
