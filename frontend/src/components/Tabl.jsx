/* eslint-disable react/prop-types */
import { Avatar, Box, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const Tabl = ({data}) => {
  return (
    <Box>
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Title</Th>
                    <Th>Description</Th>
                    <Th>Price</Th>
                    <Th>Category</Th>
                    <Th>Sold</Th>
                    <Th>Image</Th>
                </Tr>
                </Thead>
                <Tbody>
                {data?.map((el)=>(
                    <Tr key={el._id}>
                    <Td fontSize={"14px"}>{el.id}</Td>
                    <Td fontSize={"14px"}><Text width={"30ch"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>{el.title}</Text></Td>
                    <Td fontSize={"14px"}><Text width={"30ch"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>{el.description}</Text></Td>
                    <Td fontSize={"14px"}>{Math.ceil(el.price)}</Td>
                    <Td fontSize={"14px"}>{el.category}</Td>
                    <Td fontSize={"14px"}>{el.sold == true ? "True" : "False"}</Td>
                    <Td><Avatar size='sm' name='' src={el.image} /></Td>
                </Tr>
                ))}
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default Tabl