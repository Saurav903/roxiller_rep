/* eslint-disable react/prop-types */
import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,setPage,totalPages}) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Text>Page No: {page}</Text>
        <Box>
            <Button isDisabled={page === Math.ceil(totalPages/10)} onClick={()=>{setPage(page+1)}}>Next</Button>
            {"-"}
            <Button isDisabled={page===1} onClick={()=>{setPage(page-1)}}>Previous</Button>
        </Box>
        <Text>Per Page:{totalPages}</Text>
    </Box>
  )
}

export default Pagination