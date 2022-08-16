import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const nav = useNavigate();
  return (
    <Stack
      py={{ base: '2', sm: '4', md: '5' }}
      h={'100vh'}
      maxH={'100vh'}
      justifyContent="center"
      alignItems={'center'}
      w={'100%'}
      bg={'#050826'}
    >
      <Stack textAlign={'center'} alignItems="center">
        <Image
          _hover={{ cursor: 'pointer' }}
          w={{ base: '20', md: '28'}}
          src={logo}
        />
        <Stack
          mt={{ base: '3 !important', lg: '6 !important' }}
          spacing={'1'}
          color={'white'}
          fontWeight="700"
          fontSize={{ base: 'lg', md: 'xl'}}
        >
          {' '}
          <Text>Play • Earn • Wager • Win</Text>
          <Text>Fantasy Crypto</Text>
        </Stack>
        <Stack
          mt={{ base: '6 !important', lg: '8 !important' }}
          w={{ base: '90%', sm: '60%', lg: '40%' }}
        >
          <Text fontSize={{ base: 'sm', md: 'sm'}} fontWeight={'400'} lineHeight={'1.7'} color={'white'}>
            Fully Decentralized Fantasy Crypto Has Arrived! Play In The Weekly
            Free Rolls, Create Your Own Hourly Contests Or Season-Long Leagues
            With Friends!
          </Text>
        </Stack>
        <Stack
          mt={{ base: '6 !important', lg: '8 !important' }}
          spacing={'4'}
          w={{ base: '80%', sm: '50%', lg: '35%' }}
        >
          <Button
            onClick={() => nav('/home')}
            _hover={{}}
            className="button-border-colored"
            variant={'link'}
          >
            <Heading id="button-text" fontSize={'md'} fontWeight="700">
              Login
            </Heading>
          </Button>
          <Button
            _hover={{}}
            height={'42px'}
            bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
            borderRadius="full"
            fontWeight={'bold'}
          >
            {' '}
            <Heading color={'#050826'} fontSize={'md'} fontWeight="700">
              Register
            </Heading>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
