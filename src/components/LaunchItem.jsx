import React from "react";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Button } from "@chakra-ui/react";

function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex>
        <Text fontSize="xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex alignItems={"center"}>
        <HiCalendar />
        <Text fontSize={"sm"} ml={2}>
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button mt={2} colorScheme={"purple"}>
          More Details
        </Button>
      </Link>
    </Box>
  );
}

export default LaunchItem;
