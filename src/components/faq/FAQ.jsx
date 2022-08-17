import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import plus from '../../assets/images/plus.png';
import minus from '../../assets/images/minus.png';
import '../../components/drafts/Drafts.css'
import { useNavigate } from 'react-router';
const Learn = () => {
  const nav = useNavigate();
  const faqAccordionArray = [
    {
      AccordionTitle: 'How Do I Register For A CoinDraft Account?',
      AccordionDesc: 'Click Register When Opening The Game.',
    },
    {
      AccordionTitle:
        'Can I Choose A Stablecoin As One Of My Lineup Selections?',
      AccordionDesc: '',
    },
    {
      AccordionTitle: 'Can I Have More Than 1 Account?',
      AccordionDesc: '',
    },
    {
      AccordionTitle: 'Can I Select The Same Token Twice In One Lineup?',
      AccordionDesc: '',
    },
  ];
  return (
    <Stack bg={'#050826'} w={'100%'}>
      {/* body */}
      <Stack
        py={'4'}
        justifyContent={'space-between'}
        h={{ base: '76vh', md: '73vh' }}
        maxH={{ base: '76vh', md: '73vh' }}
        w={'100%'}
      >
        <Stack pl={{ base: '0', sm: '2', md: '8' }} w={'100%'}>
          <Stack alignItems={'center'}>
            <Text
              fontSize={{ base: 'lg', md: '3xl' }}
              className="faq-text font-style"
              textAlign={'center'}
            >
              Our FAQ’s
            </Text>
          </Stack>
          <Accordion
            overflow="auto"
            maxH={'45vh'}
            // className="faq"
            allowMultiple
          >
            {faqAccordionArray.map((data, index) => (
              <AccordionItem key={index} border={'none'}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton _hover={{ bgColor: 'inherit' }}>
                        {isExpanded ? (
                          <Stack>
                            <Stack
                              direction={'row'}
                              spacing={{ base: '2', md: '4' }}
                              al
                              justifyContent={'space-between'}
                              alignItems={'center'}
                            >
                              <Image src={minus} w={{ base: '8', md: '10' }} />
                              <Text
                                color={'white'}
                                lineHeight="1.7"
                                fontSize={{ base: 'xs', sm: 'md' }}
                              >
                                {data.AccordionTitle}
                              </Text>{' '}
                            </Stack>
                          </Stack>
                        ) : (
                          <Stack
                            direction={'row'}
                            spacing={{ base: '2', md: '4' }}
                            alignItems={'center'}
                          >
                            <Image src={plus} w={{ base: '8', md: '10' }} />
                            <Text
                              color={'white'}
                              lineHeight="1.7"
                              fontSize={{ base: 'xs', sm: 'md' }}
                            >
                              {data.AccordionTitle}
                            </Text>{' '}
                          </Stack>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pl="16">
                      <Text
                        fontSize={{ base: 'xs', sm: 'md' }}
                        pl={'1.5'}
                        color={'white'}
                      >
                        {data.AccordionDesc}
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
        {/* home button */}
        <Button
          _hover={{}}
          onClick={() => nav('/home')}
          size={'md'}
          alignSelf={'center'}
          w={{ base: '50%', md: '30%', lg: '20%' }}
          bg={'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
          borderRadius="md"
        >
          <Heading fontSize={{ base: 'md', md: 'lg' }}>Home</Heading>
        </Button>
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
        spacing={{ base: '3', md: '5' }}
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
  );
};

export default Learn;
