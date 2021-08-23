import { Box } from "@chakra-ui/react"
import NavLat from "../organisms/NavLat"
import InfoTemplate from "../templates/InfoTemplate"

const Info = () => {
  return(<>
  <Box h="85vh" w="100%"  bgGradient="linear(to-t,gray.800, teal.400);">
  <InfoTemplate />
  <NavLat/>
  </Box>
  </>)
}
export default Info