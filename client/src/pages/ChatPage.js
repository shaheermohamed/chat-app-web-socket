import React, { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/chatProvider";
import { Box, Spinner, Text } from "@chakra-ui/react";
const SideDrawer = lazy(() => import("../components/Containers/SideDrawer"));
const MyChats = lazy(() => import("../components/Containers/MyChats"));
const ChatBox = lazy(() => import("../components/Containers/ChatBox"));
const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Suspense
        fallback={
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="100vh"
            w="100%"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Text>Loading...</Text>
          </Box>
        }
      >
        {user && <SideDrawer />}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </Suspense>
    </div>
  );
};

export default ChatPage;
