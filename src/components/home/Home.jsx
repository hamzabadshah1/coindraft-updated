import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Input,
  HStack,
  Spacer,
  SimpleGrid
} from '@chakra-ui/react';
import React from 'react';
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
import BgImg from '../../assets/images/BgImg.png';
import '../../components/drafts/Drafts.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import WalletConnect from '../walletConnect/WalletConnect';
import Menu from '../menu/Menu';
const Home = () => {
  const nav = useNavigate();
  return (
    <>
    {/* // HOME */}
    <Stack display={{base:'none',md:'inherit'}} minH={'100vh !important'}>
      <Stack
        h={{ base: '76vh', md: '73vh' }}
        maxH={{ base: '76vh', md: '73vh' }}
        w={'100%'}
        bgImage={BgImg}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        bgPosition={'center'}
      >
        <Stack
          alignItems={'center'}
          p={{ base: 4, md: 7 }}
          justifyContent="space-between"
          direction={'row'}
        >
          <Text
          className='font-style'
            _hover={{ cursor: 'pointer' }}
            id="button-text"
            fontSize={'2xl'}
          >
            CoinDraft
          </Text>
          <WalletConnect />
        </Stack>
        <Stack spacing={'6'} justifyContent="center" alignItems={'center'}>
          <Stack
            textAlign={'center'}
            spacing={{ base: '8' }}
            alignItems="center"
            mt={{ base: '-10px', sm: '-20px', md: '-60px' }}
          >
            <Image
              _hover={{ cursor: 'pointer' }}
              w={{ base: '20', md: '28' }}
              src={logo}
            />
            <Stack>
              <Heading color={'white'} fontSize={{ base: 'xl', md: '4xl' }}>
                Fantasy Crypto Has Arrived
              </Heading>
            </Stack>
          </Stack>
          <Stack
            justifyContent={'center'}
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '5', lg: '10' }}
            w={{ base: '60%',sm:"70%",md:"75%" }}
            pt={{ base: '4', md: '6', lg: '10' }}
          >
            {/* <Button
              onClick={() => nav('/trending-coins')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              borderRadius={'none'}
              variant={'link'}
              w={{ base: '100%', md: '20%' }}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Buy $YFIC
              </Heading>
            </Button> */}
            <Button
              onClick={() => nav('/menu')}
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Play CoinDraft
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
              onClick={() => nav('/faq')}
            >
              <Heading fontSize={'md'} fontWeight="500">
                FAQ
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                $Earn
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Socials
              </Heading>
            </Button>
            {/* <Button
              onClick={() => nav('/nftmatchups')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              borderRadius={'none'}
              variant={'link'}
              w={{ base: '100%', md: '20%' }}
            >
              <Heading fontSize={'md'} fontWeight="500">
                NFT Matchups
              </Heading>
            </Button> */}
          </Stack>
        </Stack>
      </Stack>
      {/* footer */}
      <Stack
        justifyContent={'center'}
        h={{ base: '24vh', md: '27vh' }}
        maxH={{ base: '24vh', md: '27vh' }}
        px="4"
        mt={'0 !important'}
        w={'100%'}
        bg={'#000000'}
        alignItems="center"
        spacing={{base:"3",md:"5"}}
      >
        <Heading
          textAlign={'center'}
          color={'white'}
          fontWeight="600"
          fontSize={'lg'}
        >
          {' '}
          Subscribe to Our Newsletter
        </Heading>
        <HStack spacing={'0 !important'}>
          <Input
            bg={'white'}
            color="rgba(0, 0, 0, 1)"
            fontWeight={'600'}
            _focusVisible={{}}
            placeholder="E-mail"
            borderRadius={''}
          />
          <Button
            _hover={{}}
            w={'40'}
            bg={'linear-gradient(90deg, #FCFF00 -0.5%, #3FFF13 97.65%);'}
            borderRadius={''}
          >
            <Heading fontWeight={'700'} fontSize={'md'}>
              Subscribe
            </Heading>
          </Button>
        </HStack>
        <Text className="footer-text">© All Rights Reserved</Text>
      </Stack>
    </Stack>
    {/* // MENU */}
    <Stack display={{base:'inherit',md:'none'}}>
      <Menu/>
    </Stack>

  </>
  );
};

export default Home;








