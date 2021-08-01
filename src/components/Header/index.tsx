import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from '../Header/Logo'
import { SearchBox } from '../Header/SearchBox'
import { NotificationNav } from '../Header/NotificationNav'
import { Profile } from '../Header/Profile'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1480"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
