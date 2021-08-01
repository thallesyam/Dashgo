import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thalles Ian</Text>
        <Text color="gray.300" fs="small">
          thallesyam@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Thalles Ian"
        src="https://github.com/thallesyam.png"
      />
    </Flex>
  )
}
