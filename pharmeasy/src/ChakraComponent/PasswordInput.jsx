import { 
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import React from "react";


export function PasswordInput({password,setPassword}) {
    const [show, setShow] = React.useState(false)
  
    const handleClick = () => setShow(!show)
  

   
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick} bg='#c6f6d4'  _hover={{ bg: '##c6f6d4' }}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
