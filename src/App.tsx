import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  HStack,
  Code,
  Grid,
  theme,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import logoReflexer from'./assets/brand-white.svg'
import gitcoin from'./assets/gitcoin-brand.svg'

import Home  from './components/home'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} >
        <ColorModeSwitcher justifySelf="flex-end" />
        <Home />
        <HStack justifySelf="center">
        <Link
            color="purple.500"
            href="https://gitcoin.co"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitcoin} alt="gitcoin.co" /> 
          </Link>
          </HStack>
        <HStack spacing={12} justifySelf="center">
          <Link
            color="teal.600"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoReflexer} alt="reflexer.finance" />
          </Link>
          <Link
            color="purple.500"
            href="https://oito.work"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heading color={useColorModeValue('purple.500', 'white')} as="h4" size="md">Oito.work</Heading>
          </Link>
          
          </HStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
