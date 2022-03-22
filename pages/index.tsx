import * as React from 'react'
import { NextPage } from 'next'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
// import Navbar from '~/components/Navbar'

const IndexPage: NextPage = () => (
  <Box>
    {/* <Navbar /> */}
    <Box
      backgroundImage="url('/wedding.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="full"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      color="#fff"
    >
      <Heading fontSize="5xl" as="h1" fontFamily="'Bungee', cursive">
        A I N I L & A N C A
      </Heading>
      <Text>Mar 26, 2022, 7:00 PM | Desa Biroro</Text>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt="4rem">
      <Heading as="h2" fontFamily="'Bungee', cursive">
        Amplop Elektronik
      </Heading>
      <Text>Transfer via BCA</Text>
      <Text fontFamily="'Bungee', cursive" fontSize="5xl">
        123-356-78910-11
      </Text>
      <Text>No Name</Text>
      <Img src="/qrcode.png" />
    </Box>
  </Box>
)

export default IndexPage
