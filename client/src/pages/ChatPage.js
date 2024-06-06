import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/chatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/Containers/SideDrawer";
import MyChats from "../components/Containers/MyChats";
import ChatBox from "../components/Containers/ChatBox";
const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && (
          <MyChats fetchAgain={fetchAgain} />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
