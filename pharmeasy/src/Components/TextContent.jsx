import { Container, Stack,Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'

const TextContent = () => {
  return (
    <Stack w="95%"  m="auto" mt="60px" spacing="15px" >

        <Box>
        <Heading as='h5' size='md' textAlign="justify">Your One-Stop Online Pharmacy - PharmEasy</Heading>
        </Box>
        <Box >
            <Stack>
        <Heading as='h5' size='sm' textAlign="justify">We've got India Covered! </Heading>
        <Text w="100%"  textAlign="justify" >
         We now deliver in 1000+ cities and towns across 22000+ pin codes.
         We thereby cover every nook and corner of the country! The major cities in which we deliver include Mumbai, Kolkata, Delhi, Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune, Gurgaon, Navi Mumbai,
          Jaipur, Noida, Lucknow, Ghaziabad & Vadodara.
        </Text>
        </Stack>
        </Box>

        <Box>
        <Stack>
          <Heading as='h5' size='sm' textAlign="justify">Say Goodbye to All Your Healthcare Worries With PharmEasy!</Heading>
          <Text w="100%"  textAlign="justify" >
          PharmEasy is here to help you take it easy! We are amongst one of India's top online pharmacy and medical care platforms.
          It enables you to order pharmaceutical and healthcare products online by connecting you to registered retail pharmacies and get them delivered to your home.
          We are an online medical store, making your purchase easy, simple, and affordable!
           </Text>
         </Stack>
       </Box>

       <Box>
        <Stack>
          <Heading as='h5' size='sm' textAlign="justify">How Are We Making Lives Simpler With Our Online Medical Store?</Heading>
          <Text w="100%"  textAlign="justify" >
          Our doorstep delivery service is available in PAN-India across top cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc.
           Our online medical store also allows you to choose from 1 lakh+ products including OTC products and medical equipment. 
           PharmEasy is a one-stop online medical platform where you can also book diagnostic tests including blood tests, full-body checkups, and other preventive health check-ups at an affordable cost, right from the comfort of your home. We have partnered with trusted & certified labs that arrange for a sample pick-up from the convenience of your home.
           They also provide you with timely reports.
           </Text>
         </Stack>
       </Box>

       <Box>
        <Stack>
          <Heading as='h5' size='sm' textAlign="justify">Why Are We The Most Preferred Online Pharmacy?</Heading>
          <Text w="100%"  textAlign="justify" >
          Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price.
           Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep. 
           We cater to all your pharmaceutical needs and also make ordering medicines online a hassle-free experience for you. We connect you only with registered retail pharmacies & certified diagnostic labs.
            We ensure that healthcare is affordable to all and make the process of ordering online simple.
           </Text>
         </Stack>
       </Box>


       <Box>
        <Stack>
          <Heading as='h5' size='sm' textAlign="justify">Sit Back & Relax While You Get Your Essentials Delivered Every Month!</Heading>
          <Text w="100%"  textAlign="justify" >
          It’s tough to remember to refill every month, especially in the case of chronic diseases. 
          PharmEasy’s subscription service not only ensures that you are reminded of your refills but also makes sure that you are never out on your medical essentials.
           You will get a reminder every month and your order will be delivered at your convenience!
           </Text>
         </Stack>
       </Box>


       <Box>
        <Stack>
          <Heading as='h5' size='sm' textAlign="justify">Access medical and health information:</Heading>
          <Text w="100%"  textAlign="justify" >
          PharmEasy delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts.
           Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products.
           </Text>
         </Stack>
       </Box>

       <Box>
       <Heading as='h5' size='sm' textAlign="justify">We Believe in ‘Simplifying Healthcare, Impacting Lives!’</Heading>
       </Box>

    </Stack>
  )
  
}

export default TextContent