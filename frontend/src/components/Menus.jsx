/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {Box, Menu, MenuButton, MenuItem, MenuList,Button, useToast} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';


const Menus = ({setMonths}) => {
  const toast = useToast()

  return (
    <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
            Select Month
          </MenuButton>
          <MenuList onClick={(e)=>{setMonths(e.target.value)
          toast({
    title: `scroll to statistics and chart`,
    status: 'success',
    isClosable: true,
  })}}>
            <MenuItem value="1">January</MenuItem>
            <MenuItem value="2">February</MenuItem>
            <MenuItem value="3">March</MenuItem>
            <MenuItem value="4">April</MenuItem>
            <MenuItem value="5">May</MenuItem>
            <MenuItem value="6">June</MenuItem>
            <MenuItem value="7">July</MenuItem>
            <MenuItem value="8">August</MenuItem>
            <MenuItem value="9">September</MenuItem>
            <MenuItem value="10">October</MenuItem>
            <MenuItem value="11">November</MenuItem>
            <MenuItem value="12">December</MenuItem>
          </MenuList>
        </Menu>
    </Box>
  )
}

export default Menus