/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react'
import { NextPage } from 'next'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
// import Navbar from '~/components/Navbar'

const IndexPage: NextPage = () => (
  <Box>
    {/* <Navbar /> */}
    <Box
      backgroundImage="url('/wedding.png')"
      backgroundPosition={{ base: '56%, 49%', lg: 'center' }}
      backgroundRepeat="no-repeat"
      w="full"
      h={{ base: '80vh', lg: '100vh' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      color="#fff"
    >
      <Heading fontSize={{ base: '4xl', lg: '5xl' }} as="h1" fontFamily="'Bungee', cursive">
        A I N I L & A N C A
      </Heading>
      <Text>Mar 26, 2022, 7:00 PM | Desa Biroro</Text>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt="4rem">
      <Heading as="h2" fontFamily="'Bungee', cursive">
        Amplop Elektronik
      </Heading>
      <Text>Transfer via BCA</Text>
      <Text fontFamily="'Bungee', cursive" fontSize={{ base: 'xl', lg: '5xl' }}>
        123-356-78910-11
      </Text>
      <Text>No Name</Text>
      <Img src="/qrcode.png" />
    </Box>
    <audio autoPlay loop>
      <source src="/song.mp3" type="audio/mpeg" />
    </audio>
  </Box>
)

export default IndexPage
