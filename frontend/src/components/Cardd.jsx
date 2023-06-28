/* eslint-disable react/prop-types */
import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Cardd = ({statis,months}) => {
    console.log(statis);
    let obj={
        "1":"January",
        "2":"February",
        "3":"March",
        "4":"April",
        "5":"May",
        "6":"June",
        "7":"July",
        "8":"August",
        "9":"September",
        "10":"October",
        "11":"November",
        "12":"December"
    }

  return (
    <Box >
        <Heading textAlign={"center"}>Statistics - {obj[months]}</Heading>
        <Card bg="yellow.400">
            <CardBody>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>Total sale</Text>
                    <Text>{statis.total}</Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>Total sold item</Text>
                    <Text>{statis.data1!==undefined ? statis.data1.length : 0}</Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>Total not sold item</Text>
                    <Text>{statis.data2!==undefined ? statis.data2.length : 0}</Text>
                </Box>
            </CardBody>
        </Card>
    </Box>
  )
}

export default Cardd