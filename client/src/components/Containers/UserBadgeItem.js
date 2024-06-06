import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="orange"
      color='white'
      cursor="pointer"
      onClick={handleFunction}
      display='flex'
      gap={2}
      alignItems='center'
    >
      {user.name}
      <CloseIcon/>
    </Box>
  );
};

export default UserBadgeItem;
