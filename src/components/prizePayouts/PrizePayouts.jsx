import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Center,
  Divider,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../components/drafts/Drafts.css';
const Drafts = () => {
  const nav = useNavigate();
  return (
    <Stack
      spacing={{ base: '6', md: '12' }}
      py={{ base: '6', md: '12' }}
      minH={'100vh'}
      w={'100%'}
      bg={'#050826'}
    >
      {/* header */}
      <Stack px={'4'} direction={{ base: 'row', md: 'column' }} w={'full'}>
        <Text
          textAlign={{ base: 'left', md: 'center' }}
          className="font-style"
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
          bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
          bgClip="text"
          w={{ base: '60%', md: '100%' }}
        >
          Prize Payouts
        </Text>

        <Spacer />
        <Image
          onClick={() => nav('/')}
          display={{ base: 'inherit', md: 'none' }}
          _hover={{ cursor: 'pointer' }}
          w={{ base: '10', sm: '20', md: '28', lg: '40' }}
          src={logo}
        />
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} px={4}>
        {/* home buttons */}
        <Stack
          w={{ base: '100%', md: '40%' }}
          display={{ base: 'none', md: 'inherit', lg: 'inherit' }}
        >
          {/* buttons */}
          <Stack
            mb="6 !important"
            spacing={'6'}
            w={{ base: '100%', lg: '50%' }}
            px={10}
          >
            <Button
              onClick={() => nav('/')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Home
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/drafts')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                My Lineup
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/leaderboard')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Leaderboard
              </Heading>
            </Button>
            <Button
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Game Schedule
              </Heading>
            </Button>
          </Stack>

          <Stack w={{ base: '100%', lg: '50%' }} alignItems={'center'} px={10}>
            <Image _hover={{ cursor: 'pointer' }} w={'14'} src={logo} />
            <Text
              textAlign={'center'}
              fontSize={'md'}
              fontWeight="600"
              color={'white'}
            >
              Season-Long Leagues
            </Text>
          </Stack>
        </Stack>
        {/* payouts */}
        <Stack w={{ base: '100%', md: '60%' }}>
          {/* edit lineup */}
          <Stack spacing={'4'} justifyContent={'space-between'}>
            {/* boxes */}
            <Stack
              spacing={'3'}
              w={{ base: '100%', lg: '50%' }}
              justifyContent={'space-between'}
            >
              <Stack
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
                height={{ base: '380px', md: '400px' }}
                p={{ base: 2, md: 4 }}
                gap={2}
              >
                <Stack
                  bgColor={' #FFFFFF'}
                  boxShadow={'0px 2px 2px #3FFF13'}
                  borderRadius={'14px'}
                  px={{ base: 2, md: 5 }}
                  py={1}
                >
                  <HStack justifyContent={'space-between'}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      1st
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      $YFIC Amount
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      5
                    </Text>
                  </HStack>
                </Stack>

                <Stack
                  bgColor={' #FFFFFF'}
                  boxShadow={'0px 2px 2px #3FFF13'}
                  borderRadius={'14px'}
                  px={{ base: 2, md: 5 }}
                  py={1}
                >
                  <HStack justifyContent={'space-between'}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      2nd
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      $YFIC Amount
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      4
                    </Text>
                  </HStack>
                </Stack>

                <Stack
                  bgColor={' #FFFFFF'}
                  boxShadow={'0px 2px 2px #3FFF13'}
                  borderRadius={'14px'}
                  px={{ base: 2, md: 5 }}
                  py={1}
                >
                  <HStack justifyContent={'space-between'}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      3rd
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      $YFIC Amount
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      3
                    </Text>
                  </HStack>
                </Stack>

                <Stack
                  bgColor={' #FFFFFF'}
                  boxShadow={'0px 2px 2px #3FFF13'}
                  borderRadius={'14px'}
                  px={{ base: 2, md: 5 }}
                  py={1}
                >
                  <HStack justifyContent={'space-between'}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      4th
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      $YFIC Amount
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      2
                    </Text>
                  </HStack>
                </Stack>

                <Stack
                  bgColor={' #FFFFFF'}
                  boxShadow={'0px 2px 2px #3FFF13'}
                  borderRadius={'14px'}
                  px={{ base: 2, md: 5 }}
                  py={1}
                >
                  <HStack justifyContent={'space-between'}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      5th
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      $YFIC Amount
                    </Text>
                    <Center height="50px">
                      <Divider orientation="vertical" borderColor={'black'} />
                    </Center>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={'black'}
                      fontWeight={'700'}
                    >
                      1
                    </Text>
                  </HStack>
                </Stack>
              </Stack>

              <Stack
                display={{ base: 'inherit', md: 'none', lg: 'none' }}
                mt={5}
              >
                <Button
                  onClick={() => nav('/')}
                  _hover={{}}
                  height={'45px'}
                  bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
                  fontWeight={'bold'}
                >
                  {' '}
                  <Heading color={'#050826'} fontSize={'lg'} fontWeight="700">
                    Home
                  </Heading>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Drafts;
