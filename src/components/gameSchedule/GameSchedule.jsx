import {
  Button,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import '../../App.css';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import '../../components/drafts/Drafts.css'
const GameSchedule = () => {
  const nav = useNavigate();
  return (
    <>
      <Stack
        bg={'#050826'}
        minH={'100vh'}
        px={{ base: '4', sm: '12' }}
        py={'4'}
        spacing={'6'}
        justifyContent={{ base: 'space-between', md: 'center' }}
        align={'center'}
      >
        {/* Heading Container */}
        <Stack
          direction={{ base: 'row', md: 'column' }}
          w={'full'}
          align={{ base: 'center' }}
          justify={{ base: 'space-between', md: 'inherit' }}
        >
          <Text
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
            bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
            bgClip="text"
            className='font-style'
          >
            Game Schedule
          </Text>
          <Image
            onClick={() => nav('/')}
            display={{ base: 'inherit', md: 'none' }}
            _hover={{ cursor: 'pointer' }}
            w={{ base: '10', sm: '20', md: '28', lg: '40' }}
            src={logo}
          />
        </Stack>
        {/* Content Container */}
        <Stack direction={'row'} h={{ base: '60vh', lg: '55vh' }}>
          {/* Sidebar Button Container */}
          <Stack
            display={{ base: 'none', md: 'inherit' }}
            align={'center'}
            justify={'space-between'}
          >
            <Stack spacing={'3'}>
              <Button
                onClick={() => nav('/')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  Home
                </Heading>
              </Button>
              <Button
                onClick={() => nav('/drafts')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  My Lineup
                </Heading>
              </Button>
              <Button
                onClick={() => nav('/leaderboard')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  Leaderboard
                </Heading>
              </Button>
              <Button
                onClick={() => nav('/prize-payouts')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  Prizes
                </Heading>
              </Button>
            </Stack>
            <VStack>
              <Image
                onClick={() => nav('/')}
                _hover={{ cursor: 'pointer' }}
                w={{ base: '14', sm: '32', md: '32', lg: '24' }}
                src={logo}
              />
              <Text color={'white'} fontStyle={'bold'}>
                Season-Long League
              </Text>
            </VStack>
          </Stack>

          {/* Table Container */}
          <Stack
            className="example"
            border={'1px solid white'}
            flex={'1'}
            mx={{ base: '0 !important', md: '4 !important' }}
            borderRadius={'lg'}
            px={'4'}
            py={'8'}
            bgColor={'rgba(255, 255, 255, 0.2)'}
            spacing={'6'}
            overflow={'auto'}
          >
            <Stack
              direction={'row'}
              color={'black'}
              className="button-border"
              p={'0 !important'}
              bgColor={'white'}
              borderRadius={'lg'}
              justify={'center'}
              position={'relative'}
            >
              <Stack
                bgColor={'#050826'}
                borderRadius={'full'}
                px={'4'}
                py={'1'}
                position={'absolute'}
                top={'-4'}
              >
                <Tag
                  fontWeight={'bold'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                  bgClip="text"
                  minH={'0.6em'}
                >
                  Saturday
                </Tag>
              </Stack>
              <Text
                textAlign={'center'}
                fontSize={{ base: 'sm', md: 'md' }}
                pt={6}
                pb={2}
                fontWeight={'700'}
              >
                Saturday - 12:00 pm UTC Each Week Scoring Will Stop Being
                Tracked.
                <br /> Saturday - 12:01pm UTC Each Week, The Top 100 Crypto
                Coins Will Be Listed To Draft Your Lineup.
              </Text>
            </Stack>

            <Stack
              direction={'row'}
              color={'black'}
              className="button-border"
              p={'0 !important'}
              bgColor={'white'}
              borderRadius={'lg'}
              justify={'center'}
              position={'relative'}
            >
              <Stack
                bgColor={'#050826'}
                borderRadius={'full'}
                px={'4'}
                py={'1'}
                position={'absolute'}
                top={'-4'}
              >
                <Tag
                  fontWeight={'bold'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                  bgClip="text"
                  minH={'0.6em'}
                >
                  Sunday
                </Tag>
              </Stack>
              <Text
                textAlign={'center'}
                fontSize={{ base: 'sm', md: 'md' }}
                pt={6}
                pb={2}
                fontWeight={'700'}
              >
                Throughtout Sunday, The Top 100 Crypto Coins Will Be Listed To
                Draft Your Lineup.
              </Text>
            </Stack>

            <Stack
              direction={'row'}
              color={'black'}
              className="button-border"
              p={'0 !important'}
              bgColor={'white'}
              borderRadius={'lg'}
              justify={'center'}
              position={'relative'}
            >
              <Stack
                bgColor={'#050826'}
                borderRadius={'full'}
                px={'4'}
                py={'1'}
                position={'absolute'}
                top={'-4'}
              >
                <Tag
                  fontWeight={'bold'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                  bgClip="text"
                  minH={'0.6em'}
                >
                  Monday
                </Tag>
              </Stack>
              <Text
                textAlign={'center'}
                fontSize={{ base: 'sm', md: 'md' }}
                pt={6}
                pb={2}
                fontWeight={'700'}
              >
                12pm UTC: Scoring Is Now Being Tracked. <br />
                Draft The Lineup With The Highest Returns Compared To Fellow
                Competitors And The Prize Is Yours!
              </Text>
            </Stack>

            <Stack
              direction={'row'}
              color={'black'}
              className="button-border"
              p={'0 !important'}
              bgColor={'white'}
              borderRadius={'lg'}
              justify={'center'}
              position={'relative'}
            >
              <Stack
                bgColor={'#050826'}
                borderRadius={'full'}
                px={'4'}
                py={'1'}
                position={'absolute'}
                top={'-4'}
              >
                <Tag
                  fontWeight={'bold'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                  bgClip="text"
                  minH={'0.6em'}
                >
                  Tuesday
                </Tag>
              </Stack>
              <Text
                textAlign={'center'}
                fontSize={{ base: 'sm', md: 'md' }}
                pt={6}
                pb={2}
                fontWeight={'700'}
              >
                11:59pm UTC Deadline To Add Yfic To Your Calculated Winnings.
              </Text>
            </Stack>

            <Stack
              direction={'row'}
              color={'black'}
              className="button-border"
              p={'0 !important'}
              bgColor={'white'}
              borderRadius={'lg'}
              justify={'center'}
              position={'relative'}
            >
              <Stack
                bgColor={'#050826'}
                borderRadius={'full'}
                px={'4'}
                py={'1'}
                position={'absolute'}
                top={'-4'}
              >
                <Tag
                  fontWeight={'bold'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                  bgClip="text"
                  minH={'0.6em'}
                >
                  Wednesday - Friday
                </Tag>
              </Stack>
              <Text
                textAlign={'center'}
                fontSize={{ base: 'sm', md: 'md' }}
                pt={6}
                pb={2}
                fontWeight={'700'}
              >
                Throughout The Rest Of The Week, Check The Leaderboard To See
                How Your Lineup Is Doing!
              </Text>
            </Stack>
          </Stack>
          {/* Additional Stack */}
          <Stack
            w={'36'}
            display={{ base: 'none', md: 'inherit' }}
            align={'center'}
          ></Stack>
        </Stack>
        {/* Home Mibile Screen Button */}
        <Button
          onClick={() => nav('/')}
          w={'40vw'}
          display={{ base: 'inherit', md: 'none' }}
          bgGradient="linear(180deg, #FCFF00 10%, #3FFF13 100%)"
        >
          Home
        </Button>
      </Stack>
    </>
  );
};

export default GameSchedule;
