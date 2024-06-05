import { Box, Container, Flex, HStack, VStack, Text, Input, IconButton, Avatar, Image, Spacer, Divider, Link } from "@chakra-ui/react";
import { FaSearch, FaHeart, FaComment, FaShare, FaBell, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Text fontSize="2xl" fontWeight="bold">PhotoShare</Text>
        <Spacer />
        <HStack spacing={4}>
          <Input placeholder="Search" bg="gray.700" border="none" color="white" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="Notifications" icon={<FaBell />} />
          <IconButton aria-label="Messages" icon={<FaEnvelope />} />
          <Avatar name="User" src="https://bit.ly/broken-link" />
        </HStack>
      </Flex>

      <Flex mt={4}>
        {/* Main Feed Section */}
        <Box flex="2" p={4}>
          <VStack spacing={6}>
            {/* Example Post */}
            <Box w="full" bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
              <Flex align="center" p={4}>
                <Avatar name="User" src="https://bit.ly/broken-link" />
                <Text ml={2} fontWeight="bold">username</Text>
              </Flex>
              <Image src="https://via.placeholder.com/600" alt="Post Image" />
              <Flex p={4} align="center">
                <IconButton aria-label="Like" icon={<FaHeart />} />
                <IconButton aria-label="Comment" icon={<FaComment />} ml={2} />
                <IconButton aria-label="Share" icon={<FaShare />} ml={2} />
              </Flex>
            </Box>
            {/* Add more posts here */}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} display={{ base: "none", md: "block" }}>
          <VStack spacing={4} align="stretch">
            <Box bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">Suggested Users</Text>
              {/* Example Suggested User */}
              <Flex align="center" mt={4}>
                <Avatar name="User" src="https://bit.ly/broken-link" />
                <Text ml={2}>username</Text>
              </Flex>
              {/* Add more suggested users here */}
            </Box>
            <Box bg="white" boxShadow="md" borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">Trending Tags</Text>
              {/* Example Trending Tag */}
              <Text mt={4}>#exampletag</Text>
              {/* Add more trending tags here */}
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" wrap="wrap">
          <Link href="#">About</Link>
          <Link href="#">Help</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;