import { Box, Divider, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as API from "../services/launches";

function LaunchDetail() {
  const [launch, setLauch] = useState({});

  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then(setLauch)
      .catch((err) => console.log(err));
  }, [launchId]);

  console.log(launch);

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius={"lg"}>
      {Object.keys(launch).length === 0 ? (
        <div>Loading</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="xl">
              Mission <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>
          <Box>
            Rocket:{" "}
            <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
              {launch.rocket.rocket_name}
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}

export default LaunchDetail;
