import ContainerLayout from "../../Layouts/ContainerLayout";
import {Box, Text, Center, Avatar, Stack, HStack } from '@chakra-ui/react';
import InterfaceButton from "../main/Button";
import BigHeading from "../main/Typo/BigHeading";
import blockies from 'ethereum-blockies-png';

const Hero = () => {

    const dataURL = blockies.createDataURL({ seed: '0x11d1f07af5501156a3dc81ed93f9eebd81d3e47q' })
    console.log(dataURL)
    return (
        <>
            <Box position={'relative'}>

              <ContainerLayout>
                  
                  <Box display={'flex'} alignItems={'center'} h={'100vh'} justifyContent={'center'}>

                     <Box>
                          <Text fontWeight={'900'} fontSize={['50px','80px']}
                          fontFamily={'var(--font-outfit)'}
                              textAlign={'center'} w={['', '580px']} lineHeight={['','97px']}>Privacy is 
                              {' '} <span style={{color:'var(--primary-green)'}}>Human Right</span>
                          </Text>

                          

                          <Text color={'grey.400'} textAlign={'center'}>
                            An Alternative to Onion Chat but in the clear web
                          </Text>
                          
                          
                          
                        <Center>
                          
                            <InterfaceButton bg={'var(--primary-blue)'}>Get Started</InterfaceButton>
                        </Center>

                          <Center>
                              <HStack spacing={'-5'} my={'1em'}>
                                  <Avatar border={'2px solid white'} src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://cdn.solanamonkey.business/gen2/2362.png'}/>
                                  <Avatar border={'2px solid white'} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1ElEQVR4AcXBoZHDMBRF0Zs/mkkDYepCyEWYqIGtwEClGGwFbsDE6UHIXYhtD1n6ZaBMJuCdc0vP+4uBGgvfmNrKiCFmiBliocaCN7WVkamtjNRYGKmx4BlihpghFrg49pPOsuHVWPjEsZ90lg3PEDPEDLHAxZwTnUanxsLI1FY6ecWrFDxDzBAzxAIXx37iPZaNT9RY8P5+f+gsG54hZogZYoGLOSc6je/kFa9S8AwxQ8wQu6Xn/YWQIWaIGWKBN479xJtzYuTYT7w5J0YMMUPMEPsHzzEude9hwO0AAAAASUVORK5CYII='}/>
                                  <Avatar border={'2px solid white'} src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://cdn.solanamonkey.business/gen2/265.png'}/>
                               
                              </HStack>
                          </Center>
                     </Box>

                  </Box>


            </ContainerLayout>

            <Box position={'absolute'} left={['-2em', '-15em']}>
              <BigHeading color={'#dcdcdc12'} fontSize={'6em'}> Human </BigHeading>
            </Box>

         
      
            </Box>
        </>
    )
}

export default Hero;