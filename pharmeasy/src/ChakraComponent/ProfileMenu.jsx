import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Text
  } from '@chakra-ui/react'
import { AppContext } from '../Context/ContextProvider'
import { useContext } from 'react'
import { FiUser } from "react-icons/fi";

export const ProfileMenu = () => {
    const {userLogout,email}=useContext(AppContext)
  return (
    <Menu>
    <MenuButton>
    <FiUser fontSize="22px" />
    </MenuButton>
    <MenuList>
      <MenuGroup title='Profile'>
      <MenuItem disabled>My Account </MenuItem>
        <MenuItem> <Text fontSize='20px' color='black' >{email} </Text></MenuItem>
        <MenuItem>Payments </MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title='Help'>
        <MenuItem>Docs</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem  onClick={()=>userLogout()}>Logout</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
  )
}

