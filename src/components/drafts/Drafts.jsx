import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import './Drafts.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Drafts = () => {
  const nav = useNavigate();
  return (
    <Stack py='4' w={'100%'} bg={'#050826'}>
      {/* mobile header */}
      <Stack
        alignItems={'center'}
        display={{ base: 'inherit', md: 'none' }}
        px={{ base: '4', md: '' }}
        pb="4"
        direction={'row'}
        justifyContent="space-between"
      >
        <Heading className="gradient-color">Draft</Heading>
        <Image
          _hover={{ cursor: 'pointer' }}
          w={{ base: '9', sm: '12' }}
          src={logo}
          onClick={() => nav('/home')}
        />
      </Stack>
      {/*  */}
      <Stack direction={'row'} justifyContent="space-between">
        {/* home buttons */}
        <Stack
          display={{ base: 'none', md: 'inherit' }}
          w="50%"
          pt={'4'}
          pl="12"
        >
          {/* buttons */}
          <Stack spacing={'4'} w={{ base: '35%', xl: '25%' }}>
            <Button
              onClick={() => nav('/profile')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                My Profile
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
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                Leaderboard
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/prize-payouts')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                Prizes
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
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                Game Schedule
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
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                Settings
              </Heading>
            </Button>
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
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                Logout
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/home')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                Home
              </Heading>
            </Button>
          </Stack>
          {/* timer */}
          <Stack py="3" w={{ base: '35%', xl: '25%' }}>
            <Text
              textAlign={'center'}
              fontSize={'md'}
              fontWeight="600"
              color={'white'}
            >
              Current Game Ends In
            </Text>
            {/* countdown timer */}
            <Stack
              color={'white'}
              spacing={'3'}
              justifyContent={'center'}
              direction={'row'}
            >
              <Stack alignItems={'center'}>
                <div
                  style={{ width: '2.8rem', height: '2.8rem' }}
                  className="countdowntimer-box"
                ></div>
                <text style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                  Days
                </text>
              </Stack>
              <Stack alignItems={'center'}>
                <div
                  style={{ width: '2.8rem', height: '2.8rem' }}
                  className="countdowntimer-box"
                ></div>
                <text style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                  Hours
                </text>
              </Stack>
              <Stack alignItems={'center'}>
                <div
                  style={{ width: '2.8rem', height: '2.8rem' }}
                  className="countdowntimer-box"
                ></div>
                <text style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                  Minutes
                </text>
              </Stack>
            </Stack>
          </Stack>
          <Stack w={{ base: '35%', xl: '25%' }} alignItems={'center'}>
            <Image
              _hover={{ cursor: 'pointer' }}
              w={'14'}
              src={logo}
              onClick={() => nav('/home')}
            />
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
        {/* lineup */}
        <Stack
          w={{ base: '100%', md: '50%' }}
          pr={{ base: '0', md: '20' }}
          px={{ base: '8', md: '' }}
          py={{ base: '0', md: '2' }}
          spacing="4"
        >
          {/* header */}
          <Stack
            direction={'row'}
            justifyContent="space-between"
            spacing={'4'}
            alignItems="center"
          >
            <Heading
              minW={'fit-content'}
              fontSize={'lg'}
              className="gradient-color"
            >
              Edit Lineup
            </Heading>
            <Heading
              minW={'fit-content'}
              fontSize={'lg'}
              className="gradient-color"
            >
              Balance
            </Heading>
          </Stack>
          <Stack className='faq' maxH={{base:'60vh',md:'85vh'}} overflow='auto' spacing="4">
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              spacing={'4'}
              alignItems="center"
            >
              <Box
                border={'2px solid rgba(255, 255, 255, 1)'}
                _hover={{ cursor: 'pointer' }}
                boxSize={'24'}
                borderRadius={'lg'}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                borderRadius={'md'}
                w="68px"
                py={'1.5'}
                bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading textAlign={'center'} fontSize={'sm'} color={'black'}>
                  $1000
                </Heading>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* home button */}
      <Button
        _hover={{}}
        onClick={() => nav('/home')}
        display={{ base: 'inherit', md: 'none' }}
        size={'sm'}
        mt={'8 !important'}
        mb={{ base: '2 !important', sm: '8 !important' }}
        alignSelf={'center'}
        w={'50%'}
        bg={'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
        borderRadius="md"
      >
        <Heading fontSize={'lg'}>Home</Heading>
      </Button>
    </Stack>
  );
};

export default Drafts;
