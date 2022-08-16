import React from 'react';
import {
  HStack,
  Image,
  Stack,
  Text,
  Heading,
  Spacer,
  VStack,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import icon1 from '../../assets/images/icon8.png';
import icon2 from '../../assets/images/icon1.png';
import icon3 from '../../assets/images/icon2.png';
import icon4 from '../../assets/images/icon3.png';
import icon5 from '../../assets/images/icon4.png';
import icon6 from '../../assets/images/icon5.png';
import icon7 from '../../assets/images/icon6.png';
import icon8 from '../../assets/images/icon7.png';
import icon9 from '../../assets/images/icon7.png';
import icon10 from '../../assets/images/icon5-1.png';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const nav = useNavigate();
  return (
    <Stack
      w={'full'}
      minH={'100vh'}
      bg={'#050826'}
      justifyContent="center"
      alignItems={'center'}
      gap={2}
    >
      <Stack
        spacing={'3'}
        px={{ base: '4', md: '0' }}
        w={{ base: '100%', md: '60%', lg: '40%' }}
        pt={{base:'5',md:'2'}}
      >
        <HStack>
          <Heading
            alignItems={'center'}
            minW={'fit-content'}
            fontSize={{ base: 'xl', md: '4xl' }}
            className="gradient-color heading"
          >
            Menu
          </Heading>
          <Spacer />
          <Stack>
            <Image
            onClick={()=>nav('/home')}
              _hover={{ cursor: 'pointer'}}
              w={'14'}
              src={logo}
            />
          </Stack>
        </HStack>

        <Stack bgColor={'#25294A'} borderRadius={'15px'} p={4}>
          <HStack>
            <Stack>
              <Text fontSize={{base:'sm',md:'md'}} color={'white'} fontWeight={'700'}>
                Refer Your Friends!
              </Text>
              <Text fontSize={{base:'sm',md:'md'}}color={'white'}>
                Refer Your Friends For Big Bonuses
              </Text>
            </Stack>
            <Spacer />
            <Stack>
              <Text fontSize={{base:'sm',md:'md'}} color={'white'} fontWeight={'700'}>
                Coming Soon!
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>

      <SimpleGrid
      py={{base:"4",lg:'3'}}
      px={{base:"4",md:'0'}}
        columns={[1, 2, 3]}
        w={{ base: '100%', md: '60%', lg: '40%' }}
        spacing="20px"
      >
        <Stack
          px={'8'}
          py={'5'}
          onClick={() => nav('/profile')}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon1}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            My Profile
          </Text>
        </Stack>
        <Stack
          px={'4'}
          py={'5'}
          onClick={() => nav('/drafts')}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon2}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            Draft Lineup
          </Text>
        </Stack>
        <Stack
          px={'8'}
          py={'5'}
          onClick={() => nav('/leaderboard')}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon4}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            Leaderboard
          </Text>
        </Stack>
        <Stack
          px={'8'}
          py={'5'}
          onClick={() => nav('/prize-payouts')}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon5}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            Prizes
          </Text>
        </Stack>
        <Stack
          px={'4'}
          py={'5'}
          onClick={() => nav('/gameschedule')}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon6}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          >
            <Image src={icon10} w={'12'} />
          </Stack>
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
          Game Schedule
          </Text>
        </Stack>
        <Stack
          px={'8'}
          py={'5'}
          onClick={() => nav('/')}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon1}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            Log Out
          </Text>
        </Stack>
        <Stack
          px={'8'}
          py={'5'}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon7}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            Settings
          </Text>
        </Stack>
        <Stack
          px={'8'}
          py={'5'}
          _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
          alignItems={'center'}
          justifyContent="center"
          bgColor={'#25294A'}
          borderRadius={'xl'}
        >
          <Stack
            bgImage={icon9}
            w={'12'}
            h={'12'}
            bgSize={'cover'}
            bgPosition={'center'}
          />
          <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
            Contact
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default Menu;
