import { Button, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../components/drafts/Drafts.css';
const MyProfile = () => {
  const nav = useNavigate();
  return (
    <Stack
      minH={'100vh'}
      spacing={{ base: '0', md: '12' }}
      py={{ base: '2', sm: '2', md: '2' }}
      justifyContent={{ base: 'space-between', md: 'initial' }}
      w={'100%'}
      bg={'#050826'}
    >
      {/* mobile header */}
      <Stack
        alignItems={'center'}
        display={{ base: 'inherit', md: 'none' }}
        px={{ base: '4', md: '' }}
        py={'2'}
        direction={'row'}
        justifyContent="space-between"
      >
        <Text fontSize={'xl'} w={'40%'} className="gradient-color font-style">
          My Profile
        </Text>
        <Image
          _hover={{ cursor: 'pointer' }}
          w={{ base: '9', sm: '12' }}
          src={logo}
          onClick={() => nav('/home')}
        />
      </Stack>
      <Stack  width={'100%'} display={{ base: 'none', md: 'flex' }}>
        <Text
          
          alignSelf="center"
          textAlign={'center !important'}
          className="gradient-color font-style"
          fontSize={{ base: '3xl', md: '4xl' }}
          width={'100%'}
        >
          My Profile
        </Text>
      </Stack>
      <Stack
        spacing={{ base: '0', md: '3' }}
        px={{ base: '1', sm: '2', md: '0' }}
        py={{ base: '2', sm: '4', md: '2' }}
        direction={'row'}
      >
        {/* menu */}
        <Stack display={{ base: 'none', md: 'inherit' }} w="35%" pl={'10'}>
          {/* buttons */}
          <Stack spacing={'5'} w={'50%'}>
            <Button
              onClick={() => nav('/')}
              className="button-border"
              height="40px"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Register
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/drafts')}
              className="button-border"
              height="40px"
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
              height="40px"
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
              onClick={() => nav('/prize-payouts')}
              className="button-border"
              height="40px"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Prizes
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/gameschedule')}
              className="button-border"
              height="40px"
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

          <Stack w={'50%'} mt="6 !important" alignItems={'center'}>
            <Image
              _hover={{ cursor: 'pointer' }}
              w={'20'}
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
        {/* profile settings */}
        <Stack
          w={{ base: '100%', md: '65%' }}
          pr={{ base: '0', md: '6', lg: '14' }}
        >
          <Stack
            p={{ base: '2', lg: '6' }}
            bg={'rgba(217, 217, 217, 0.24)'}
            border="2 px solid #FFFFFF"
            borderRadius={'lg'}
            spacing="7"
          >
            {/* change team */}
            <Stack spacing={{ base: '2', md: '4', lg: '6' }} direction={'row'}>
              <Button
                minW={{ base: '43%', lg: '30%' }}
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Change Team
                </Heading>
              </Button>
              <select className="form-control"></select>
              <Button
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Submit
                </Heading>
              </Button>
            </Stack>
            {/* change username */}
            <Stack spacing={{ base: '2', md: '4', lg: '6' }} direction={'row'}>
              <Button
                minW={{ base: '43%', lg: '30%' }}
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Change Username
                </Heading>
              </Button>
              <Input
                color={'white'}
                border={'2px solid yellowgreen !important'}
                w={'50%'}
              />
              <Button
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Submit
                </Heading>
              </Button>
            </Stack>
            {/* change email */}
            <Stack spacing={{ base: '2', md: '4', lg: '6' }} direction={'row'}>
              <Button
                minW={{ base: '43%', lg: '30%' }}
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Change E-Mail
                </Heading>
              </Button>
              <Input
                color={'white'}
                border={'2px solid yellowgreen !important'}
                w={'50%'}
              />
              <Button
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Submit
                </Heading>
              </Button>
            </Stack>
            {/* Change YFIC Address */}
            <Stack spacing={{ base: '2', md: '4', lg: '6' }} direction={'row'}>
              <Button
                minW={{ base: '43%', lg: '30%' }}
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Change YFIC Address
                </Heading>
              </Button>
              <Input
                color={'white'}
                border={'2px solid yellowgreen !important'}
                w={'50%'}
              />
              <Button
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Submit
                </Heading>
              </Button>
            </Stack>
            {/* Change Password */}
            <Stack spacing={{ base: '2', md: '4', lg: '6' }} direction={'row'}>
              <Button
                minW={{ base: '43%', lg: '30%' }}
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Change Password
                </Heading>
              </Button>
              <Input
                type={'password'}
                color={'white'}
                border={'2px solid yellowgreen !important'}
                w={'50%'}
              />
              <Button
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Submit
                </Heading>
              </Button>
            </Stack>
            {/* Change Avatar */}
            <Stack spacing={{ base: '2', md: '4', lg: '6' }} direction={'row'}>
              <Button
                minW={{ base: '43%', lg: '30%' }}
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Change Avatar
                </Heading>
              </Button>
              <select className="form-control"></select>
              <Button
                rounded={'lg'}
                _hover={{}}
                bg={' linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              >
                <Heading fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                  Submit
                </Heading>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* home button */}
      <Button
        onClick={() => nav('/home')}
        display={{ base: 'inherit', md: 'none' }}
        size={'sm'}
        mt={'3!important'}
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

export default MyProfile;
