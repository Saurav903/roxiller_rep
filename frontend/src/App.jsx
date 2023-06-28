import {Box,Input, useToast} from "@chakra-ui/react"
import './App.css'
import Menus from "./components/Menus"
import Tabl from "./components/Tabl"
import Pagination from "./components/Pagination"
import Cardd from "./components/Cardd"
import { useEffect, useState } from "react"
import axios from "axios"
import BarChart from "./components/BarChart"



function App() {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const [search,setSearch] = useState("");
  const [months,setMonths] = useState(1);
  const [statis,setStat] = useState([]);
 
const getData = async(page,search)=>{
  let response = await axios.get(`http://localhost:8040/initial/product?page=${page}&search=${search}`);
    let resp = response.data;
    setData(resp.initialData);
    setTotalPages(resp.totallength);
}

const getStat = async(months)=>{
  let response = await axios.get(`http://localhost:8040/initial/statistics?months=${months}`);
  let reps = response.data;
  setStat(reps);
}

useEffect(()=>{
  getData(page,search);
  getStat(months);
},[page,search,months])

console.log(data);

  return (
    <>
      <Box>
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} h="80px">
          <Input placeholder="Search" htmlSize={50} width='auto' onChange={(e)=>setSearch(e.target.value)}/>
          <Menus setMonths={setMonths}/>
        </Box>

        <Box w="80%" margin={"auto"}>
          <Tabl data={data}/>
        </Box>
        <Box w="80%" margin="auto">
          <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
        </Box>
        <Box w="30%" margin={"auto"} mt="30px">
          <Cardd statis={statis} months={months}/>
        </Box>
        <Box w="70%" margin={"auto"} mt="30px">
          <BarChart statis={statis}/>
        </Box>
      </Box>
    </>
  )
}

export default App
