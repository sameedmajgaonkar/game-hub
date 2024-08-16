import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>{colorMode === "dark" ? "Light" : "Dark"} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
