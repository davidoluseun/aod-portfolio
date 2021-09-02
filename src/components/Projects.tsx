import * as React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  Link,
  Icon,
  useColorMode,
  VisuallyHidden,
  Button,
} from "@chakra-ui/react";
import { HiLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { getProjects } from "../services/projectService";

const Projects = () => {
  const [showMore, setShowMore] = React.useState(false);
  const { colorMode } = useColorMode();
  const allProjects = getProjects();

  const projects = !showMore ? allProjects.slice(0, 6) : allProjects;

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <Flex
      direction="column"
      align="center"
      as="section"
      py="60px"
      id="projects"
    >
      <Box>
        <Heading mb="12" textAlign="center" fontSize="40px" lineHeight="1.3">
          Projects
        </Heading>
        <List
          d="grid"
          gridGap="5"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {projects.map((project) => (
            <ListItem
              key={project.id}
              p="5"
              borderRadius="8px"
              border="1px solid rgba(0, 0, 0, 0.23)"
              borderColor={colorMode === "dark" ? "borderLight" : ""}
            >
              <LinkBox
                d="flex"
                h="100%"
                flexDir="column"
                justifyContent="space-between"
              >
                <Box>
                  <Box mb="4">
                    <Link
                      href={project.githubLink}
                      p="2"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      <VisuallyHidden>Github Repository</VisuallyHidden>
                      <Icon as={FiGithub} boxSize="5" />
                    </Link>
                    <Link
                      href={project.siteLink}
                      p="2"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      <VisuallyHidden>Website</VisuallyHidden>
                      <Icon as={HiLink} boxSize="5" />
                    </Link>
                  </Box>
                  <Heading
                    as="h3"
                    mb="4"
                    fontSize="18px"
                    lineHeight="1.3"
                    fontWeight="semibold"
                  >
                    <LinkOverlay
                      href={project.siteLink}
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </LinkOverlay>
                  </Heading>
                  <Text fontSize="16px">{project.description}</Text>
                </Box>
                <Box>
                  <List d="flex" mt="5">
                    {project.languages.map((language) => (
                      <ListItem
                        key={project.id + language}
                        mr="4"
                        fontSize="12px"
                      >
                        {language}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button mt="10" onClick={handleShowMoreToggle}>
        {!showMore ? "Show More" : "Show Less"}
      </Button>
    </Flex>
  );
};

export default Projects;
