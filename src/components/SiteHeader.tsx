import {Container, Grid, GridItem} from "@chakra-ui/react";
// import LogIn from "./LogIn";

function SiteHeader() {
  return (
    <>
    <Container maxW="50%" pt={2} pb={2} bg='green.400'>
      <Grid
        templateAreas={`"header"
                        "mainL mainR"`}
        gridTemplateRows={'50px 1fr'}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'mainL'}>
          Main Left
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'mainR'}>
          Main Right
        </GridItem>
      </Grid>
    </Container>
    {/* <Container maxW="50%" pt={2} pb={2} bg='green.400'>
      <Box w="400px" h="160px" bg="pink.100">
        <Image
          src="/assets/img/rlom_univ_logo.png"
          alt="RLOM University Logo"
          pb={2}
        />       
      </Box>
      
    </Container>
    <Container maxW="25%">
      <Box w="400px" bg="purple.100"><LogIn /></Box>
    </Container> */}
    </>
  );
}

export default SiteHeader;
